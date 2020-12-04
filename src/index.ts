import express from 'express';

import diary_router from './routes/diaries';

const app = express();

app.use(express.json());

const PORT = 3040;

app.get('/ping', (_req, res) => {
    res.send("someone pinged here");
});

app.use('/api/diaries', diary_router);

app.listen(PORT, () => {
    console.log(`succesfully running the server on port ${PORT}`);
});