const mongoose=require("mongoose");
const autoIncrement=require("mongoose-auto-increment");


// how our document look like
const costumerSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:String
});


autoIncrement.initialize(mongoose.connection);
costumerSchema.plugin(autoIncrement.plugin,'Costumer');

// we need to turn it into model
const Costumer=mongoose.model('costumer',costumerSchema);

module.exports = Costumer;