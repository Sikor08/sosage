import express from 'express';// Библиотека для бекенда (общение с фронтом и ДБ)
import * as dotenv from 'dotenv'
import mongoose, { connect } from "mongoose";
import UserModel from './models/UserModel.js';
dotenv.config();


const app = express();
const DB_URL = process.env.CONNECT_MONGO
app.use(express.json());
app.use(express.urlencoded({ extended: true }));// в Express.js используется для подключения middleware, который отвечает за парсинг входящих запросов с данными, закодированными в формате application/x-www-form-urlencoded. Этот формат обычно используется HTML формами.
//  app.use("/api", router);


await mongoose.connect(DB_URL);

app.get('/api/hello', (req, res) => {
  // Отправляем строку 'hello' в ответе.
  res.send('hello');
});

app.post("/api/users/register", async (req, res) => {
	//отправляем пост запрос на сервер и передаем в бади логин и пароль
	const createdUser = await UserModel.create({
		login: req.body.login,
		password: req.body.password,
		name: req.body.name,
	});
	res.send(createdUser); // сервер возвращает созданного пользователя
});

// app.post('/api/users/register', async (req, res) => {
//   try {
//     const { login, password, name } = req.body;

//     if (!login || !password) {
//       return res.status(400).json({ message: 'Логин и пароль обязательны для заполнения.' });
//     }

//     // Создание нового пользователя
//     const newUser = await userModel.create({ login, password, name });
//     // Сохранение пользователя в базу данных

//     // Отправляем ответ об успешной регистрации
//     res.status(201).json({ message: 'Пользователь успешно создан.' });
//   } catch (error) {
//     res.status(500).json({ message: 'Ошибка при создании пользователя', error });
//   }
// });

app.listen(5050, () => console.log("listening on port 5050"));