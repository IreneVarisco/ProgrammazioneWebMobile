//console.log("Hello World"); 
const e = require('express');
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
    //res.send(`utente 1: ${id} <br> lingua: ${lang} <br> q: ${q} <br> page: ${page}`);
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


app.use(express.json());
app.post("/user", (req, res) => {
  // Recupero dati dal JSON
  const userData = req.body;

  // Verifico i dati
  if (userData && userData.username && userData.fav) {
    if (userData.username.length < 3 || userData.username.length > 20) {
      return res.status(400).send("Username deve essere tra 3 e 20 caratteri");
    }
    if (userData.fav.length < 2 || userData.fav.length > 20) {
      return res.status(400).send("Fav deve essere tra 1 e 20 caratteri");
    }
    // Creo utente
    /*const newUser = {
      id: Date.now(),
      name: userData.name,
      surname: userData.surname,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      fav: userData.fav
    };*/
    console.log("Nuovo utente creato:", newUser);
    res.send("Utente creato");
  } else {
    res.status(400).send("Utente non creato");
  }
  app.put(`/user/:id`, (req, res) => {
    const id = req.params.id;
    res.send(`utente modificato: ${id}`);
  })
  app.post("/login", (req, res) => {
    const user = req.body.user;
    const password = req.body.password;
    if (user != "Valerio" || password != "password123") {
      return res.status(400).send("Username o password non specificati");
    }
    res.send("ok");
  })
});