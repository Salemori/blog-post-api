const express = require("express");
const connectDb = require("./src/config/db.js");
const blogRouter = require("./src/routers/postRouter.js");
const userRouter = require("./src/routers/userRouter.js")
// const { swaggerUi, swaggerSpec } = require("./sawagger");

require("dotenv").config();

const app = express();
app.use(express.json());

connectDb();

app.use("/api/v1/post", blogRouter);
app.use("/api/v1/user", userRouter);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const port = process.env.PORT_ONE || process.env.PORT_TWO;

app.listen(port, () => {
    console.log(`Blog API istening at http://localhost:${port}`)
});

app.get("/", (req, res) => {
  return res.send("Blog Post API is active and running!...");
});