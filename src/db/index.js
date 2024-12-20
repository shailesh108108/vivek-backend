import mongoose from "mongoose";
import { DB_NAME } from "../constants.js/";

const connectDB = async () => {
    try{
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
        console.log(`Connected to data base ${connectionInstance.connection.host}`)    // this to get to know where i am connectiong my databvse production or developper 
    }
    catch(error){
        console.log("Error conecting to data base",error)
        process.exit(1)
    }
    
}

export default connectDB;