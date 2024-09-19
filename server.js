import express from 'express';
import dovenv from 'dotenv/config';
import getURL from './getURL';
import myDateTime from './date';
import viewEngine from './viewEngine';

const app = express();

viewEngine(app);

const port = process.env.PORT || 1610;


app.get('/', (req, res) => {
    res.render("home");
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/date', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write(myDateTime());
    res.end();
});

app.get('/geturl', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write(getURL.getPath(req) + "<br>");
    res.write(getURL.getParamsURL(req) + "<br>");
    res.end();
});

app.get('/ejs', (req, res) => {
    res.render("test");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});