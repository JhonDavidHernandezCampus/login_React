import  Express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const appExpress = Express();

appExpress.use(Express.text());
appExpress.use(Express.json());
appExpress.use(cors());

appExpress.post('/',(req,res)=>{
    res.send({message:"estamos en el servidor"});
});


let serve = JSON.parse(process.env.SERVE);
const config = {
    localhost:serve.hostname,
    port:serve.port
}

appExpress.listen(config,()=>{
    console.log(`http://${serve.localhost}:${serve.port}`);
});
