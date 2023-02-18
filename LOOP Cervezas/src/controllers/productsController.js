const products = require("../data/products");

const controller = {
    // Root - Show all products
    index: (req, res) => {
        res.render("products/list", { products: products.findAll() });
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        const product = products.findAll().find((producto) => producto.id == req.params.id);
        res.render("products/detail", { product });
    },

    // Create - Form to create
    create: (req, res) => {
        res.render("products/create-form");
    },

    // Create -  Method to store
    store: (req, res) => {
        const product = {
            id: Date.now(),
            name: req.body.name,
            price: Number(req.body.price),
            description: req.body.description,
            image: req.file
              ? "/images/" + req.file.image
              : "/images/default-img.png",
          };
      
          products.saveProduct(product);
          res.redirect("/products/");
    },

    // Update - Form to edit
    edit: (req, res) => {
        let productToEdit = products.findById(req.params.id);
        res.render("products/edit-form", { productToEdit:productToEdit });
    },
    // Update - Method to update
    update: (req, res) => {
        const product = req.body;
        res.send(product);
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        /* serv.delete("productsDataBase.json", req.params.id);
        res.redirect("/products/"); */
    },
};

module.exports = controller;