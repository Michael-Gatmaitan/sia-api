const { Schema } = require("mongoose");

const userSchema = new Schema({
    username: String,
    password: String,
})