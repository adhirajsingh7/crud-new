const model = require('../models')

// criteria -> id , projection -> aggregation ,options -> pagination ,object-> new data

const get_User = async function(criteria, projection, options){
    return model.User.find(criteria,projection,options);
}

const get_User_By_Id = async function(criteria, projection, options){
    return model.User.findById(criteria,projection,options)
}

const add_User = async function(Object){
    return new model.User(Object).save()
}

const update_User = async function(criteria, projection, options ,Object){
    return model.User.findByIdAndUpdate(criteria, {...Object})
}

const delete_User = async function(criteria, projection, options){
    return model.User.deleteOne(criteria,projection, options)
}

module.exports = {
    get_User,
    get_User_By_Id,
    add_User,
    update_User,
    delete_User
}