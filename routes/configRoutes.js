const indexR = require("./index")
const usersR = require("./users")

// פונקציה שתגדיר בשבילנו את כל הראוטים
// והרואטרים שהם מפעילים כאשר נגשים
// אליהם בכתובת
exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
}