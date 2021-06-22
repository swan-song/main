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