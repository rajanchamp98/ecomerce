import mongoose,{Schema} from "mongoose";

const userSchema=new Schema(
    {
        "firstName":{type:String ,require:true},
        "lastName":String,
        "email":{
            type:String,
            unique:true,
            validate:{
                validator:function(v){
                    return /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(v)
                },
                "message":(props)=> `${props.value} is not a valid email`
            },
            require:[true,"email is required Field"]
        },
        "password":{
            type:String,
            minLength:6,
            required:true
        },
        token:String


       
    }
)

 const User=mongoose.model('User',userSchema);
 export default User

