const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API's pessoais",
      version: "1.0.0",
      description: "API Criadas para projeto pessoal PV",
      contact: {
        name: "API Backend Gestão",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
  },
  apis: ["src/routes/*.js"], // Caminho para os seus arquivos de rota onde estão os comentários do Swagger
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = {
  swaggerUi,
  swaggerDocs,
};
