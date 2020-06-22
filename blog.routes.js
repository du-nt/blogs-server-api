const controller = require("./blog.controller");
const express = require("express");
const router = express.Router();

router.get("/", controller.getLatest);

router.get("/blogs", controller.getAll);

router.post("/add", controller.addBlog);

module.exports = router;
