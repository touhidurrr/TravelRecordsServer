import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const getTransactions = (app: Elysia) =>
  app.get(
    "/accounts/:accountId/transactions",
    async ({ params: { accountId } }) => {
      const trasactions = await prisma.trasaction.findMany({
        where: { accountId },
      });
      return trasactions;
    },
    {
      params: t.Object({
        accountId: t.Numeric(),
      }),
    },
  );
