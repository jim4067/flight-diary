import express from 'express';

const diary_router = express.Router();

diary_router.get('/', (_req, res) => {
    res.send("fetching all diaries");
});

diary_router.post('/', (_req, res) => {
    res.send("saving a diary");
});

export default diary_router;