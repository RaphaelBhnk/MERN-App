const express = require("express");
const bodyParser = require("body-parser");
const routeRoutes = require("./routes/route");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv:...")
  .then(() => {
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Acces-Control-Allow-Origin", "*");
  res.setHeader(
    "Acces-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Acces-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/models", routeRoutes); // => /api/places...
