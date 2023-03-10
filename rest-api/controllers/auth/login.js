const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const ModelAuthUser = require("../../models/authUser")
const { HttpError } = require("../../helpers")
const { SECRET_KEY } = process.env

const login = async (req, res) => {
    const { email, password } = req.body

    const user = await ModelAuthUser.findOne({email})
    if (!user) {
        throw HttpError(401, "Email or Password is invalid")
    }

    const passwordCompare = await bcrypt.compare(password, user.password)
    if (!passwordCompare) {
        throw HttpError(401, "Password is invalid")
    }

    const payload = {
        id: user._id,
    }

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" })

    await ModelAuthUser.findByIdAndUpdate(user._id, {token})

    res.json({
        token,
    })
}

module.exports = login