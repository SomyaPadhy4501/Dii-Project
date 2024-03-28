const express = require ('express');
const app = express();
const mysql = require('mysql');
const cors = require ('cors');
app.use(cors())
app.use(express.json());

//Express Js port connection
const port = process.env.PORT || 8000;
app.listen(port , ()=> console.log(`Listening on ${port}`));

//SQL data base connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'person'
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return; 
    }
    console.log('Connected to database');
  });
  

  
//Route SQL query to create the user
app.post('/create', (req, res) => {
    const sql = "INSERT INTO people (`First_Name` , `Last_Name`, `Contact_Number`, `Email`, `Street`, `City`, `State`, `Zip_Code`, `Blood_Type`, `Date_of_Birth`, `Person_Type` ) VALUES (?)";
    const values = [
      req.body.First_Name,
      req.body.Last_Name,
      req.body.Contact_Number,
      req.body.Email,
      req.body.Street,
      req.body.City,
      req.body.State,
      req.body.Zip_Code,
      req.body.Blood_Type,
      req.body.Date_of_Birth,
      req.body.Person_Type
    ];
    connection.query(sql, [values], (err, data) => { 
      if (err) return res.json("Error");
      return res.json(data);
    });
  });
  