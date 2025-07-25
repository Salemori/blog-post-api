const express = require("express");
const {handleGetPosts, handleGetPostById, handleCreatePost, handleUpdatePost, handleDeletePost} = require("../controllers/postController.js")
const { authToken } = require("../middleware/authMiddleware");

const blogRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Post
 *   description: Blog post management
 */

/**
 * @swagger
 * /api/v1/post:
 *   get:
 *     summary: Get all blog posts
 *     tags: [Post]
 *     security: [] 
 *     responses:
 *       200:
 *         description: A list of blog posts
 *       500:
 *         description: Server error
 */
blogRouter.get("/", handleGetPosts);

/**
 * @swagger
 * /api/v1/post/{id}:
 *   get:
 *     summary: Get a post by ID
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the post to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post data retrieved
 *       404:
 *         description: Post not found
 *       500:
 *         description: Server error
 */
blogRouter.get("/:id", handleGetPostById);

/**
 * @swagger
 * /api/v1/post:
 *   post:
 *     summary: Create a new post
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - authorId
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               authorId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post created
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */
blogRouter.post("/", authToken, handleCreatePost);

/**
 * @swagger
 * /api/v1/post/{id}:
 *   put:
 *     summary: Update a post
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the post to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post updated
 *       404:
 *         description: Post not found
 *       401:
 *         description: Unauthorized
 */
blogRouter.put("/:id", authToken, handleUpdatePost);

/**
 * @swagger
 * /api/v1/post/{id}:
 *   delete:
 *     summary: Delete a post
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the post to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Post deleted
 *       404:
 *         description: Post not found
 *       401:
 *         description: Unauthorized
 */
blogRouter.delete("/:id", authToken, handleDeletePost);


module.exports = blogRouter;
