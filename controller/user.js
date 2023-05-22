import User from "../model/user.js";


const getUser=async (req,res)=>{
    const dataResponse= await User.find();
    res.json(dataResponse);
}

const getUserWithId = async (req, res) => {
    console.log(req.params.id)
    // const product = products.find((p) => {
    //   return p.id === +req.params.id;
    // });
    // res.json(product);
    // console.log(req.params._id);
    const user= await User.findOne({"_id":req.params.id})
    res.json(user);
  };
  
  const createUser = async (req, res) => {
    const newUser=new User(req.body)
    newUser.save().then((data)=>{
      res.json(data);
    }).catch((err)=>{
      // const error=JSON.parse(err)
      res.json(err)
    })
    
  };
  
  const replaceUser = async(req, res) => {
    const { _id } = req.body;
    const userToAdd = req.body;
    
    const replacedValue=await User.replaceOne({"_id":_id},userToAdd)
    // console.log(replacedValue);
    res.json(replacedValue);
  };
  const modifyUser = async(req, res) => {
    const { _id } = req.body;
    const updateDetails = req.body;
   const modifyStatus= await User.updateOne({"_id":_id},updateDetails)
    res.json(modifyStatus);
  };
  const deleteUser =async(req, res) => {
    const { _id } = req.body;
    
    const returnedValue=await User.findByIdAndDelete({"_id":_id})
    res.json(returnedValue);



  };

  export {getUser,getUserWithId,createUser,replaceUser,modifyUser,deleteUser};