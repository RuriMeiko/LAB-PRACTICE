import express from 'express';
import RouterApp from './webRoute.js';
import viewEngine from './config/viewEngine';
import timeLog from './middleware/logging.js';
import path from 'path';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

app.use(timeLog);
app.use(express.static(path.join(__dirname, 'src')))

viewEngine(app);
RouterApp(app);



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on address http://localhost:${port}`);
});