export default class User {
    id: Number;
    userName: String;
    email: String;
    firstName: String;
    lastName: String;
    password: String;
    birthDate: String;
    gender: String;
    age: Number;
    updateAt: String;
    createAt: String;
    icon: Blob | null;

    constructor(id: Number, userName: String, email: String, firstName: String, lastName: String, password: String, birthDate: String, gender: String, age: Number, updateAt: String, createAt: String, icon: Blob | null) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.birthDate = birthDate;
        this.gender = gender;
        this.age = age;
        this.updateAt = updateAt;
        this.createAt = createAt;
        this.icon = icon;
    }
}
