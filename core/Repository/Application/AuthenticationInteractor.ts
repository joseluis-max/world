const user = require("./Domain/User");
const database = require("../DatabaseRepository");

interface Database {
  database;
  
}

class AuthenticationInteractor {
  async login(db: Database, userName: String, password: String) {
    const response = await db.login(userName, password);
    if (response.ok && response.status === 200) {
      const data = await response.json();
      return new user(
        data.userName,
        data.email,
        data.firstName,
        data.lastName,
        data.password,
        data.birthData,
        data.gender,
        data.age,
        data.updateAt,
        data.createAt,
        data.image
      );
    } else {
      return 404;
    }
  }
}
