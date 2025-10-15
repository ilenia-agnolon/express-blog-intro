// importo il framework Express
const express = require("express");

// creo un'istanza di Express
const app = express();

// imposto una porta di riferimento
const port = 3000;

// uso il middleware static per servire i file statici
app.use(express.static("public"));

// imposto la rotta di index
app.get("/", (req, res) => {
  res.send("<h1>Server del mio blog </h1>");
});

// metto in ascolto il server sulla porta definita
app.listen(port, () => {
  console.log(`✅ Server avviato sulla porta ${port}`);
});
