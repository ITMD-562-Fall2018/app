const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SampleSchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = Book = mongoose.model("sample", SampleSchema);
