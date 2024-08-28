const authentication = require("./authentication.routes")

const express = require("express")
const app = express()


const initial = () => {

    app.use("/auth", authentication),
    app.use("/student", authentication)

}


module.exports = initial