import { MongoClient } from 'https://deno.land/x/mongo@v0.7.0/mod.ts';

const env = Deno.env.toObject()

const client = new MongoClient();

client.connectWithUri(env.MONGODB_URI);

const db = client.database('todo-db');

console.log('Connected to DB!')

export default db;
