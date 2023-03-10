const BookModel = require("../../models/book")
const { HttpError } = require("../../helpers")

const updateBookFavorite = async (req, res) => {
    const { id } = req.params
    const result = await BookModel.findByIdAndUpdate(id, req.body, { new: true })

    if (!result) {
        throw(HttpError(404, "Not found"))
    }

    res.json(result)
}

module.exports = updateBookFavorite