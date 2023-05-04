const router = require("express").Router();
const Order = require("../models/Order");
const Item = require("../models/customItems");

//order add
const fname = (inventoryItems, customItems)=>{
    inventoryItems.base[customItems.base] -= 1 ;
    inventoryItems.cheese[customItems.cheese] -= 1;
    inventoryItems.sauce[customItems.sauce] -= 1;
    if(customItems.veggies) inventoryItems.veggies[customItems.veggies] -= 1;
   
    return inventoryItems;
}

router.post("/add", async (req, res)=>{
    const newOrder = new Order(req.body);
    try { 
        var orderItems = newOrder.orderItems;
        var inventoryItems = await Item.findOne();

        orderItems.map((hemlo)=>{
            console.log(hemlo.customItems);
            inventoryItems = fname(inventoryItems, hemlo.customItems);
        });
        // const savedOrder = await newOrder.save();
         res.status(201).json(inventoryItems);
    } catch (err) {
        console.log(err);
    };
    //payment to be added
});

//get all orders
router.get("/:id", async (req, res)=>{
    try {  
        const orders = await Order.find({user_id: req.params.id});
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);      
    }
});

//order update - status change
router.put("/status", async(req, res)=> {
    try {
        const { status, order_id } = req.body;
        Order.findByIdAndUpdate( order_id, {status: status});
        res.status(200).send("Status Updated"); 
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;