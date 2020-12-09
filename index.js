// code away!

const server = require('./server')
const port = 6000

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})