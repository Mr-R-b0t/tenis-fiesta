module.exports = app =>
    {
        const wishlist = require("../controllers/wishlist.controller.js");
        const router = require("express").Router();
        router.post("/", wishlist.create);
        router.get("/", wishlist.findAll);
        router.get("/:id", wishlist.findOne);
        router.delete("/:id", wishlist.delete);
        router.put("/:id", wishlist.update);
        app.use('/api/wishlist', router);
    }  
