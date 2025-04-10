console.log("Hello World"); 
const express = require('express');
const app = express();
const port = 3080;

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
  let risposta = res.json({
    identificatore: parseInt(id),
    stato: true,
    parameters: {
      lang: lang,
      q: q,
      page: page
    }
  });

  if (id <= 30 && id >= 0) {
    res.json(risposta);
    //console.log("richiesta utente con id: " + id);
    //res.send(utente 1: ${id} <br> lingua: ${lang} <br> q: ${q} <br> page: ${page});
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

  const risp={
    identificatore: parseInt(id),
    id: parseInt(film),
    title: "LA PAURA",
    genere: ["horror", "drammatico"],
    release_date: "2023-11-22",
    runtime: "1m 41s",
    overview: "Un giorno nella vita di una donna tormentata dalla sua Paura",
    id_regista: 869879,
    tipo: "cortometraggio"
  }

    res.json(risp);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
