import { Elysia } from "elysia";
import { DEFAULT_HOST, DEFAULT_PORT } from "./constants";
import { login } from "./routes/login";
import { register } from "./routes/register";
import { users } from "./routes/users";
import { accounts } from "./routes/accounts";
import { records } from "./routes/records";

const port = process.env.PORT ?? DEFAULT_PORT;
const hostname = process.env.HOST ?? DEFAULT_HOST;

const app = new Elysia()
  .use(login)
  .use(register)
  .use(users)
  .use(accounts)
  .use(records)
  .get("/", "TravelRecordsServer is running!")
  .listen({ port, hostname });

console.log(`Server running at ${app.server?.url}`);
