const mongoose = require("mongoose");
const Joi = require("joi");

let songsChema = new mongoose.Schema({
title:String,
year:Number,
singer:String,
youtube_url:String,
genere:String,
},{timestamps:true})
exports.SongModel = mongoose.model("songs",songsChema)

exports.validateSongs = (_reqBody) => {
let joiSchema = Joi.object({
title:Joi.string().min(2).max(400).required(),
year:Joi.number().min(1900).max(2500).required(),
singer:Joi.string().min(2).max(400).required(),
youtube_url:Joi.string().min(2).max(400).required(),
genere:Joi.string().min(2).max(400).required(),
})
return joiSchema.validate(_reqBody)
}