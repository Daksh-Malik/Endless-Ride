import mysql from 'mysql2'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Daksh123@",
    database:"crud_application",
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

var salt = 10;

const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST","GET"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.post("/create", async (req,res) => {
    const {name,email,message} = req.body;
    console.log(req.body);
    db.query("INSERT INTO contact (name,email,message) VALUES (?,?,?)",[name,email,message], (err,result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send("Error executing MySQL query");
            return;
        }
        console.log('Inserted new record into contact table:');
        res.send("Message Sent!");
    }); 
})

const verifyUser = (req,res,next) => {
    const token = req.cookies.token
    if(!token){
        return res.json({Error: "You are not authorized"})
    } else {
        jwt.verify(token, "jwt-secret-key", (err,decoded) => {
            if(err){
                return res.json({Error: "Token is not okay"})
            }
            else{
                req.name = decoded.name
                next()
            }
        })
    }
}

app.get("/", verifyUser, (req,res) => {
    return res.json({Status: "Success", name: req.name})
})

app.get("/logout" , (req,res) => {
    res.clearCookie('token')
    return res.json({Status:"Success"})
})

// app.get('/read', (req,res) => {
//     const sql = 'SELECT * FROM signupdata WHERE name=?'
//     db.query(sql, [req.cookies.token], (err,result) => {
//         if (err) {
//             console.error('Error executing MySQL query:', err);
//             res.status(500).send("Error executing MySQL query");
//             return;
//         }
//         res.send("Message Sent!");
//     })
// })
app.get('/read', verifyUser, (req,res) => {
    const sql = 'SELECT * FROM signupdata WHERE name=?';
    db.query(sql, [req.name], (err,result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send("Error executing MySQL query");
            return;
        }
        if (result.length > 0) {
            res.json(result[0]);
        } else {
            res.status(404).send("User not found");
        }
    });
});

app.post("/register", (req, res) => {
    const sql = "INSERT INTO signupdata (name,email,password) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) {
            console.log(err);
            return res.json({ Error: "Error in hashing the password" });
        }
        const values = [
            req.body.name,
            req.body.email,
            hash
        ]
        db.query(sql, [values], (err, result) => {
            if (err) {
                console.log(err);
                return res.json({ Error: "Error in inserting data" });
            }
            return res.json({ Status: "Success" });
        })
    })
})

app.post("/login", (req,res) => {
    const sql = "SELECT * FROM signupdata WHERE name=?"
    db.query(sql, [req.body.name], (err,data) => {
        if (err) {
            console.log(err);
            return res.json({ Error: "Error in login in server" });
        } 
        if(data.length > 0){
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if (err) {
                    console.log(err);
                    return res.json({Error: "Password compare error"});
                } 
                if(response){
                    const name = data[0].name;
                    const token = jwt.sign({name}, "jwt-secret-key" , {expiresIn:'1d'}); //last field is optional and gives expiry of 1 day
                    res.cookie('token',token)
                    return res.json({Status: "Success"})
                } else {
                    return res.json({Error: "Password not matched"})
                }
            })
        }
        else{
            res.send("Incorrect Username")
        }
    })
})

app.listen(8080, ()=>{
    console.log("Server has started at port 8080!");
})