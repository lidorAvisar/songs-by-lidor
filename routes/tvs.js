const express = require("express");
const router = express.Router();

router.get("/", async(req,res) => {
  res.json({msg:"Tvs work"});
})

module.exports = router;