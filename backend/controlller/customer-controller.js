const { response } = require("express");
const Costumer = require("../model/customer.js");


// save data of the customer in database
const addCostumer=async(req,res)=>{
    
    // retrieve info from frontend
    const data=req.body;
    console.log("inside");

    const newCostumer=new Costumer(data);
    try{
        await newCostumer.save();
        res.status(201).json(newCostumer);
    }catch(error){
        res.status(409).json({message:error.message});
    }
}



// get all the users
const getCostumers=async(req,res)=>{
    try{
        const costumers=await Costumer.find();
        res.status(200).json(costumers);
    }catch(error){
        res.status(404).json({message:error.message});
    }
}

const deleteCostumer=async(req,res)=>{
    try{
        await Costumer.deleteOne({_id:req.params.id});
        res.status(201).json("user deleted successfully");
    }catch(error){
        res.status(409).json({message:error.message});
    }
}


// get a user by id
const getCostumerById=async(req,res)=>{
    try{
        const costumer=await Costumer.findById(req.params.id);
        res.status(200).json(costumer);
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

const editCostumer=async(req,res)=>{
    let costumer=await Costumer.findById(req.params.id);
    costumer=req.body;
   const editCostumer=new Costumer(costumer);
   try{
       await Costumer.updateOne({_id:req.params.id},editCostumer);
       res.status(201).json(editCostumer);
   }catch(error){
    res.status(409).json({
           message:error.message
       });
       
   }
}



module.exports={addCostumer,getCostumers,deleteCostumer,getCostumerById,editCostumer}


