import messageRouter from './Message/Message.router.js';
import authRouter from './Auth/Auth.router.js';
import connectDB from '../../DB/Connection.js';


const initApp = (app,express)=>{
    connectDB();
    app.use(express.json());
    app.use('/messages',messageRouter);
    app.use('/auth',authRouter);
    app.use('*',(req,res)=>{
        return res.json({message:'Page not Found'});
    })

}

export default initApp;