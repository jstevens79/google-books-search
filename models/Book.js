const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({

  googleId: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  authors: {
    type: Array
  },

  publishedDate: {
    type: String
  },

  description: {
    type: String
  },

  image: {
    type: String
  },

  link: {
    type: String
  }

});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;