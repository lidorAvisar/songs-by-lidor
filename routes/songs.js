const express = require("express");
bcrypt = require("bcrypt");
const { SongModel } = require("../models/songModel")
const router = express.Router();

router.get("/", async (req, res) => {
    try{
        const perPage = 5;
        const page = req.query.page - 1 || 0;
        const data = await SongModel.find({})
        .limit(perPage)
        .skip(page * perPage)
        res.json(data);
    }
    catch(err){
        console.log(err);
        res.status(502).json({err})
    }
})

module.exports = router;