import {createPool} from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

export const connection = createPool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    database: process.env.NAME_DB,
    password: process.env.PASS_DB,
    port: process.env.PORT_DB
})

try {
    console.log("Conexión exitosa a la base de datos");
} catch (err) {
    console.log("Error al conectar a la base datos: ", err.message);
}