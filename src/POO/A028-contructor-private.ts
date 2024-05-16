// Sigleton - GoF | Factory Method - GoF
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('retornando instancia ja criada');
      return Database.database;
    }
    console.log('Criando nova instancia');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const database1 = Database.getDatabase('localhost', 'root', '123456');
database1.connect();

const database2 = Database.getDatabase('localhost', 'root', '123456');
database2.connect();

const database3 = Database.getDatabase('localhost', 'root', '123456');
database3.connect();

const database4 = Database.getDatabase('localhost', 'root', '123456');
database4.connect();


