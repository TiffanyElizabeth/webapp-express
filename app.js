const express = require('express');
const cors = require("cors");
const errorsHandler = require("./middleware/errorsHandler");
const notFound = require("./middleware/notFound");
const moviesRouter = require("./routers/moviesRouter");


const app = express();
const { PORT, FE_URL } = process.env;

// middleware for static files (images)
app.use(express.static("public"));

// middleware for req.body parsing 
app.use(express.json());

// middleware CORS (communication with FE)
app.use(cors({
    origin: process.env.FE_URL,
}));

// routes
app.use("/movies", moviesRouter);

// middlewares to manage errors (404 & 500)
app.use(notFound);
app.use(errorsHandler);

/*app.get('/', (req, res) => {
    res.send('Hello World!')
});*/

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});