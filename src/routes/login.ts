import { type Elysia, t } from "elysia";
import { getRandomBase64String } from "../lib";
import { tokenCache } from "../services/cache";
import { prisma } from "../services/prisma";

export const login = (app: Elysia) =>
  app.post(
    "/login",
    async ({ body: { username, password }, error }) => {
      const user = await prisma.user.findFirst({
        where: {
          OR: [{ username }, { email: username }],
        },
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          hash: true,
        },
      });

      if (!user) return error(403);

      const isMatch = await Bun.password.verify(password, user.hash);

      if (!isMatch) return error(403);

      const token = getRandomBase64String(32);

      tokenCache.set(user.username, token);

      return { user: { ...user, hash: undefined }, token };
    },
    {
      type: "json",
      body: t.Object({
        username: t.String(),
        password: t.String(),
      }),
    },
  );
