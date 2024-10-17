import express, { Router } from 'express';
import dovenv from 'dotenv/config';
import RouterApp from './webRoute.js';
import viewEngine from './config/viewEngine';
import timeLog from './middleware/logging.js';
const app = express();
app.use(timeLog);

viewEngine(app);

const port = process.env.PORT || 1610;

RouterApp(app);


app.listen(port, () => {
    console.log(`Server is running on address http://localhost:${port}`);
});