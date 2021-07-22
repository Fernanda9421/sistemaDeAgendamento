import { Router } from 'express';
import UserController from './app/controllers/UserController';
import Database from './database';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Fernanda',
        email: 'fer.candrade21@gmail.com',
        password_hash: '123456'
    });
    return res.json(user)
})


export default routes;