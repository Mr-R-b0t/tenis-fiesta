module.exports = app =>{
    const checkout = require("../controllers/checkout.controller.js");
    const router = require("express").Router();
    router.post("/", checkout.create);
    router.get("/", checkout.findAll);
    router.get("/", checkout.findOne);
    router.put("/:id", checkout.update);
    router.delete("/:id", checkout.delete);
    app.use('/api/checkout', router);
}