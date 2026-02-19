class Persona {
  nombre: string;
  email: string;
  constructor(nombre: string, email: string) {
    this.nombre = nombre;
    this.email = email;
  }
  saludar(): void {
    console.log(
      `Hola, mi nombre es ${this.nombre} y mi correo es ${this.email}`,
    );
  }
}

let oUser1 = new Persona("Juan", "juan@ejemplo.com");
oUser1.saludar();

class Empleado extends Persona {
  cargo: string;
  constructor(nombre: string, email: string, cargo: string) {
    super(nombre, email);
    this.cargo = cargo;
  }
  mostrarCargo(): void {
    console.log(`Mi cargo es ${this.cargo}`);
  }
}

const oEmpleado1 = new Empleado("Ana", "ana@gmail.com", "Gerente");
oEmpleado1.saludar();
oEmpleado1.mostrarCargo();

class UsuarioBase {
  obtenerRol(): string {
    return "Usuario";
  }
}

class UsuarioAdmin extends UsuarioBase {
  obtenerRol(): string {
    return "Administrador";
  }
}

class UsuarioInvitado extends UsuarioBase {
  obtenerRol(): string {
    return "Invitado";
  }
}

const usuarios: UsuarioBase[] = [new UsuarioAdmin(), new UsuarioInvitado()];

usuarios.forEach((usuario) => {
  console.log(usuario.obtenerRol());
});

// Encapsulamiento
class CuentaBancaria {
  private saldo: number = 0;

  depositar(monto: number): void {
    if (monto > 0) {
      this.saldo += monto;
      console.log(`Depósito exitoso. Saldo actual: ${this.saldo}`);
    } else {
      console.log("Monto inválido para depósito.");
    }
  }

  getSaldo(): number {
    return this.saldo;
  }
}

const oCuenta = new CuentaBancaria();
oCuenta.depositar(100);
console.log(`Saldo actual: ${oCuenta.getSaldo()}`);
