const express = require("express");
const router = express.Router();

router.get("/",async(req,res) => {
  res.json({msg:"express home page 555"})
})

module.exports = router;