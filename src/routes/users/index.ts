import { Elysia } from "elysia";
import { accounts } from "./accounts";
import { addAccount } from "./addAccount";
import { find } from "./find";

export const users = new Elysia({ prefix: "/users" })
  .use(find)
  .use(accounts)
  .use(addAccount);
