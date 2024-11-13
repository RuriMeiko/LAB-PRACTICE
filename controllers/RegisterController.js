const registerController = (req, res, next) => {
    res.render("views/layouts/default", { title: "Home Page", data: { path: "views/register", props: {} } });
};

export default registerController;