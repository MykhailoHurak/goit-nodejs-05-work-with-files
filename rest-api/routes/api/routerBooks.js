const express = require('express')

const { isValidId, authenticate } = require("../../middlewares")
const { ctrlWrapper } = require("../../helpers")
const { getAllBooks, getBookById, addBook, removeBook, updateBook, updateBookFavorite } = require("../../controllers/books")

const router = express.Router()

router.get('/', authenticate, ctrlWrapper(getAllBooks))

router.get('/:id', authenticate, isValidId, ctrlWrapper(getBookById))

router.post('/', authenticate, ctrlWrapper(addBook))

router.delete('/:id', authenticate, isValidId,  ctrlWrapper(removeBook))

router.put('/:id', authenticate, isValidId, ctrlWrapper(updateBook))

router.patch('/:id/favorite', authenticate, isValidId, ctrlWrapper(updateBookFavorite))

module.exports = router
