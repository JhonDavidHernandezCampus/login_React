import conxi from "../db/db.js";

const db = await conxi();
const controller = db.collection('user')

const login = async (req,res)=>{
    try {
        let datos = JSON.parse(req.body);
        let result = await controller.find(
            {$and:[
                {username:datos.usuario},
                {password:datos.password}
            ]
        }).toArray();
        (result.length < 1)? 
        res.send({status:200,sesion:false,message:"Usuario inixistente"}):
        res.send({status:200,sesion:true,message:"Usuario existente"});
    } catch (error) {
        res.status(500).send({status:500, message:"Error al obtener los datos",error:error});
    }
}


export default login;