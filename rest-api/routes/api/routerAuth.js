const express = require("express")

const { register, login, getCurrent, logout, updateAvatar } = require("../../controllers/auth")
const { schemaJoiRegister, schemaJoiLogin } = require("../../schemas")
const { ctrlWrapper } = require("../../helpers")
const { validateBody, authenticate, upload } = require("../../middlewares")

const router = express.Router()

// SignUp - це і є Реєстрація (register)
router.post('/register', validateBody(schemaJoiRegister), ctrlWrapper(register))

// SignIn - це і є Авторизація (login)
router.post('/login', validateBody(schemaJoiLogin), ctrlWrapper(login))

router.get("/current", authenticate, ctrlWrapper(getCurrent))

router.post("/logout", authenticate, ctrlWrapper(logout))

router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(updateAvatar))

module.exports = router
