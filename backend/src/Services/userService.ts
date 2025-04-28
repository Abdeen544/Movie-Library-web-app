import { userModel } from "../Models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateJWT = (data: any) => {
    return jwt.sign(data, process.env.SECRET_KEY || '');
}

interface RegisterParams {
    name: string,
    email: string,
    password: string
}

export const register = async ({name, email, password}: RegisterParams) => {
    const findUser = await userModel.findOne({email});

    if (findUser){
        return {data: "user already exists", statusCode: 400};
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({name, email, password:hashPassword});
    await newUser.save();

    return {data: generateJWT({name, email}), statusCode: 200};
}

interface LoginParams {
    email: string,
    password: string
}

export const login = async ({email, password}: LoginParams) => {
    const findUser = await userModel.findOne({email});

    if (!findUser){
        return {data: "user doesn't exists", statusCode: 400};
    }

    const passwordMatch = await bcrypt.compare(password, findUser.password);

    if(passwordMatch){
        return {data: generateJWT({name: findUser.name, email}), statusCode: 200};
    }
    
    return {data: "incorrect email or password", statusCode: 400};
}