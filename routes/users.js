const express = require("express");
const router = express.Router();
// הראוטר ביחס לעמוד בית שהוגר בראוט ב
// app.use("/users",usersR)
router.get("/",async(req,res) => {
  res.json({msg:"users work"})
})

module.exports = router;