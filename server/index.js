
import express from 'express'
import Connection from './Database/config.js';
import Router from './Routes/routes.js';
import Cors from 'cors'
import bodyParser from 'body-parser';


const app = express();
app.use(Cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use("/" , Router);

const Port = 8000
app.listen(Port , ()=>{
    console.log(`Server is running on ${Port}`);
})
Connection();