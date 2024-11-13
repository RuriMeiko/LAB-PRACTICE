import express from 'express';
import homeController from '../controllers/HomeController.js';
import aboutController from '../controllers/AboutController.js';
import loginController from '../controllers/LoginController.js'; 
import registerController from '../controllers/RegisterController.js';
const router = express.Router();

const RouterWeb = (app) => {

    router.get('/about', aboutController);

    router.get('/login', loginController);

    router.get('/register', registerController);

    router.get('/', homeController);

    return app.use("/", router);
}
export default RouterWeb;