const express = require("express");
const sendMail = require("./controller/sendMail");
const app = express();
let PORT = 5000;

app.get("/", (req, res) => {
  res.send("This is a server");
});

app.get("/sendmail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Live in port no. ${PORT}`);
    });
  } catch (error) {}
};

start();
