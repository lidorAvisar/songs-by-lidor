const express = require("express");
bcrypt = require("bcrypt");
const { SongModel,validateSongs } = require("../models/songModel")
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

router.post('/', async (req, res) => {
    const validBody = validateSongs(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details)
    }
    try {
        const drink = new SongModel(req.body);
        await drink.save();
        res.status(201).json(drink);
    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})

router.put('/:id', async (req, res) => {
    const validBody = validateSongs(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details)
    }
    try {
        const id = req.params.id;
        const data = await SongModel.updateOne({ _id: id }, req.body);
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})


module.exports = router;