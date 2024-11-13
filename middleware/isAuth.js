import { verifyToken } from '../utils/jwt.js';
import dotenv from 'dotenv';
dotenv.config();

const isAuth = (req, res, next) => {
    const bypassRoutes = ['/login', '/register', '/forgot-password', '/reset-password', '/src', '/api/login', '/api/register', '/api/forgot-password', '/api/reset-password'];

    const token = req.cookies ? req.cookies.auth : null;
    const user = req.session?.user
    if (bypassRoutes.some(route => req.url.startsWith(route))) {
        if (user && token && req.url.startsWith('/login')) {
            return res.redirect('/');
        }
        return next();
    }


    if (!user && !bypassRoutes.some(route => req.url.startsWith(route))) {
        return res.redirect('/login');
    }
    if (!user && bypassRoutes.some(route => req.url.startsWith(route))) {
        return next();
    }



    const decoded = verifyToken(token, process.env.JWT_SECRET);
    if (!decoded) return res.redirect('/login');

    if (decoded.username === user.username) {


        next();
    }



};

module.exports = isAuth;