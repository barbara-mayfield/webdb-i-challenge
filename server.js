const express = require("express")
const accountsRouter = require("./routers/accounts")
const db = require("./data/dbConfig.js");

const server = express();
server.use(express.json());

const HOST = process.env.HOST || "localhost"
const PORT = process.env.PORT || 4000

server.use(express.json())
server.use("/api/accounts", accountsRouter)


server.get("/", (req, res) => {
  res.json({ message: "Welcome to the webdb-i-challenge API" })
})

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "Internal Server Error"
  })
})

server.listen(PORT, () => {
  console.log(`Listening on http://${HOST}:${PORT}`)
})

module.exports = server;




