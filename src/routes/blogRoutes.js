const express = require("express");
const BlogModel = require("../models/blogModel.js");
const blogController = require("../controllers/blogController.js")

const blogRouter = express.Router();

// blogRouter.get("/", (req, res) => {
//   res.send("Welcome to SAIL blog home page.");
// }); // Used directly wihout separation of concern.

blogRouter.get("/", blogController.fetchAllBlogs);


blogRouter.post("/", (req, res) => {
  let blog = new BlogModel({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    body: req.body.body,
  });

  blog
    .save()
    .then((data) => res.status(201).send("Blog created successfully"))
    .catch((err) => res.send(`Error: ${err}`));
});

module.exports = blogRouter;
