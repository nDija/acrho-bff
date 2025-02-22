import express, { Application } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import runnerRoutes from "./routes/runner.routes";

const app: Application = express();
const port = 3000

app.use(express.json());

// 1. Configuration de Swagger (génération du swagger.json)
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", // Spécifie la version OpenAPI
    info: {
      title: "Runner API", // Titre de votre documentation
      version: "1.0.0",   // Version de l'API
      description: "API pour gérer les runners", // Description de l'API
      contact: {
        name: "Support",
        email: "support@example.com"
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api", // URL racine de votre API
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], // Où trouver les annotations Swagger
};

// 2. Génère les spécifications Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// 3. Crée une route pour afficher la documentation Swagger (UI Swagger)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes de l'application
app.use("/api/runners", runnerRoutes);


app.get('/', (req, res) => {
  res.send("Hello From Express and Typescript")
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  console.log(`Swagger Docs available at http://localhost:${port}/api-docs`)
})