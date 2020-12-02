import express from 'express';

const app = express();

app.use(express.json());

const PORT = 3040;

app.get('/ping', (_req, res) => {
    res.send("someone pinged here");
});

app.listen(PORT, () => {
    console.log(`succesfully running the server on port ${PORT}`);
});