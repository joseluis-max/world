const pgp = require('pg-promise');

class Database {
  database;
  constructor () {
    this.database = pgp(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`);
  }

  login(userName: String, password: String){
    return this.database.one('CALL login($1, $2)', [userName, password]);
  }
}

module.exports = {
  database: new Database()
};
