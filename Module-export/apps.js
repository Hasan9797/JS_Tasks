const {getId} = require('./jenrade_id');

class User{
    constructor(firstName, lastName, address, email, phone,password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.id = getId();
    }

    getDataToClient(){
        return{
        firstname: this.firstName,
        lastname: this.lastName,
        address: this.address
        }
    }

    getDAtaToAdmin(){
       return {
        id: this.id,
        firstname: this.firstName,
        lastname: this.lastName,
        address: this.address,
        email: this.email,
        phoone: this.phone,
        password: this.password
       }
    }

    getDataToModerator(){
        return {
        id: this.id,
        firstname: this.firstName,
        lastname: this.lastName,
        address: this.address,
        email: this.email,
        phoone: this.phone,
        }
    }

}

module.exports = User;
