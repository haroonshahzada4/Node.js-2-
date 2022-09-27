const http = require("http");

const app = require("./app")

const server = http.createServer(app);

const PORT = 5500

server.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})

