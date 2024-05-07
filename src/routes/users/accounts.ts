import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const accounts = (app: Elysia) =>
  app.get(
    "/:userId/accounts",
    async ({ params: { userId } }) => {
      const accounts = await prisma.account.findMany({
        where: { ownerId: userId },
      });

      return accounts;
    },
    {
      params: t.Object({
        userId: t.Numeric(),
      }),
    }
  );
