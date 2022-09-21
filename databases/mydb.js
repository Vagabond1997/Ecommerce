import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/ecommerce')
.then(()=>{console.log("connected to mongodb")})
.catch((err)=>{console.log(err)});

const UserSchema = new  mongoose.Schema(
    {
        fullName: {type:String, required:true, trim:true},
        email: {type:String, required:true, trim:true},
        password: {type:String, required:true, trim:true},
       
    }
)

const UserModel = mongoose.model('users',UserSchema);


export default UserModel;