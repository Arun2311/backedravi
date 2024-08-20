const express = require("express")
const { AuthenticationController } = require("../Controller/authentication.controller")


const auth = express.Router()


auth.post("/register" , AuthenticationController.register)


module.exports =  auth