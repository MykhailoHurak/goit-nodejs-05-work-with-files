const BookModel = require("../../models/book")

const getAllBooks = async (req, res) => { 
        const { _id: owner } = req.user

        console.log(req.query)
        const { page = 1, limit = 2 } = req.query
        const skip = (page - 1) * limit
        const result = await BookModel.find({ owner }, "-createdAt -updatedAt", { skip, limit })
        //                              .populate("owner")
        res.json(result)
}

module.exports = getAllBooks