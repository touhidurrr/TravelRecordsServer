import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const find = (app: Elysia) =>
  app.get(
    "/find",
    async ({ query: { usernameOrEmail } }) => {
      const user = await prisma.user.findFirst({
        where: {
          OR: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
        },
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
        },
      });

      return user;
    },
    {
      type: "json",
      query: t.Object({
        usernameOrEmail: t.String(),
      }),
    }
  );
