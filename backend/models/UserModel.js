import mongoose from "mongoose";
const UserModel = new mongoose.Schema({
	// схема ( какие поля)
	login: { type: String, required: true }, //required: true обязательно, мы говорим что без логина не создастся
	password: { type: String, required: true },
	name: { type: String, required: true },
});

export default mongoose.model("user", UserModel); // аргументы - название модели и сама модель
