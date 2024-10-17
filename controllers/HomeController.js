const homeController = (req, res, next) => {
    console.log("home Controller");    

    res.render("views/layouts/default", { title: "Home Page", data: { path: "views/main", props: {} } });
};

export default homeController;