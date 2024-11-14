import express from 'express';
import userTableController from '../controllers/UserTableController.js';
import aboutController from '../controllers/AboutController.js';
import loginController from '../controllers/LoginController.js';
import registerController from '../controllers/RegisterController.js';
import homeController from '../controllers/HomeController.js';
import profileController from '../controllers/ProfileController.js';
import isAdmin from '../middleware/isAdmin.js';
const router = express.Router();

const RouterWeb = (app) => {

    router.get('/about', aboutController);

    router.get('/login', loginController);

    router.get('/register', registerController);

    router.get('/usertable', isAdmin, userTableController);

    router.get('/profile', profileController);

    router.get('/', homeController);

    return app.use("/", router);
}
export default RouterWeb;