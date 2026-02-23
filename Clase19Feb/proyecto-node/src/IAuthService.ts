interface AuthService {
  login(email: string, password: string): boolean;
  logout(): void;
}

class SimpleAuthService implements AuthService {
  login(email: string, password: string): boolean {
    return true;
  }
  logout(): void {
    console.log("Logout successful");
  }
}

//Clasess abstractas es una clase incompleta, es decir, no se puede instanciar, pero si se puede heredar de ella. Es como un molde para crear clases. No tienen ninguna logica es solo una definicion de como debe ser una clase. No se pueden crear objetos a partir de una clase abstracta, pero si se pueden crear objetos a partir de clases que heredan de la clase abstracta.

abstract class UsuarioBase {
  obtenerRol(): string {
    return "Usuario";
  }
}

class Admin extends UsuarioBase {
  obtenerRol(): string {
    return "Admin";
  }
}

class Invitado extends UsuarioBase {
  obtenerRol(): string {
    return "Invitado";
  }
}

const usuarios: UsuarioBase[] = [new Admin(), new Invitado()];

usuarios.forEach((usuario) => {
  console.log(usuario.obtenerRol());
});
