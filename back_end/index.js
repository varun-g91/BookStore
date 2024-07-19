import express from "express";
import { PORT, conString } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/bookesRoute.js";
import cors from 'cors';
const app = express();


//Middleware for parsing request body
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to my first MERN stack project!');

});

//Middleware for handling CORS POLICY

//Option 1: Allow all origins
app.use(cors());

//Option 2: Allow only custom origins
app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
)

app.use('/books', booksRoute);

mongoose
    .connect(conString)
    .then((result) => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
