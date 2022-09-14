const express = require("express");
const router = express.Router();
const { properCase } = require("../services/helper");

router.get("/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${properCase(name)}`);
});

router.get("/", (req, res) => {
  res.send("Hello there, Some random Dood");
});

module.exports = router;
