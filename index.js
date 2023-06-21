require("dotenv").config();
const express = require("express");
const routes = require("./src/routes/routes");
const cors = require("cors");

const app = express();

//CORS - Connection
app.use(cors({ origin: "*", methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"] }));

require("./src/database/dbConnection");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
