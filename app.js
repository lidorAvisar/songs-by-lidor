const express = require("express");
const path = require("path");
const http = require("http");

const {routesInit} = require("./routes/configRoutes");
// const indexR = require("./routes/index");
// const usersR = require("./routes/users");

// מייצר משתנה שמקבל את היכולות של אקספרס ויוכל להשתמש בפקודות
// של הספריה
const app = express();

// שכל הקבצים בתקיית פאבליק יהיו חשופים לצד לקוח
app.use(express.static(path.join(__dirname,"public")));

routesInit(app)
// app.use("/",indexR);
// app.use("/users",usersR);
// מייצר ראוט שאם מגיעים אליו
// יחזיר ג'ייסון
// app.use("/api", (req,res)=>{
//   res.json({msg:"express work 333"});
// })

// מפעיל את השרת עם יכולות מיוחדות שנגדיר לאקספרס
const server = http.createServer(app);

server.listen(3003);
