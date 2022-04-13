require("dotenv").config();
const express = require("express");

const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});

app.get("/", (req, res) => {
  if (req.header("user-agent").includes("Discordbot")) {
    res.sendFile(__dirname + "/image.png");
  } else if (!req.header("accept") && !req.header("connection")) {
    res.sendFile(__dirname + "/image.png");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.get("/image.png", (req, res) => {
  res.sendFile(__dirname + "/image.png");
});