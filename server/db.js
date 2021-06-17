const Pool = require("pg").Pool

const pool = new Pool({
  user: "mtwafiyc",
  password: "lp0KEYKVVbhbYazULziOqM_iyUYEQwnp",
  host: "batyr.db.elephantsql.com",
  port: 5432,
  database: "mtwafiyc"
})

module.exports = pool;