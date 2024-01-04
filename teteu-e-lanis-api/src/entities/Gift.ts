import  { v1 } from "uuid";
import mongoose, { Schema } from "mongoose";

const Gift = mongoose.model('Gift', new mongoose.Schema({
    _id: { type: String, default: function genUUID() {
        return v1()
    }},
    name: String,
    url: String,
}))

module.exports = Gift
