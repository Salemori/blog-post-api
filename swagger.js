const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog Post API",
      version: "1.0.0",
      description: "Blog Post API with Relationships",
    },
    servers: [
      {
        url: "https://blog-post-api-jwdk.onrender.com",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routers/*.js"], 
};


const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };