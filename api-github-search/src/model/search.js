const mongoose = require('mongoose');
const { Schema } = mongoose;
const { handleE11000 } = require("./errorHandler");

const SearchSchema = new Schema({
    query: { type: String, required: true }
}, { timestamps: true });

SearchSchema.on("save", handleE11000);

const Search = mongoose.model('Search', SearchSchema);

module.exports = {
    Search
}
