import bcrypt from 'bcryptjs';
import db from '../models/index'

const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hahPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hahPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId
            })
            resolve('ok create a new user success! ');
        } catch (error) {
            reject(e);
        }
    }) 
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hahPassword = await bcrypt.hashSync(password, salt);
            resolve(hahPassword);
        } catch (error) {
            reject(error);
        }
    })
}
module.exports = {
    createNewUser: createNewUser
}