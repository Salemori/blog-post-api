const express = require("express");
const {handleGetPosts, handleGetPostById, handleCreatePost, handleUpdatePost, handleDeletePost} = require("../controllers/postController.js")
const { authToken } = require("../middleware/authMiddleware");

const blogRouter = express.Router();

blogRouter.get("/", handleGetPosts);
blogRouter.get("/:id", handleGetPostById);
blogRouter.post("/", authToken, handleCreatePost);
blogRouter.put("/:id", authToken, handleUpdatePost);
blogRouter.delete("/:id", authToken, handleDeletePost);;



module.exports = blogRouter;
