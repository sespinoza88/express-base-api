import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import { router } from './routes';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(router)

app.get('/ping', (req, res) => {
    console.log(req.body);
    console.log('someone pinged here!!!')  
    res.send('pong')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} ${new Date().toLocaleDateString()}` )
})