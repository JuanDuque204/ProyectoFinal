export let usuarios = [];

const usuario = {
  nombres: "Yefry",
  apellidos: "Delgado",
  user: "yefry@gmail.com",
  password: '1234'
};
usuarios.push(usuario);

export const agregarUsers = (user) => {
  usuarios.push(user);
  console.log(usuarios);
}

export const ValidarUsers = (user) => {
  const users = user.user;
  const password = user.password;
  if (usuarios.find(User => users == User.user) !== undefined) {
    const userFound = usuarios.find(User => users == User.user && password == User.password);
    if (userFound !== undefined) {
      console.log("Iniciando Sesión...");
      console.log(userFound);
    } else {
      console.log("Contraseña incorrecta");
    }
  } else {
    console.log("Usuario no registrado")
  }
}