import { Elysia } from "elysia";
import { accounts } from "../accounts";
import { find } from "./find";

export const users = new Elysia({ prefix: "/users" })
  .use(accounts)
  .use(find);
