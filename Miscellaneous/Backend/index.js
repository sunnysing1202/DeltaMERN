const express = require("express");
const app = express();
const port = 8080;


app.get("/register", (req, res) => {
    let { user, password} = req.query;
    res.send(`standard get response. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    let { user, password} = req.body;
    res.send(`standard POST response. Welcome ${user}!`);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});