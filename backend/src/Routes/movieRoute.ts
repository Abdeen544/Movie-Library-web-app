import expres from "express";
import { getMovie, getAllMovies } from "../Services/movieService";

const router = expres.Router();

router.get('/getMovie', async (req, res) => {
    try{
        const {title} = req.body;
        const {data, statusCode} = await getMovie({title});
        res.status(statusCode).json(data);
    } catch (err) {
        res.status(500).send(`Server side issue: ${err}`);
    }
});

router.get('/getAllMovies', async (req, res) => {
    try{
        const data = await getAllMovies();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).send(`Server side issue: ${err}`);
    }
});

export default router;