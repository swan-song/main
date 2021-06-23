if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const router = require("express").Router();
const express = require("express");
const app = express();
const pool = require("../db");
const cors = require("cors");
const bcrypt = require("bcrypt");
const passport = require("passport");
const initializePassport = require("../passport-config");
const flash = require("express-flash");
const session = require("express-session");

initializePassport(passport);

app.use(
  cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
router.get("/", async (req, res) => {
  res.send("Welcome to our node server!");
});
// User Routes
// Create a User
router.post("/create_user", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    console.log(salt);
    const { first_name, last_name, email } = req.body;
    const password = await bcrypt.hash(req.body.password, salt);
    console.log(password);
    const createUser = await pool.query(
      "INSERT INTO users (first_name,last_name, email, password) VALUES($1,$2,$3,$4)",
      [first_name, last_name, email, password]
    );
    console.log(createUser);
    console.log("Created User.");
    res.status(200).send(200);
  } catch (err) {
    console.log(err);
    // res.status(400).send("User was not created.");
  }
});

// make a reservation
router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const loginSuccess = await pool.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password]
  );
  // (err, result) => {
  //   res.send({err:err});
  // }
  if (loginSuccess.length > 0) {
    res.send(loginSuccess.rows);
  } else {
    res.send({ Message: "Wrong email/password combination!" });
  }
});

router.post("/make_reservation", async (req, res) => {
  try {
    const { reservationNames, userId } = req.body;
    const createUser = await pool.query(
      "INSERT INTO users (first_name,last_name,email,password) VALUES($1,$2,$3,$4)",
      [first_name, last_name, email, password]
    );
    console.log("Created User.");
    res.status(200);
  } catch (err) {
    res.status(400).send("User was not created.");
  }
});

// Get all users
router.get("/get_all_users", async (req, res) => {
  try {
    const getUsers = await pool.query("SELECT * from users ORDER BY id");
    res.json(getUsers.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// Get user by ID
router.get("/get_user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getUser = await pool.query(
      "SELECT * from users WHERE id =$1 ORDER BY id",
      [id]
    );
    res.json(getUser.rows);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/get_user_by_email", async (req, res) => {
  try {
    const { email } = req.body;
    const getUser = await pool.query("SELECT * from users WHERE email =$1", [
      email,
    ]);
    res.json(getUser.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// Update User by id
router.post("/edit_user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, password } = req.body;
    const updateUser = await pool.query(
      "UPDATE users SET(first_name,last_name,email,password) = ($1,$2,$3,$4) WHERE id = $5",
      [first_name, last_name, email, password, id]
    );
    res.json("updated");
  } catch (err) {
    console.log(err.message);
  }
});

// Delete User by ID
router.post("/delete_user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [
      id,
    ]);
    res.json("Deleted");
  } catch (err) {
    console.log(err.message);
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

module.exports = router;
