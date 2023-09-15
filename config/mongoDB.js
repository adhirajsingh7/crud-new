const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('MongoDB connected !!!');
}).catch((err)=>{
    console.log('Error',err);
})

module.exports = mongoose;