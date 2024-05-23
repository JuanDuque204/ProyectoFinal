import { Router } from "express";

import {deleteUser, getAllUsers, getByFilter, getValidateUser, postUser, putUser} from "../Controllers/query.users.js";
import { deleteProducts, getAllProducts, getProductByFilter, postProducts, putProducts } from "../Controllers/query.products.js";

const router = Router();

router.get("/users", getAllUsers) //leer los datos
router.get("/users/:id", getByFilter)
router.get("/users/:email/:contrase", getValidateUser) //validar usuarios
router.post("/users", postUser) //crear datos
router.put("/users/:id", putUser) //actualizar datos
router.delete("/users/:id", deleteUser) //borrar datos

//rutas para productos
router.get("/products/:id_producto",getProductByFilter)
router.get("/products",getAllProducts)//leer productos
router.post("/products", postProducts)//Insertar productos
router.put("/products/:id_producto", putProducts)
router.delete("/products/:id_producto", deleteProducts)


export default router;