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

interface Printer {
  print(): void;
}
interface Scanner {
  scan(): void;
}
interface Fax {
  fax(): void;
}

class MultiFunctionPrinter implements Printer, Scanner, Fax {
  print(): void {
    console.log("Printing...");
  }
  scan(): void {
    console.log("Scanning...");
  }
  fax(): void {
    console.log("Faxing...");
  }
}

class SimplePrinter implements Printer {
  print(): void {
    console.log("Printing...");
  }
}

class MySQLDatabase {
  connect(): void {
    console.log("Connecting to MySQL database...");
  }
}

class UserService {
  private database = new MySQLDatabase();
}
interface Database {
  connect(): void;
}

class MysqlDatabaseOK implements Database {
  connect(): void {
    console.log("Connecting to MySQL database...");
  }
}

class PostgresDatabaseOK implements Database {
  connect(): void {
    console.log("Connecting to PostgreSQL database...");
  }
}

class UserServiceOk {
  constructor(private database: Database) {}
}

const db = new MysqlDatabaseOK();
const db2 = new PostgresDatabaseOK();
const userService = new UserServiceOk(db);
const userService2 = new UserServiceOk(db2);
