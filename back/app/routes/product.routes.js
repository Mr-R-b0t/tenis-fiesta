module.exports = app =>{
    const Product = require("../controllers/product.controller.js");
    const router = require("express").Router();
    router.post("/", Product.create);
    router.get("/", Product.findAll);
    router.get("/", Product.findOne);
    router.put("/:id", Product.update);
    router.delete("/:id", Product.delete);
    app.use('/api/product', router);
}