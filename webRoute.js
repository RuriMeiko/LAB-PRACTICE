import express from 'express';
import homeController from './controllers/HomeController.js';
import aboutController from './controllers/AboutController.js';
import contactController from './controllers/ContactController.js';
const router = express.Router();

const RouterApp = (app) => {

    router.get('/about', aboutController);

    router.get('/contact', contactController);

    router.use('/', homeController);

    return app.use("/", router);
}
export default RouterApp;