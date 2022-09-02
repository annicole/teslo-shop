import {Schema,model,Model} from 'mongoose';
import mongoose from 'mongoose';
import { IUser } from '../interfaces';

const UserSchema = new Schema({
    name: {type:String,require:true},
    email: {type:String,require:true,unique:true},
    password: {type:String,require:true},
    role:{
        type:String,
        enum:{
            values:['admin','client'],
            message:'{VALUE} no es un role válido',
            default:'client',
            required:true
        }
    }

},{
    timestamps:true,
})

const User:Model<IUser> = mongoose.models.User || model('User',UserSchema);

export default User;