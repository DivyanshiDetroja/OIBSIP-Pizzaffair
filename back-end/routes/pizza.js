const Pizza = require("../models/Pizza");

const router = require("express").Router();

//displays all pizzas in an array
router.get("/", async (req, res)=>{

    try {
         const pizzas = await Pizza.find();
        res.status(200).json(pizzas);
    } catch (err) {
        res.status(500).json(err);
    }

});

//sending particular pizza id
router.get("/:id", async (req, res)=>{

    try {
         const pizzas = await Pizza.findById(req.params.id);
        res.status(200).json(pizzas);
    } catch (err) {
        res.status(500).json(err);
    }

});


module.exports = router;