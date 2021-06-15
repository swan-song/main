const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 3000;
const pool = require("./db");
console.log(port)

// middleware
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to our node server")
})

app.listen(port, () => {
  console.log(`Your server is being hosted on localhost:${port}`);
});