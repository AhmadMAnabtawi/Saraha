import  express  from 'express'
import * as messageController from './Controller/Message.Controller.js';
const app =express();

app.get('/',messageController.getMessages);

export default app;