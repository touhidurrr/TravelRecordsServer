import { type Elysia, t } from "elysia";
import { prisma } from "../../../services/prisma";

export const getTransactions = (app: Elysia) =>
  app.get(
    "/:accountId/transactions",
    async ({ params: { accountId } }) => {
      const transactions = await prisma.transaction.findMany({
        where: { accountId },
      });
      return transactions;
    },
    {
      params: t.Object({
        accountId: t.Numeric(),
      }),
    }
  );
