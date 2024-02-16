const Event = require ("../models/Event")
//const slugify = require("slugify");



const getEventDetials = async(req,res)=>{
    const {id} = req.params;

    try
    {
      const findEvent = await Event.findById(id);
      res.json(findEvent)
    }
    catch(error)
    {
     return res.status(401).send({error: ' There is no Match, Please try again !'})
    }
}


module.exports={
    getEventDetials,
}