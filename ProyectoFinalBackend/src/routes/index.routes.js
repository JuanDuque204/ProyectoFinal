import { Router } from "express";

import {deleteUser, getAllUsers, getByFilter, getValidateUser, postUser, putUser} from "../Controllers/query.users.js";

const router = Router();

router.get("/users", getAllUsers) //leer los datos
router.get("/users/:id", getByFilter)
router.get("/users/:email/:contrase", getValidateUser) //validar usuarios
router.post("/users", postUser) //crear datos
router.put("/users/:id", putUser) //actualizar datos
router.delete("/users/:id", deleteUser) //borrar datos

export default router;