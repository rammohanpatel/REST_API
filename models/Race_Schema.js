const mongoose = require("mongoose");

const race_schema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,

    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    dob: {
        type: Date,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    score: {
        type: Number,
        required: true,
        trim: true,
    },
    event: {
        type: String,
        required: true,
        default: "100m",
    },
})

const Race = new mongoose.model("Race", race_schema);

module.exports = Race;