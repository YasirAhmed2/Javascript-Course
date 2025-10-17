console.log("Server")
import http from "node:http";
const hostname="localhost";
const port=3000;
const Server=http.createServer(async (req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/json");
    const resJSON={
        message : "First server",
    class:"Batch VI",
    }
    const finalRes=await JSON.stringify(resJSON);
    res.end(finalRes);
});
Server.listen(port,hostname,()=>{
    console.log("Server running");
});