import express from 'express'
import { AddUser , getUsers} from '../Controllers/user-controllers.js';
import { newConversation , getConversation} from '../Controllers/conversation-controller.js';
import { getMessage, newMessage } from '../Controllers/message-controllers.js';
import { uploadFileHere } from '../Controllers/image-controllers.js';
import UploadFile from '../middleware/upload.js'

const Router = express.Router();


Router.post("/add" , AddUser);
Router.get("/users" , getUsers);

Router.post("/conversation/add" , newConversation)
Router.post("/conversation/get" , getConversation)

Router.post("/message/add" , newMessage)
Router.get("/message/get/:id" , getMessage)

Router.post("/file/upload", UploadFile , uploadFileHere)



export default Router;