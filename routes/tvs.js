const express = require("express");
const axios = require('axios')
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const url = 'https://monkeys.co.il/api2/tv.php';
        const resp = await axios.get(url);
        res.json(resp.data);
    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})

router.get('/single/:index', async (req, res) => {
    try {
        const index = req.params.index
        const url = 'https://monkeys.co.il/api2/tv.php';
        const resp = await axios.get(url);
        res.json(resp.data[index])
    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})

//?s=
router.get('/search', async (req, res) => {
    try {
        const query5 = req.query.s
        const url = 'https://monkeys.co.il/api2/tv.php';
        const resp = await axios.get(url);
        const filter_ar = resp.data.filter(item =>
            item.name.includes(query5.toLowerCase())||item.descrption.includes(query5.toLowerCase()));
        res.json(filter_ar);
    }
    catch (err) {
        console.log(err);
        res.status(502).json({ err })
    }
})

module.exports = router;