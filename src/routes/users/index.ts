import { Elysia } from "elysia";
import { find } from "./find";

export const users = new Elysia({ prefix: "/users" }).use(find);
