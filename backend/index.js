import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./Config/db.js"

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

await connectDB();
app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`);
})

app.get('/',(req,res) => {
    res.send('API working')
})
