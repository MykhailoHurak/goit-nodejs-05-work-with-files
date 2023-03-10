const getAllBooks = require("./getAllBooks")
const getBookById = require("./getBookById")
const addBook = require("./addBook")
const removeBook = require("./removeBook")
const updateBook = require("./updateBook")
const updateBookFavorite = require("./updateBookFavorite")

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    removeBook,
    updateBook,
    updateBookFavorite,
}