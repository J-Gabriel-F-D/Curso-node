const fs = require("fs");
const path = require("path");

// Create a new directory
// fs.mkdir(path.join(__dirname, "/teste"), (error) => {
//   if (error) {
//     return console.log("ERRO: ", error);
//   }

//   console.log("Pasta criada com sucesso!");
// });

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "test.txt"),
  "Hello World!",
  (error) => {
    if (error) {
      return console.log("ERRO: ", error);
    }
    console.log("Arquivo criado com sucesso!");

    // Adicionar à arquivo
    fs.appendFile(
      path.join(__dirname, "teste", "test.txt"),
      "Hello Node!",
      (error) => {
        if (error) {
          return console.log("ERRO: ", error);
        }
        console.log("Arquivo modificado com sucesso!");
      }
    );

    // Ler arquivo
    fs.readFile(
      path.join(__dirname, "/teste", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("ERRO: ", error);
        }
        console.log(data);
      }
    );
  }
);
