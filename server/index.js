const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM customer_data", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/api/transaction", (req, res) => {
  db.query("SELECT * FROM transfer_table", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/Transfer", (req, res) => {
  const receiveremail = req.body.receiver_id;
  const sender_email = req.body.sender_id;
  const amount = req.body.amountTrans;
  if (sender_email.trim() == receiveremail.trim()) {
    console.log("enter different emails");
  }
  var receiverquery =
    'SELECT cus_balance FROM customer_data WHERE cus_email="' +
    receiveremail +
    '"';
  var senderquery =
    'SELECT cus_balance FROM customer_data WHERE cus_email="' +
    sender_email +
    '"';
  let actualSenderBalance;
  let actualReceiverBalance;
  const sucessMessage = () => {
    let status = "success";
    db.query(
      "INSERT INTO transfer_Table (sender,receiver,amount,status) VALUES (?,?,?,?)",
      [sender_email, receiveremail, amount, status],
      (err, result) => {
        if (!err) res.redirect("http://localhost:3000/viewcustomer");
      }
    );
  };
  const failureMessage = () => {
    let status = "Failure";
    db.query(
      "INSERT INTO transfer_Table (sender,receiver,amount,status) VALUES (?,?,?,?)",
      [sender_email, receiveremail, amount, status],
      (err, result) => {
        if (!err) res.redirect("http://localhost:3000/viewcustomer");
      }
    );
  };
  db.query(senderquery, function (err, result) {
    if (err) {
      failureMessage();
    } else {
      actualSenderBalance = result[0].cus_balance;
      if (actualSenderBalance >= amount) {
        db.query(
          "UPDATE customer_data SET cus_balance=? WHERE cus_email=?",
          [actualSenderBalance - amount, sender_email],
          (error, result1) => {
            if (error) {
              failureMessage();
            } else {
            }
          }
        );

        db.query(receiverquery, function (err, result) {
          if (err) {
            failureMessage();
          } else {
            actualReceiverBalance = result[0].cus_balance;
            db.query(
              "UPDATE customer_data SET cus_balance=? WHERE cus_email=?",
              [Number(actualReceiverBalance) + Number(amount), receiveremail],
              (error, result1) => {
                if (error) {
                  failureMessage();
                } else {
                  sucessMessage();
                }
              }
            );
          }
        });
      } else {
        failureMessage();
      }
    }
  });
});

const mysql = require("mySql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "arihant@123",
  database: "customer_database",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("connected");
});

app.listen(3001, () => {
  console.log("Server is running");
});

app.get("/", (req, res) => {
  res.send("Hello");
});
