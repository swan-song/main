const router = require("express").Router()
const pool = require("../db");


// User Info Routes
// Create User Info
router.post("/create_user_info", async (req, res) => {
    try {
      const { address_line_1, address_line_2, city, state, zip, phone } = req.body;
      const createUserInfo = await pool.query(
        "INSERT INTO user_info (address_line_1, address_line_2, city, state, zip, phone) VALUES($1,$2,$3,$4,$5,$6)",
        [address_line_1, address_line_2, city, state, zip, phone]
      );
      res.json(createUserInfo.rows);
    } catch (err) {
      console.log(err.message);
    }
  });


  module.exports = router