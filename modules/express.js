const express = require("express");
const port = 5000;
const app = express();

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Home page com express</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      nome: "jhon doe",
      email: "jhon@doe.com",
    },
    {
      nome: "jane doe",
      email: "jane@doe.com",
    },
  ];
  res.status(200).json(users);
});
app.listen(port, () => console.log(`Rodando com express na porta ${port}`));
