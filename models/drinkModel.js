const mongoose = require('mongoose');
const Joi = require('joi');

const drinkSchema=new mongoose.Schema({
    name:String,
    ml:Number,
    price:Number
})

exports.DrinkModel= mongoose.model('drinks',drinkSchema);
