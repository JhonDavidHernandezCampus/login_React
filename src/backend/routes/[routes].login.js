import express from "express";
import loginlimit from "../middleware/limit.js"; 
import { loginVersion } from "../support/[vesion].login.js";
import routesVersioning from "express-routes-versioning";


const routerlogin = express.Router();
const version = routesVersioning();

routerlogin.post('/login', loginlimit, version(loginVersion));




export default routerlogin;


