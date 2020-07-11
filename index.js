const express = require("express")
const app = express()
const userRouter = require("./backend/src/routers/user")
const moviesRouter = require("./backend/src/routers/movies")
const mongoose = require("mongoose")
const cors = require('cors');

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect("mongodb://127.0.0.1:27017/MyFlex", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

app.use(express.json());
app.use(userRouter)
app.use(moviesRouter)



app.listen(5000, () => {
    console.log("the server is running ")
})
