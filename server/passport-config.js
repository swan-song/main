<<<<<<< HEAD
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport) {
  const authenticateUser = async (username, password, done) => {
    try {
      const userURL = "http://localhost:3001/get_user_by_email";
      const user = await fetch(userURL, {
        method: "get",
        body: { email: username },
      });
      console.log(user);
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };
  passport.use(new LocalStrategy(authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, user);
  });
}

module.exports = initialize;
=======
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const axios = require("axios")

function initialize(passport) {
  // console.log("running")
  const authenticateUser = async (email, password, done) => {
    console.log(email,password)
     // make db call with email
     // const user = await dbmodel pool.query("SELECT * from users WHERE email =$1") 
     // if email comes back, compare
     // else return error
     
     
      if (user == null) {
        return done(null, false,);
      } else {
        try {
           if (await bcrypt.compare(password, user.password)) {
            return done(null, user);
        } else {
          return done(null, false, { message: 'Password incorrect' })
        }
      } catch (error) {
        return done(error);
      }
      }
  };
  passport.use( new LocalStrategy({usernameField: "email"},authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser(async (id, done) => {
    return done(null, user.id);
  });
}

module.exports = initialize
// const authenticateUser = async (email, password, done) => {
//   const user = getUserByEmail(email)
//   if (user == null) {
//     return done(null, false, { message: 'No user with that email' })
//   }
//   try {
//     if (await bcrypt.compare(password, user.password)) {
//       return done(null, user)
//     } else {
//       return done(null, false, { message: 'Password incorrect'})
//     }
//   } catch (e) {
//     return done(e)
//   }
// }
>>>>>>> 49c2fd95505feef4f1d786be32903a6e9eabacdd
