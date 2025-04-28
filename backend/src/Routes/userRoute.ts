import express, { response } from 'express';
import { login, register } from '../Services/userService';

const router = express.Router();

router.post('/register', async (req, res)=>{
    try{
        const {name, email, password} = req.body;
        const {data, statusCode} = await register({name, email, password});
        res.status(statusCode).json(data);
    } catch (err) {
        res.status(500).send(`Server side issue: ${err}`);
    }
});

router.post('/login', async (req, res)=>{
    try{
        const {email, password} = req.body;
        const {data, statusCode} = await login({email, password});
        res.status(statusCode).json(data);
    } catch (err) {
        res.status(500).send(`Server side issue: ${err}`);
    }
});

export default router;