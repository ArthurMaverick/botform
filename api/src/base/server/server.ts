import {server} from "./config/app"
const port = process.env.SERVER_PORT || 8080

server.listen(port, ()=> console.log(`running in port localhost:${port}`))