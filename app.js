const express = require("express")
const cors =  require("cors")
const app = express()

const connectDB = require("./Config/index")
const initial = require("./Router/index")




app.use(cors())
app.use(express.json())
connectDB()
initial()
// app.use("/securance", initial)

app.get("/", (req, res) => {
    let a = ["Ari", "ram", "luffy"]
    res.send(a)

})

app.listen(process.env.port, () => {
    console.log("server started at ", process.env.port);
})

