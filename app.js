const express = require("express")

const app = express()
const connectDB = require("./Config/index")
const initial = require("./Router/index")

connectDB()
initial(app)


app.get("/", (req, res) => {

    let a = ["Ari", "ram", "luffy"]
    res.send(a)

})



app.listen(process.env.port, () => {
    console.log("server started at ", process.env.port);
})