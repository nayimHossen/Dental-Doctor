const express = require("express");
const app = express();
const cors = require("cors");
const errorMiddleware = require("./middleware/error");
const cookieparser = require("cookie-parser");

app.use(express.json());
app.use(cookieparser());
app.use(cors());

//ROUTE IMPORT
const serviceRoute = require("./routes/serviceRoute");
const bookingRoute = require("./routes/bookingRoute");

app.use("/api/v1", serviceRoute, bookingRoute);

//MIDDLEWARE FOR ERROR
app.use(errorMiddleware);

module.exports = app;
