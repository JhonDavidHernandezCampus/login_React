import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();
const conxi = async (req, res) => {
    try {
        let db = JSON.parse(process.env.DB);
        let url = `mongodb+srv://${db.user}:${db.password}@dbexpress.a92izng.mongodb.net/${db.db_name}`;
        let options = {
        }
        let client = await MongoClient.connect(url, options);
        console.log("Conection SuccessFull");
        return client.db();
    } catch (error) {
        console.log("Error de conexion", error);
    }
}
export default conxi;