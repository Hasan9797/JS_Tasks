
const {user_id,user_time} = require('./user_id');

module.exports = class Users{
    constructor(firstName, lastName, age, email,addres,phone,password){
        this.id = user_id();
        this.time = user_time();
        this.firs = firstName;
        this.las = lastName;
        this.age = age;
        this.em = email;
        this.add = addres;
        this.ph = phone;
        this.pass = password
    }

    getDataToClinet(){
        return {
            firstName: this.firs,
            lastName: this.las,
            age: this.age,
            address: this.add,
            email: this.email
        }
    }

    getDataToAdmin(){
       return {
        id: this.id,
        firstName: this.firs,
        lastName: this.las,
        age: this.age,
        address: this.add,
        phone: this.ph,
        password: this.pass,
        Time: this.time
       }
    }

    getDataToModrator(){
        return {
        firstName: this.firs,
        lastName: this.las,
        age: this.age,
        Time: this.time
        }
    }
}
