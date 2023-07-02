//Singleton -- GoF
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
    ) {}

    static getDabatase(host:string, user:string,password:string): Database {
      if(Database.database) {
        console.log('Retornando a instância existente')
        return Database.database;
      }
      console.log('Criando nova instância')
      Database.database = new Database(host, user,password)
      return Database.database
    }

    connect():void {
    console.log(`Conectando: ${this.host}, ${this.user}, ${this.password}`)
  }
}

const db1 =  Database.getDabatase('localhost', 'root', '123456');
db1.connect()

const db2 =  Database.getDabatase('localhost', 'root', '123456');
db2.connect()

console.log(db1 === db2)
