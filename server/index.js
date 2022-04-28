require('dotenv').config()

const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3001, () => {
    console.log("running on port 3001")
});

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT o.id, o.spie, o.num, o.ref, o.sn, o.attrib, o.design, o.rev, o.obs, u.lastname AS userid FROM outils o LEFT JOIN users u ON o.userid = u.id";
    db.query(sqlSelect, (err, result) => {
        if (err) console.log(err)
        else
        res.send(result)
    })
    // console.log(process.env)
})

app.get('/api/get_users', (req, res) => {
    const sqlSelect = "SELECT * FROM users";
    db.query(sqlSelect, (err, result) => {
        if (err) console.log(err)
        else
        res.send(result)
    })
})

app.get('/api/get_company', (req, res) => {
    const sqlSelect = "SELECT DISTINCT num FROM outils";
    db.query(sqlSelect, (err, result) => {
        if (err) console.log(err)
        else
        res.send(result)
    })
})


app.post('/api/insert', (req, res) => {
    const spie = req.body.spie
    const num = req.body.num
    const ref = req.body.ref
    const design = req.body.design
    const obs = req.body.obs
    const sn = req.body.sn
    const rev = req.body.rev
    const userid = req.body.userid
    // const attrib = req.body.attrib

    const sqlInsert = "INSERT INTO outils (spie, num, ref, design, obs, sn, rev, userid, attrib) VALUES (?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [spie, num, ref, design, obs, sn, rev, userid, attrib], (err, result) => {
        if (err) console.log(err)
        else
        console.log(result)
    })
})

app.post('/api/insertusers', (req, res) => {
    const lastname = req.body.lastname
    const firstname = req.body.firstname
    const email = req.body.email
    const password = req.body.password
    
    const sqlInsert = "INSERT INTO users (lastname, firstname, email, password) VALUES (?,?,?,?)";
    db.query(sqlInsert, [lastname, firstname, email, password], (err, result) => {
        if (err) console.log(err)
        else
        console.log(result)
    })
})

app.delete('/api/delete/:spie', (req, res) => {
    const idd = req.params.spie
    const sqlDelete = "DELETE FROM outils WHERE id = ?"
    db.query(sqlDelete, idd, (err, result) => {
        if (err) console.log(err)
        else
        console.log(result)
    })
})


app.put('/api/update', (req, res) => {
    const updateid = req.body.updateid
    const update = req.body.update
    const idd = req.body.id
    if (updateid === "spie"){
        const sqlUpdate = "UPDATE outils SET spie = ? WHERE id = ?"
        db.query(sqlUpdate, [update, idd], (err, result) => {
            if (err) console.log(err)
            else
            console.log(result)
        })
    }
    if (updateid === "num"){
        const sqlUpdate = "UPDATE outils SET num = ? WHERE id = ?"
        db.query(sqlUpdate, [update, idd], (err, result) => {
            if (err) console.log(err)
            else
            console.log(result)
        })
    }
    if (updateid === "ref"){
        const sqlUpdate = "UPDATE outils SET ref = ? WHERE id = ?"
        db.query(sqlUpdate, [update, idd], (err, result) => {
            if (err) console.log(err)
            else
            console.log(result)
        })
    }
    if (updateid === "design"){
        const sqlUpdate = "UPDATE outils SET design = ? WHERE id = ?"
        db.query(sqlUpdate, [update, idd], (err, result) => {
            if (err) console.log(err)
            else
            console.log(result)
        })
    }
    if (updateid === "obs"){
        const sqlUpdate = "UPDATE outils SET obs = ? WHERE id = ?"
        db.query(sqlUpdate, [update, idd], (err, result) => {
            if (err) console.log(err)
            else
            console.log(result)
        })
    }
    if (updateid === "sn"){
        const sqlUpdate = "UPDATE outils SET sn = ? WHERE id = ?"
        db.query(sqlUpdate, [update, idd], (err, result) => {
            if (err) console.log(err)
            else
            console.log(result)
        })
    }
    if (updateid === "rev"){
        const sqlUpdate = "UPDATE outils SET rev = ? WHERE id = ?"
        db.query(sqlUpdate, [update, idd], (err, result) => {
            if (err) console.log(err)
            else
            console.log(result, update)
        })
    }
    if (updateid === "userid"){
        const sqlUpdate = "UPDATE outils SET userid = ? WHERE id = ?"
        db.query(sqlUpdate, [update, idd], (err, result) => {
            if (err) console.log(err)
            else
            console.log(result)
        })
    }
    // if (updateid === "attrib"){
    //     const sqlUpdate = "UPDATE outils SET attrib = ? WHERE id = ?"
    //     db.query(sqlUpdate, [update, idd], (err, result) => {
    //         if (err) console.log(err)
    //         else
    //         console.log(result)
    //     })
    // }
})
