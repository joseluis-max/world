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

  async uploadPublication(content: String, user: Number, date: Date, listImages: Array<ArrayBuffer>, listVideos:  Array<ArrayBuffer>) {
    const query_publication = `INSERT INTO world."Publication" (content, date, "user") VALUES ($1, $2, $3) RETURNING id;`;
    const query_images = `INSERT INTO world."Image" (bytea, publication) VALUES ($1, $2);`;
    const query_videos = `INSERT INTO world."Video" (bytea, publication) VALUES ($1, $2);`;
    let id = null;

    let response = await this.database.query(query_publication, [content, date, user]);
    id = response.rows[0].id;

    for (const image of listImages) {
      response = await this.database.query(query_images, [image, id]);
    }

    for (const video of listVideos) {
      response = await this.database.query(query_videos, [video, id]);
    }
    return response;
  }

  async getPublication() {
    const query = 'SELECT * FROM "world"."Publication";';
    return await this.database.query(query);
  }

  async getImages(id: Number) {
    const query = 'SELECT * FROM "world"."Image" WHERE publication = $1;';
    return await this.database.query(query, [id]);
  }

  async getVideos(id: Number) {
    const query = 'SELECT * FROM "world"."Video" WHERE publication = $1;';
    return await this.database.query(query, [id]);
  }
}

export default Database;
