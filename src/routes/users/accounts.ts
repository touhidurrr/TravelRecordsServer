import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const accounts = (app: Elysia) =>
  app.get(
    "/:userId/accounts",
    async ({ params: { userId } }) => {
      const user = await prisma.user.findFirst({
        where: { id: userId },
        select: { accounts: true },
      });

      return user?.accounts ?? null;
    },
    {
      params: t.Object({
        userId: t.Numeric(),
      }),
    }
  );
