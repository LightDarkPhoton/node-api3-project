const express = require('express');

const server = express();

// Importing our routes
const userRouter = require("./users/userRouter")
const postRouter = require("./posts/postRouter")

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

// Making sure our server communicates in JSON
server.use(express.json())


server.use(logger)

//custom middleware

function logger(req, res, next) {
  console.log(req.url, res.method)
}

module.exports = server;
