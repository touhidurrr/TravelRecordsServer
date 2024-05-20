import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const getAccounts = (app: Elysia) =>
  app.get(
    "",
    async ({ query: { userId } }) => {
      const accounts = await prisma.account.findMany({
        where: { ownerId: userId },
      });

      return accounts;
    },
    {
      query: t.Object({
        userId: t.Numeric(),
      }),
    },
  );
