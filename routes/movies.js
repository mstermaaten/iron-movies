const express = require("express");
const router = express.Router();

const movie = require("../models/Movie");

router.get("/", (res, req, next) => {
  movie
    .find()
    .then(movies => {
      res.render("movies", { movies: movies });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
