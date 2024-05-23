import { connection } from "../DB/db.js"

const getAllProducts = async (req, res) => {
    try {
      const [result] = await connection.query("SELECT * FROM producto;");
      res.status(200).json(result);
    } catch (error) {
      res.status(490).json(error);
    }
  };

  const postProducts = async (req, res) => {
    const { nombre, descripcion, precio, cantidad_existente } = req.body;
  
    try {
    //   // Consulta para verificar si el producto ya existe en la base de datos
    //   const [existingProducts] = await connection.query(
    //     "SELECT COUNT(*) AS count FROM producto WHERE id_producto = ?", [id_producto]
    //   );
  
    //   // Verificar si ya existe un producto con el id proporcionado
    //   if (existingProducts[0].count > 0) {
    //     return res.status(409).send("El producto ya existe");
    //   }
  
      // Si el correo electrónico no está registrado, insertar el nuevo producto
      await connection.query(
        "INSERT INTO producto ( nombre, descripcion, precio,cantidad_existente) VALUES (?, ?, ?, ?)", [nombre, descripcion,precio, cantidad_existente]
      );
  
      res.status(200).send("producto agregado con éxito");
    } catch (error) {
      res.status(500).send({message:error.message});
    }
  };

  
const putProducts = async (req, res) => {
    const { nombre, descripcion, precio, cantidad_existente } = req.body;
    const { id_producto } = req.params;
    try {
      await connection.query("UPDATE producto SET nombre = ?, descripcion = ?, precio = ?, cantidad_existente = ? WHERE id_producto = ?", [nombre, descripcion, precio, cantidad_existente, id_producto]);
      res.status(200).json("Producto actualizado con exito");
    } catch (error) {
      res.status(490).json(error);
    }
  };

  const deleteProducts = async (req, res) => {
    const { id_producto } = req.params;
    try {
      await connection.query("DELETE FROM producto WHERE id_producto = ?;", [id_producto]);
      res.status(200).json("Producto eliminado con exito");
    } catch (error) {
      res.status(490).json(error);
    }
  };
  const getProductByFilter = async (req, res) => {
    const {id_producto}= req.params
    try {
      const { id_producto } = req.params;
      const [result] = await connection.query("SELECT * FROM producto WHERE id_producto = ?;", [id_producto]);
      res.status(200).json(result);
    } catch (error) {
      res.status(490).json(error);
    }
  };

  

  export {getAllProducts, postProducts, putProducts, deleteProducts, getProductByFilter}