const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const PORT = process.env.PORT

const { sequelize } = require("./lib/sequelize")
sequelize.sync({ alter: true })

const app = express();

app.use(cors());
app.use(express.json())

const { bookRoutes, tagRoutes } = require("./routes")
app.use("/books", bookRoutes)
app.use("./tags", tagRoutes)

app.listen(PORT, () => {
  console.log("Listening in port", PORT)
})