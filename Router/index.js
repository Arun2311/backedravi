const authentication = require("./authentication.routes")



const initial = (app) => {

    app.use("/auth", authentication)
}


module.exports = initial