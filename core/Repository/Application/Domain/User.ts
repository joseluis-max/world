class User {
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
    image: Blob;

    constructor(userName: String, email: String, firstName: String, lastName: String, password: String, birthDate: String, gender: String, age: Number, updateAt: String, createAt: String, image: Blob) {
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
        this.image = image;
    }

    session(){
        console.log("Starting Session");
    }
}
