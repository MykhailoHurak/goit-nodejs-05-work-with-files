const fs = require("fs/promises")
const path = require("path")
const ModelUser = require("../../models/authUser")

const dirAvatars = path.join(__dirname, "../../", "public", "avatars")

const updateAvatar = async (req, res) => {
    const {path: uploadTemp, originalname} = req.file
    const {_id} = req.user
    const filename = `${_id}_${originalname}`
    const uploadResult = path.join(dirAvatars, originalname)

    await fs.rename(uploadTemp, uploadResult)

    const avatarURL = path.join("avatars", filename)

    await ModelUser.findByIdAndUpdate(_id, {avatarURL})

    res.json({
        avatarURL,
    })
}

module.exports = updateAvatar