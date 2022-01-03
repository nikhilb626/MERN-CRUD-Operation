const express=require("express");
const {getCostumers,addCostumer,deleteCostumer,getCostumerById,editCostumer}=require('../controlller/customer-controller');


const router=express.Router();



router.get('/',getCostumers);
router.post('/add',addCostumer);
router.delete('/:id',deleteCostumer);
router.get('/:id',getCostumerById);
router.put('/:id',editCostumer)


module.exports = router;