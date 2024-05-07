import { Elysia } from "elysia";
import { accounts } from "./accounts";
import { addAccount } from "./addAccount";
import { addTransaction } from "./addTransaction";
import { find } from "./find";
import { getTransactions } from "./getTransactions";

export const users = new Elysia({ prefix: "/users" })
  .use(find)
  .use(accounts)
  .use(addAccount)
  .use(getTransactions)
  .use(addTransaction);
