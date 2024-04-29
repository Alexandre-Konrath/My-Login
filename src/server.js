const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());

// Configurando o middleware para permitir solicitações CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(routes);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
