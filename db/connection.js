
const mongoose = require("mongoose");

mongoose.connect('mongodb://0.0.0.0:27017/Olympics', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Failed to Connect MongoDB"))

