import { connection } from "../DB/db.js";

const getByFilter = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await connection.query("SELECT * FROM usuario WHERE id_usuario = ?;", [id]);
    res.status(200).json(result);
  } catch (error) {
    res.status(490).json(error);
  }
};

const getValidateUser = async (req, res) => {
  try {
    const { email, contrase } = req.params;
    const [result] = await connection.query("SELECT * FROM usuario WHERE email = ? and contrase = ?;", [email, contrase]);
    res.status(200).json(result);
  } catch (error) {
    res.status(490).json(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const [result] = await connection.query("SELECT * FROM usuario;");
    res.status(200).json(result);
  } catch (error) {
    res.status(490).json(error);
  }
};

const postUser = async (req, res) => {
  const { nombre, apellido, email, contrase } = req.body;

  try {
    // Consulta para verificar si el correo electrónico ya existe en la base de datos
    const [existingUsers] = await connection.query(
      "SELECT COUNT(*) AS count FROM usuario WHERE email = ?", [email]
    );

    // Verificar si ya existe un usuario con el correo electrónico proporcionado
    if (existingUsers[0].count > 0) {
      return res.status(409).send("El usuario ya existe");
    }

    // Si el correo electrónico no está registrado, insertar el nuevo usuario
    await connection.query(
      "INSERT INTO usuario (nombre, apellido, email, contrase) VALUES (?, ?, ?, ?)", [nombre, apellido, email, contrase]
    );

    res.status(200).send("Usuario agregado con éxito");
  } catch (error) {
    res.status(500).send({message:error.message});
  }
};



const putUser = async (req, res) => {
  const { nombre, apellido, email, contrase } = req.body;
  const { id } = req.params;
  try {
    await connection.query("UPDATE usuario SET nombre = ?, apellido = ?, email = ?, contrase = ? WHERE id_usuario = ?", [nombre, apellido, email, contrase, id]);
    res.status(200).json("Usuario actualizado con exito");
  } catch (error) {
    res.status(490).json(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await connection.query("DELETE FROM usuario WHERE id_usuario = ?;", [id]);
    res.status(200).json("Usuario eliminado con exito");
  } catch (error) {
    res.status(490).json(error);
  }
};

export { getAllUsers, postUser, putUser, deleteUser, getByFilter, getValidateUser };