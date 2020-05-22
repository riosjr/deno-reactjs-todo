import 'https://deno.land/x/dotenv/load.ts';
import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './routes/index.ts';

const env = Deno.env.toObject();

const APP_HOST = env.APP_HOST || '127.0.0.1';
const APP_PORT = env.APP_PORT || 3000;

const app = new Application();

app.use(router.routes());

console.log(`Server running on port ${APP_PORT}...`);
await app.listen(`${APP_HOST}:${APP_PORT}`);
