const loginController = (req, res, next) => {    
    res.render("views/layouts/default", { title: "Home Page", data: { path: "views/login", props: {} } });
};

export default loginController;