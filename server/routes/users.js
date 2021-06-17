const router = require("express").Router();
const pool = require("../db");


router.get("/", async (req, res) => {
  res.send("Welcome to our node server!") 
})
// User Routes
// Create a User
router.post("/create_user", async (req, res) => {
    try {
      const { first_name, last_name, email, password } = req.body;
      const createUser = await pool.query(
        "INSERT INTO users (first_name,last_name,email,password) VALUES($1,$2,$3,$4)",
        [first_name, last_name, email, password]
      );
      res.json(createUser.rows);
    } catch (err) {
      console.log(err.message);
    }
  });
  
  // Get all users
  router.get("/get_all_users", async (req, res) => {
    try {
      const getUsers = await pool.query(
        "SELECT * from users ORDER BY id"
      );
      res.json(getUsers.rows);
    } catch (err) {
      console.log(err.message);
    }
  });
  
  // Get user by ID
  router.get("/get_user/:id", async (req, res) => {
    try {
      const { id } = req.params
      const getUser = await pool.query(
        "SELECT * from users WHERE id =$1 ORDER BY id", [id]
      );
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
      const deleteUser = await pool.query(
        "DELETE FROM users WHERE id = $1",
        [id]
      );
      res.json("Deleted");
    } catch (err) {
      console.log(err.message);
    }
  });

  // router.post("/login", async (req, res) => {
  //   const { email2 } = req.body;
  //   const user = await pool.query("SELECT email FROM users WHERE email = $1",
  //   [email2])
  //   console.log("here", user)
  // });

module.exports = router