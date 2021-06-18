const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 3001;
const pool = require("./db");


// middleware
app.use(express.json());
app.use(cors());
app.use("/users", require("./routes/users"))
app.use("/user_info", require("./routes/user_info"));
app.get("/", async (req, res) => {
  res.send("Welcome to our node server!") 
})


// Get all car data
app.get("/getcars", async (req, res) => {
  const data = await pool.query("SELECT * FROM products")
  res.json(data)  
})



app.listen(port, () => {
  console.log(`Your server is being hosted on localhost:${port}`);
});