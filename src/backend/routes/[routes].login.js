import express from "express";
import rateLimit from "express-rate-limit";
import routesVersioning from "express-routes-versioning";


const routerlogin = express.Router();
const version = routesVersioning();

routerlogin.get('/login', rateLimit, version());




export default routerlogin;


