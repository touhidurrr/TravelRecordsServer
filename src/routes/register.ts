import { type Elysia, t } from "elysia";
import { getRandomBase64String } from "../lib";
import { tokenCache } from "../services/cache";
import { prisma } from "../services/prisma";

export const register = (app: Elysia) =>
  app.post(
    "/register",
    async ({ body: { name, email, username, password }, error }) => {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          username,
          hash: await Bun.password.hash(password),
        },
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          hash: true,
        },
      });

      const token = getRandomBase64String(32);

      tokenCache.set(user.username, token);

      return { user: { ...user, hash: undefined }, token };
    },
    {
      type: "json",
      body: t.Object({
        name: t.String(),
        username: t.String(),
        email: t.String({ format: "email" }),
        password: t.String({ minLength: 8 }),
      }),
    },
  );
