const mongoose = require ("mongoose");

const CustomSchema = new mongoose.Schema(
     {
        base: {
          regular: {type: Number, required: true},
          thin: {type: Number, required: true},
          'cheese-burst': {type: Number, required: true},
          pie: {type: Number, required: true},
          'whole-wheat': {type: Number, required: true}
        },
        veggies: {
          mushroom: {type: Number, required: true},
          olive: {type: Number, required: true},
          onion: {type: Number, required: true},
          tomato: {type: Number, required: true},
          'bell-pepper': {type: Number, required: true},
          paneer: {type: Number, required: true},
          jalepino: {type: Number, required: true}
        },
        sauce: {
          marinara: {type: Number, required: true},
          'white-garlic': {type: Number, required: true},
          'creamy-pesto': {type: Number, required: true},
          schezwan: {type: Number, required: true},
          makhani: {type: Number, required: true}
        },
        cheese: {
          cheddar: {type: Number, required: true},
          parmesan: {type: Number, required: true},
          gouda: {type: Number, required: true},
          mozzarella: {type: Number, required: true},
          'cream-cheese': {type: Number, required: true}
        },
      }
      
      
);

module.exports = mongoose.model("Item", CustomSchema);