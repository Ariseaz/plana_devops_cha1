const express = require("express");

const app = express();
const port = 3000

//
// Registers a HTTP GET route.
//
app.get("/", (req, res) => {
    res.json({
        "timestamp": "<current date and time>",
        "hostname": "<Name of the host (IP also accepted)>",
        "engine": "<Name and/or version of the engine running>",
        "visitor ip": "<the IP address of the visitor>"
      });
});

//
// Starts the HTTP server.
//
app.listen(port, () => {
    console.log(`First example app listening on port ${port}, point your browser at http://localhost:3000`);
});  