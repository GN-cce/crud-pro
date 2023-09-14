const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1212",
  database: "emp",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const dob = req.body.dob;
  const contact = req.body.contact;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (name, dob, contact, position, wage) VALUES (?,?,?,?,?)",
    [name, dob, contact, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values insert successfully!");
      }
    }
  );
});

app.get("/getview", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const dob = req.body.dob;
  const contact = req.body.contact;
  const position = req.body.position;
  const wage = req.body.wage;
  const formattedDate = new Date(dob)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  db.query(
    "UPDATE employees SET name = ?, dob = STR_TO_DATE(?, '%Y-%m-%d %H:%i:%s'), contact = ?, position = ?, wage = ? WHERE id = ?",
    [name, formattedDate, contact, position, wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("server is running");
});
