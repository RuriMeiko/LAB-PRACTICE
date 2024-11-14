import { loginUserModel } from "../../models/auth.model";
import { createJWT } from "../../utils/jwt";

const loginUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ message: "missing info" });

        const users = await loginUserModel(username, password);
        if (users === null) return res.status(500).json({ message: "Error to get" });
        users.access_token = createJWT({ username: users.username });
        users.refresh_token = createJWT({ username: users.username }, true);
        req.session.user = users;
        res.cookie('auth', users.access_token, { httpOnly: true, secure: false });
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
}

const registerUser = async (req, res, next) => {
    try {
        const users = await getUsersModel();
        if (users === null) return res.status(500).json({ message: "Error to get" });
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
}

const logoutUser = async (req, res) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Failed to logout" });
            }            
            res.clearCookie('auth');
            return res.redirect('/login');
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "An error occurred during logout", ...error });
    }
}

export { loginUser, registerUser, logoutUser };