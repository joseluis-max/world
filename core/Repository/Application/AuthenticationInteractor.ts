// import User from "./Domain/User";
import User from './Domain/User';
import { User_T } from "../../Types";
import Database from '../DatabaseRepository';

export default class AuthenticationInteractor {

  async login(db: Database, email: String, password: String) {
    try {
      const response = await db.login(email, password);
      if (response.rowCount === 1) {
        console.log(response.rows[0]);
        const data: User_T = response.rows[0];
        return new User(
        data.id,
        data.userName,
        data.email,
        data.firstName,
        data.lastName,
        data.password,
        data.birthDate,
        data.gender,
        data.age,
        data.updateAt,
        data.createAt,
        data.icon,
        )
      } else if (response.rowCount == 0) {
        return (404);
      } else {
        return (500);
      }
    } catch (error) {
      console.log(error);
      return (500);
    }
  }
}
