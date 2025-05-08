const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');


const MongoURL = "mongodb+srv://XXXX:XXXX@cluster0.qwrxg2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
const port = 3001;
const client = new MongoClient(MongoURL);;
const swaggerDocument = require('./swagger.json');
const swaggerUi = require('swagger-ui-express');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(cors());
// vvv usare middleware per tutte le rotte 
app.use(checkAPIkey);
//app.use(`/user`, checkAPIkey);      usare il middleware per le rotte che iniziano con /user

function checkAPIkey(req, res, next){
    console.log("siamo nel middleware");
    if (req.params.api_key == "1234567890"){
        console.log("API KEY presente");
    }else{
        res.status(401).send("non sei autorizzato");
    }
    next();
}

//UPDATE
app.put("user/:id", async (req, res) => {
    const id = req.params.id;
    const cNome = req.body.nome;
    const cCognome = req.body.cognome;
    const cEmail = req.body.email;
    const cPassword = req.body.password;
    const cFilm = req.body.fav;

    if (cNome.length < 2) {
        res.status(401).send("Nome troppo corto");
    }
    if (cCognome.length < 2) {
        res.status(401).send("Cognome troppo corto");
    }

    if (cEmail == "valerio.bellandi@gmail.com") {
        res.status(409).send("Email già in uso");
    }

    const coll = client.db("PWM").collection("users");
    const user = await getUser(id);
    if (!user) {
        res.status(404).send("Utente non trovato");
        return;
    }
    const updateResult = await coll.updateOne(
        { _id: new ObjectId(id) },
        {
            $set: {
                nome: cNome,
                cognome: cCognome,
                email: cEmail,
                password: cPassword,
                film: cFilm
            }
        }
    );

    if (updateResult.modifiedCount > 0) {
        res.status(200).send("Utente aggiornato con successo");
    } else {
        res.status(500).send("Errore durante l'aggiornamento");
    }
})

//delete
app.delete('/user/:id', async (req, res) => {
    const id = req.params.id;
    await client.connect();
    const result = await client.db('PWM')
    .collection('users')
    .deleteOne({_id: ObjectID.createFromHexString(id)})
    
    res.json(result);

});

//LOGIN funziona
app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    await client.connect();
    const coll = client.db("PWM").collection("users");
    const filter = { email: email, password: password };
    console.log(filter);
    const cursor = coll.find(filter);
    const result = await cursor.toArray();
    console.log(result);

    if (result.length > 0) {
        res.json({ id: result[0]._id })
    } else {
        res.status(401).json({ error: "credenziali errate" })
    }
});

//REGISTRAZIONE funziona
app.post('/user', async (req, res) => {

    // req.body;
    // recupero i dati dal json
    const cNome = req.body.nome;
    const cCognome = req.body.cognome;
    const cEmail = req.body.email;
    const cPassword = req.body.password;
    const cGenre = req.body.genre;

    if (cNome.length < 2) {
        res.status(401).send("Nome troppo corto");
    }
    if (cCognome.length < 2) {
        res.status(401).send("Cognome troppo corto");
    }

    if (cEmail == "valerio.bellandi@gmail.com") {
        res.status(409).send("Email già in uso");
    }
    // creo utente

    try {
        const client = await MongoClient.connect(MongoURL);
        const coll = client.db("PWM").collection("users");
        const user = {
            nome: cNome,
            cognome: cCognome,
            email: cEmail,
            password: cPassword,
            genre: cGenre
        }
        console.log(user);

        const result = await coll.insertOne(user);

        //const result = await cursor.toArray();
        res.json(result);
        await client.close();

    } catch (error) {
        if (error.code === 11000) {
            res.status(409).send("Email già in uso");
        } else {
            res.status(500).send("Errore interno");
        }
    }
});

async function getUser(id) {
    await client.connect();
    const filter = { _id: ObjectId.createFromHexString(id) };
    const user = await client.db("PWM").collection("users").findOne(filter);
    return user;
}

app.get('/user/:id', async (req, res) => {
    const id = req.params.id;
    const result = await getUser(id);
    try {
        console.log(result);
        if (result) {
            res.json(result);
        } else {
            res.status(404).send("Utente non trovato");
        }
    } catch (error) {
        res.status(500).send("Errore interno");
    }
    res.send(`UTENTE ${id}`);
    await client.close();
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

