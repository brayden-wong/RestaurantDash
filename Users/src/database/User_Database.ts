import { MongoClient } from 'mongodb';
import { mongo } from '../config/config';
import { user } from '../interfaces/User';
import login from '../interfaces/Credentials';

const client = new MongoClient(mongo.url, mongo.options);
const db = client.db(mongo.database);
const collection = { 
    user : db.collection(mongo.collections.users),
    tokens : db.collection(mongo.collections.tokens)
};

const register = async(user: user) => {
    client.connect();
    await collection.user.insertOne(user);
    client.close();
}

const login = async(credentials : login) => {
    await client.connect();
    const result =  await collection.user.findOne({ email: { $regex : `${credentials.username}`, $options : '$i' }},
        { projection: { _id : 1, email: 1, password : 1, license : 1 } }) as unknown as login;
    client.close();
    return result;
}

const getAllUsers = async(): Promise<user[]> => {
    await client.connect();
    const results = await collection.user.find({}).project({ _id : 1, name : 1, email : 1, location : 1}).toArray() as user[];
    client.close();
    return results;
}

export const containsToken = async(token: string) => {
    await client.connect();
    const results = await collection.tokens.find({ _id : token }).toArray();
    client.close();
    return results.length === 0 ? false : true;
}

export const getEmail = async(email: string): Promise<boolean> => {
    await client.connect();
    const results = await collection.user.find({ email : { $regex : String(email), $options : '$i' }}).toArray();
    client.close();
    return results.length > 0 ? true : false;
}

export const getTokens = async(token: string):Promise<boolean> => {
    await client.connect();
    const results = await collection.tokens.find({token : { $eq : token }}).toArray();
    client.close();
    return results.length > 0 ? false : true;
}

export default { register, login, getAllUsers };