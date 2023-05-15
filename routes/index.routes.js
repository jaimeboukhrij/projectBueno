
const lat = require("../public/js/map");
const express = require('express');
const router = express.Router();
router.use(express.json());

console.log("prueba", lat)


router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/", (req, res, next) => {
  const data = lat;
  console.log("lo que llega--->", data)
  res.send(data);
});












module.exports = router;