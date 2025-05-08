const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');


const MongoURL = "mongodb+srv://XXXXX:XXXXX@cluster0.qwrxg2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
const port = 3001;
const client = new MongoClient(MongoURL);;
//const swaggerDocument = require('./swagger.json');
//const swaggerUi = require('swagger-ui-express');

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(cors());

const allowedGenres = [
    "Action", "Adventure", "Animation", "Biography", "Comedy", 
    "Crime", "Documentary", "Drama", "Family", "Fantasy", 
    "History", "Horror", "Music", "Musical", "Mystery", 
    "Romance", "Sci-Fi", "Sport", "Thriller", "War"
];

//get movie by id
app.get(`/movies/:id`, async (req, res) => {
    const id = req.params.id;
    result = await getMovie(id);
    try {
        console.log(result);
        if (result) {
            res.json(result);
        } else {
            res.status(404).send("film non trovato");
        }
    } catch (error) {
        res.status(500).send("Errore interno");
    }
    res.send(`film ${id}`);
    await client.close();    
})

//get all movies
app.get('/movies', async (req, res) => {
    await client.connect();
    const coll = await client.db("sample_mflix").collection("movies").find({}); // find all
    const result = await coll.toArray();
    await client.close();
    res.send(result);
})

//get della ricerca

//add movie
app.post('/movies', async (req, res) => {
    const title = req.body.title;
    const year = req.body.year;
    const runtime = req.body.runtime;
    const actors = req.body.actors;
    const director = req.body.director;
    const plot = req.body.plot;
    const genres = req.body.genres;

    if (!validateGenres(genres)) {
        res.status(400).send("Generi non validi");
        return;
    }
    if (!title || !year || !runtime || !actors || !director || !plot) {
        res.status(400).send("Dati film non validi");
        return;
    }

    try{
        await client.connect();
        const coll = client.db("sample_mflix").collection("movies");
        const movie = {
            title: title,
            year: year,
            runtime: runtime,
            actors: actors,
            director: director,
            plot: plot
        }
        console.log(movie);
        const result = await coll.insertOne(movie);
        res.json({ insertedId: result.insertedId });
        await client.close();
    }catch (error) {
        res.status(500).send("Errore interno");
    }
});

//delete movie
app.delete('/movies/:id', async (req, res) => {
    const id = req.params.id;
    await client.connect();
    const result = await client.db("sample_mflix").collection("movies").deleteOne({ _id: ObjectId.createFromHexString(id) });
    res.json(result);
    await client.close();
});

//update movie
app.put('/movies/:id', async (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const year = req.body.year;
    const runtime = req.body.runtime;
    const actors = req.body.actors;
    const director = req.body.director;
    const plot = req.body.plot;
    const genres = req.body.genres;

    if (!validateGenres(genres)) {
        res.status(400).send("Generi non validi");
        return;
    }
    if (!title || !year || !runtime || !actors || !director || !plot) {
        res.status(400).send("Dati film non validi");
        return;
    }

    await client.connect();
    const coll = client.db("sample_mflix").collection("movies");
    const movie = getMovie(id);
    if (!movie) {
        res.status(404).send("film non trovato");
        return;
    }
    const updatedResult = await coll.updateOne(
        { _id: ObjectId.createFromHexString(id) },
        {
            $set: {
                title: title,
                year: year,
                runtime: runtime,
                actors: actors,
                director: director,
                plot: plot
            }
        }
    );
    if (updatedResult.modifiedCount > 0) {
        res.status(200).send("film aggiornato con successo");
    } else {
        res.status(500).send("Errore durante l'aggiornamento");
    }
    await client.close();
});

async function getMovie(id) {
    await client.connect();
    const filter = { _id: ObjectId.createFromHexString(id) };
    const movie = await client.db("sample_mflix").collection("movies").findOne(filter);
    return movie;
}

async function getMovies(genre) {
    await client.connect();
    const filter = { genres: genre };
    const movies = await client.db("sample_mflix").collection("movies").find(filter).toArray();
    return movies;
}


function validateGenres(genres) {
    if (!Array.isArray(genres)) {
        return false;
    }
    return genres.every(genre => allowedGenres.includes(genre));
}


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
