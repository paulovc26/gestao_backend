const express = require("express");
const cors = require("cors");
const { swaggerUi, swaggerDocs } = require("../swagger/swaggerConfig");
const app = require("./app");

require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"], // Garanta que os métodos necessários estão permitidos
  })
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
