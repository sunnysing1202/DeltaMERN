const express = require("express");
const app = express();
const ExpressError = require(("./ExpressError"));

// app.use((req, res, next) => {
//     console.log("Hi, I am 1st  middleware");
//     return next();
// });
//
// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//     return next();
// });

//logger -> morgan
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.time);
//     next();
// });

// app.use("/api", (req, res, next) => {
//     let {token} = req.query;
//     if(token === "giveaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED!!")
// });

const checkToken = (req, res, next) => {
    let {token} = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED!!");
};

// app.use((req, res, next) => {
//     console.log("I am only for random");
//     next();
// });

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

app.get("/err", (req, res) => {
    abce = abce;
});

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is Forbidden");
});

// error handling middleware
app.use((err, req, res, next) =>{
    let {status = 500, message = "Some error occured!!"} = err;
    res.status(status).send(message);
});

//Error - 404
// app.use((req, res) => {
//     res.status(404).send("page not found!");
// });

app.listen(8080, () => {
    console.log("Server started on port 8080");
});