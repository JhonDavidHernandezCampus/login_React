import { rateLimit } from "express-rate-limit";

const loginlimit = rateLimit({
    windowMs:100 * 100,
    max:5,
    legacyHeaders:true,
    standardHeaders:true, 
    message:(req,res)=>{
        res.status(429).send({status:429,message:"limite de peticiones alcanzado"});
    }
});

export default loginlimit;