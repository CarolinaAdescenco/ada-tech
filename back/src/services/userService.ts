// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import auth from "../../../config/auth";
// import sqlite3 from "sqlite3";

// const db = new sqlite3.Database(":memory:");

// import IUserDTO from "../../../database/dto/IUserDTO";

export default class UserService {
    //     async login(user: IUserDTO) {
    //         try {
    //             const userDB = {
    //                 login: "teste",
    //             };
    //             // const userDB = await db.findOne({ name: user.login });
    //             if (!userDB) throw new Error("Usuário ou senha inválidos");
    //             const comparaSenha = bcrypt.compareSync(user.senha, userDB.senha);
    //             if (!comparaSenha) throw new Error("Usuário ou senha inválidos");
    //             const token = jwt.sign(
    //                 {
    //                     _id: Math.random().toString(),
    //                     name: userDB.login,
    //                 },
    //                 auth.jwt.secret,
    //                 { expiresIn: auth.jwt.expiresIn }
    //             );
    //             return { userDB, token };
    //         } catch (error) {
    //             throw error;
    //         }
    //     }
}
