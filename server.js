import express from 'express';
import Cors from 'cors';
import dbConnection from './database/connection.js';
import router from './routes/router.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(Cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
dotenv.config();

// MongoDB Connection
dbConnection();

// ROOT ROUTES
app.use('/', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listen on port: ${PORT}`));
