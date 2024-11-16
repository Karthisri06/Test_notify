import mysql2 from 'mysql2'
import express from 'express'

const connection= mysql2.createConnection({
    host: "localhost" ,//"127.0.0.1"
    database: "project1",
    user: "root",
    password:"sri@2004",
});
const app =express();
 
const PORT=5000;

app.listen(PORT, () => {
    console.log(`SERVER : http://localhost:${PORT}`);
    connection.connect((err) => {
        if (err) throw err;
        console.log("DATABASE CONNECTED");
    });
});

app.use("/all",(req, res)=>{
    const sql_query = 'SELECT * FROM project1.records_sep;'
    connection.query(sql_query,(err, result)=> {
        if(err) throw err;
        res.send(result);
    })
})
