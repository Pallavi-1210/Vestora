const { Schema } = require("mongoose");
// Schema Mongoose ka component hai jo documents ki structure define karne ke kaam aata hai.

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

module.exports = { HoldingsSchema };
