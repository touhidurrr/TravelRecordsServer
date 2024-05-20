import { Elysia } from "elysia";
import { getAccounts } from "./get";
import { postAccount } from "./post";
import { getTransactions } from "./transactions/get";
import { postTransaction } from "./transactions/post";

export const accounts = new Elysia({ prefix: "/accounts" })
  .use(getAccounts)
  .use(postAccount)
  .use(getTransactions)
  .use(postTransaction);
