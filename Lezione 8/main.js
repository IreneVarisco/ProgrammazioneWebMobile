//console.log("Hello World"); 
const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("richiesta");
  res.send("Hello World!");
})

app.get("/user/:id", (req, res) => {
  //esempio url: http://localhost:3000/user/5?lang=en&q=ciao&page=200
  const id = req.params.id;
  let lang = req.query.lang;
  if (lang == undefined) {
    //in caso lang non sia specificata assegno io un valore
    //res.status(400).send("lingua non specificata")
    lang = "it"

  }
  const q = req.query.q;
  const page = req.query.page;
  console.log(req.query);

  if (id <= 30 && id >= 0) {
    console.log("richiesta utente con id: " + id);
    res.send(`utente 1: ${id} <br> lingua: ${lang} <br> q: ${q} <br> page: ${page}`);
  } else {
    res.status(404).send("utente non trovato")
  }
})

app.get("/user/:id/fav", (req, res) => {
  const id = req.params.id;

  res.send(`film preferito: ${id}`);
})

app.get("/user/:id/film/:film", (req, res) => {
  const id = req.params.id;
  const film = req.params.film;

  res.send(`film preferito: ${id} <br> film preferito: ${film}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})