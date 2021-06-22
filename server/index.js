const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 3001;
const pool = require("./db");
// import flash
// import session

const bcrypt = require("bcrypt");
const passport = require('passport');
const initializePassport = require('./passport-config')
const flash = require('express-flash'); 
const session = require('express-session');
const methodOverride = require('method-override');



// middleware
app.use(cors({
  origin: ["http://localhost:3001"],
  methods: ["GET", "POST"],
  credentials: true,
}))
app.use(flash());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3001"],
  methods: ["GET", "POST"],
  credentials: true,
}));
// define and use app.use(flash())
// app.use(session())
app.use("/users", require("./routes/users"))
app.use("/user_info", require("./routes/user_info"));
app.get("/", async (req, res) => {
  res.send("Welcome to our node server!") 
})

initializePassport(
  passport
  // email => users.find(user => user.email === email),
  // id => users.find(user => user.id === id)
)

// Get all car data
app.get("/getcars", async (req, res) => {
  const data = await pool.query("SELECT * FROM products")
  res.json(data)  
})

app.post("/login", passport.authenticate('local'), (req, res) => {
  // if res returns a valid user object, res.send(200)
  // if(res)
});



app.listen(port, () => {
  console.log(`Your server is being hosted on localhost:${port}`);
});