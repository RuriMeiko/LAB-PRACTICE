import getUsers from "../models/user.model";
const homeController = async (req, res, next) => {
    const users = await getUsers();

    res.render("views/layouts/default", { title: "Home Page", data: { path: "views/main", props: { users: users } } });
};

export default homeController;