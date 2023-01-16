import { Pool, QueryResult } from 'pg';
import { User_T } from "../Types";

class Database {
  database: Pool;
  constructor () {
    this.database = new Pool({
      user: process.env.DB_USERNAME,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: 5432
    });
  };

  async login(email: String, password: String): Promise<QueryResult<any>> {
    const query = 'SELECT * FROM "world"."User" WHERE email=$1 AND password=$2';
    return await this.database.query(query, [email, password]);
  };

  async signIn({userName, email, firstName, lastName, password,
                 birthDate, gender, age, createAt, updateAt }: User_T ): Promise<QueryResult<any>> {
    const query = `INSERT
    INTO "world"."User" ("userName", "email", "firstName", "lastName", "password", "birthDate", "gender","age", "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
    return await this.database.query(query, [ userName,
                                              email,
                                              firstName,
                                              lastName,
                                              password,
                                              birthDate,
                                              gender,
                                              age,
                                              createAt,
                                              updateAt ]);
  };

  async uploadPublication(content: String, user: Number, date: Date, _listImages: Array<ArrayBuffer>, _listVideos: Array<String>) {
      const query = `INSERT INTO world."Publication" (content, date, "user") VALUES ($1, $2, $3)`;
      return await this.database.query(query, [content, date, user]);
  }
}

export default Database;
