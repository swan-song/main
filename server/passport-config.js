const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport) {
  const authenticateUser = async (username, password, done) => {
    try {
       const userURL = "http://localhost:3001/get_user_by_email"
      const user = await fetch (userURL, {method: "get", body: {email:username}})
      console.log(user)
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (e) {
      return done(e)
      }
    }
  passport.use( new LocalStrategy(authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    return done(null, user)
  })
}

module.exports = initialize