import  Express, { Router }  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import RoutesLogin from "./backend/routes/[routes].login.js";


dotenv.config();
const appExpress = Express();

appExpress.use(Express.text());
appExpress.use(Express.json());
appExpress.use(cors());

appExpress.use(RoutesLogin);

let serve = JSON.parse(process.env.SERVE);
const config = {
    localhost:serve.hostname,
    port:serve.port
}

appExpress.listen(config,()=>{
    console.log(`http://${serve.localhost}:${serve.port}`);
});
