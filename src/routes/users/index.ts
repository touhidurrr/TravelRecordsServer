import { Elysia } from "elysia";
import { find } from "./find";
import { patchUser } from "./patch";

export const users = new Elysia({ prefix: "/users" }).use(find).use(patchUser);
