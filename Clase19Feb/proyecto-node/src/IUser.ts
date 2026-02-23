// Me define como debe ser un objeto, es decir, que propiedades debe tener y de que tipo deben ser esas propiedades. Es como un molde para crear objetos.

// No tienen ninguna logica es solo una definicion de como debe ser un Object. No se pueden crear objetos a partir de una interfaz, pero si se pueden crear objetos que cumplan con la interfaz.

//Sirve para definir una estructura de datos, es decir, que propiedades debe tener un objeto y de que tipo deben ser esas propiedades. Es como un molde para crear objetos. y forzar a que los objetos cumplan con esa estructura de datos.

interface User {
  id: number;
  name: string;
  email: string;
}

const user1: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
};

console.log(user1);

const user2: User = {
  id: 2,
  name: "Jane Doe",
  email: "jane.doe@example.com",
};

console.log(user2);
