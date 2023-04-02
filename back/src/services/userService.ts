import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

import auth from "../config/auth";
import UserModel from "../database/models/userModel";
import UserRepository from "../database/repositories/userRepository";
import AppError from "./AppError";

export default class UserService {
    regexEmail = new RegExp(/^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i);

    constructor(private userRepository = new UserRepository()) {}

    async create(data: UserModel) {
        if (!this.regexEmail.test(data.login))
            throw new AppError("E-mail inválido", 400);

        const validateUser = await this.userRepository.findByLogin(data.login);

        if (validateUser?.login)
            throw new AppError("O e-mail informado já foi cadastrado", 400);

        const hashSenha = await hash(data.senha, 8);
        data.senha = hashSenha;
        return await this.userRepository.create(data);
    }

    async delete(id: string) {
        const user = await this.userRepository.findById(id);

        if (!user) throw new AppError("Usuário não existe!", 404);

        const deletedUser = await this.userRepository.delete(id);

        return deletedUser;
    }

    async login(data: UserModel) {
        try {
            const userDB = await this.userRepository.findByLogin(data.login);

            if (!userDB) throw new AppError("Usuário ou senha inválidos", 401);

            if (!bcrypt.compareSync(data.senha, userDB.senha))
                throw new AppError("Usuário ou senha inválidos", 401);

            const token = jwt.sign(
                {
                    _id: Math.random(),
                    name: userDB.login,
                },
                auth.jwt.secret,
                { expiresIn: auth.jwt.expiresIn }
            );

            return { userDB, token };
        } catch (error) {
            return new AppError("Usuário ou senha inválidos", 400);
        }
    }

    public async findAllUsers(): Promise<UserModel[]> {
        return await this.userRepository.findAllUsers();
    }
}
