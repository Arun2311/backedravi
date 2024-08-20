const authentication = require("./authentication.routes")



const initial = (app) => {

    app.use("/a", authentication)
}


module.exports = initial