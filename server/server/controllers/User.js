const User = require('../models/User')

const getuserDetials = async(req,res)=>{
    const {id} = req.params;

    try
    {
      const findUser = await User.findById(id);
      res.json(findUser)
    }
    catch(error)
    {
     return res.status(401).send({error: ' There is no Match, Please try again !'})
    }
}


module.exports = { getuserDetials}
