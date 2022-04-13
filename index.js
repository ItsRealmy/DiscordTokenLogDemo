const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  if (req.header("user-agent").includes("Discordbot")) {
    res.sendFile(__dirname + "/image.png");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.get("/image.png", (req, res) => {
  res.sendFile(__dirname + "/image.png");
});