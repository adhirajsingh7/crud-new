const service = require('../services')



const get_User = async(req, res)=> {
    try {
        const user = await service.userServices.get_User({},{},{})
    if(user){
        res.status(200).json(user)
    }
    else{
        res.status(400).json({message : 'No users found'})
    }
    }catch (error){
        res.json({message: error})
    }
}

const get_User_By_Id = async(req,res)=> {
    try {
        const user = await service.userServices.get_User_By_Id(req.params.id,{},{})
        if(user){
            res.status(200).json(user)
        }
        else{
            res.status(400).json({message: 'No users found'})
        }

    } catch(error){
        res.json({message : error})
    }
}

const add_User = async(req,res)=> {
    try{   
        const user = await service.userServices.add_User(req.body)
        if(user){
            res.status(200).json({message: 'User created successfully'})
        }
        else {
            res.status(400).json({message : 'Error'})
        }
    }catch(error){
        res.json({message: error})
    }
}

const update_User = async(req,res)=>{
    try{
        const user = await service.userServices.update_User(req.params.id,{},{},req.body)
        if(user){
            res.status(200).json({message: 'User updated successfully'})
        } else {
            res.status(400).json({message : 'Error'})
        }
    }catch(error){
        res.json({message: error})
    }
}

const delete_User = async(req,res)=>{
    try{
        const user = await service.userServices.delete_User(req.params.id,{},{})
        if(user){
            res.status(200).json({message : 'User deleted successfully'})
        } else {
            res.status(400).json({message : 'Error'})
        }
    }catch (error){
        res.json({message: error})
    }
}

module.exports = {
    get_User ,
    get_User_By_Id,
    add_User,
    update_User,
    delete_User,
}