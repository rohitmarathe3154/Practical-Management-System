import mongoose from "mongoose";


const dbConnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDb connected Successfully!")
    }
    catch(error){
        console.log("Connction Failed! ",error)
    }
}

export default dbConnect;