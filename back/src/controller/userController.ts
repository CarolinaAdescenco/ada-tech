import { Request, Response } from 'express';

export default class UserController {
    constructor() {}

    async login(req: Request, res: Response) {
        const { login, senha } = req.body;

        // try {
        //     const user = await userServices.login(req.body);
        //     res.status(200).send(user);
        // } catch (error) {
        //     return res.status(500).send(error);
        // }

        // return res.json("login efetuado: " + " " + login + " " + senha)
    }
}
