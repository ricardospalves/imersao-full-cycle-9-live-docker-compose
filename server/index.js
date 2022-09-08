const express = require("express");
const mysql = require("mysql");
const PORT = 3000;

// Este é o nome do service que está no arquivo docker-compose.yaml
const DATABASE_HOST = "database";

const app = express();

const connection = mysql.createConnection({
  host: DATABASE_HOST,
  user: "root",
  password: "root",
  database: "mydatabase",
});

app.get("/", (request, response) => {
  response.end("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Started server on http://localhost:${PORT}`);
});
