import User from "./Domain/User";
import { User_T } from "../../Types";
import Database from "../DatabaseRepository";

export default class SignInInteractor {
  database: Database;
  constructor (database: Database) {
    this.database = database;
  }

  async singIn(userName : String, email: String, firstName: String, lastName: String,
    password: String, birthDate: String, gender: String, age: Number) {
    //create timestamps
    try {
      const timestamps = new Date().toISOString().replace("T", " ").split(".")[0];
      const user: User_T = new User(-1, userName, email, firstName,
                              lastName, password, birthDate, gender, age, timestamps, timestamps, null);
      const response = await this.database.signIn({...user});
      if (response.rowCount === 1) {
        return ("Registrado Exitosamente");
      } else {
        return (500);
      }
    } catch (error: any) {
      console.log(error.code);
      if (error.code === '23502') {
        return (400);
      } else {
        return (409);
      }
    }
  }
}
