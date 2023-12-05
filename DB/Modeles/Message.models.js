import mongoose, { Schema ,model,Types } from 'mongoose'; 
import { Types } from 'mysql2';

const MessageShema = new Schema ({
    message:{
        type:String,
        required:true,
    },
    receiverID:{
        type:Types.ObjectId,
        ref:'User' ,
        required:true,
    }
},{
 timeseries:true
});

const MessageModel = mongoose.model.message || model('Message',MessageShema);

export default MessageModel;