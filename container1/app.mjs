import express from 'express';
import connectToDatabase from './helpers.mjs'

const app = express();

app.get('/', (req,res)=> {
    res.send('<h2>Hi there</h2>');
});

console.log("Set");
await connectToDatabase();

app.listen(3000);