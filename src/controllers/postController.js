const Post = require("../models/postModel");
const User = require("../models/userModel");

exports.handleGetPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate(
      "author",
      "firstName lastName email"
    );
    return res.status(200).json({
      status: "success",
      message: "Posts retrieved successfully",
      data: {
        posts,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

exports.handleGetPostById = async (req, res) => {
  try {
    const id = req.params.id;

    const post = await Post.findById(id).populate(
      "author",
      "firstName lastName email"
    );
    console.log(post);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.json({
      status: "success",
      message: "Post retrieved successfully",
      data: post,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

exports.handleCreatePost = async (req, res) => {
  try {
    const { title, description, body, published } = req.body;
    const authorId = req.user.id;

    const authorExists = await User.findById(authorId);
    if (!authorExists) {
      return res.status(400).json({ message: "Author not found" });
    }

    const newPost = new Post({
      title,
      description,
      author: authorId,
      body,
      published,
    });

    await newPost.save();
    return res.status(201).json({
      status: "success",
      message: "User registered successfully",
      newPost,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

exports.handleUpdatePost = async (req, res) => {
  try {
    const authorId = req.user.id;
    const id = req.params.id;

    const { title, description, body, published } = req.body;

    const authorExists = await User.findById(authorId);
    if (!authorExists) {
      return res.status(400).json({ message: "Author not found" });
    }

    const updated = await Post.findByIdAndUpdate(
      id,
      { title, description, body, published },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updated) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(201).json({
      status: "success",
      message: "Post updated",
      data: updated,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

exports.handleDeletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Post.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
