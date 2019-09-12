const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const data = require("./data");

mongoose
  .connect("mongodb://localhost:27017/movies", { useNewUrlParser: true })
  .then(connection => {
    console.log("connection to port 27017");
    return Movie.deleteMany();
  })
  .then(() => {
    return Movie.insertMany(data);
  })
  .then(() => {
    return mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
