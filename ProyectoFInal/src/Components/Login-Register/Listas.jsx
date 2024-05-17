// export let usuarios = [];

// const usuario = {
//   nombres: "Yefry",
//   apellidos: "Delgado",
//   email: "yefry@gmail.com",
//   contrase: '1234'
// };
// usuarios.push(usuario);

// export const agregarUsers = (user) => {
//   usuarios.push(user);
//   console.log(usuarios);
// }

// export const ValidarUsers = (_user) => {
//   const {user, password} = _user;
//   if (usuarios.find(User => user == User.user) !== undefined) {
//     const userFound = usuarios.find(User => user == User.user && password == User.password);
//     if (userFound !== undefined) {
//       console.log("Iniciando Sesión...");
//       console.log(userFound);
//     } else {
//       console.log("Contraseña incorrecta");
//     }
//   } else {
//     console.log("Usuario no registrado")
//   }
// }