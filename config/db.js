const mongoose= require('mongoose');
const dotenv = require("dotenv");
const colors = require('colors');
//environment variables
dotenv.config({path: './config/config.env'});
const connectDB= async () =>{
    const conn= await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,

    });
    console.log('MongoDB Connected: '+conn.connection.host.yellow);
}
module.exports= connectDB;
