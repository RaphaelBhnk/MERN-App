const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true, minLength: 10 },
  address: { type: String, required: true },
  creator: { type: String, required: true },
});

module.exports = mongoose.model("Model", modelSchema);
