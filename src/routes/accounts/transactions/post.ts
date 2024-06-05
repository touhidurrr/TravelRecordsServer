import { type Elysia, t } from "elysia";
import { prisma } from "../../../services/prisma";

export const postTransaction = (app: Elysia) =>
  app.post(
    "/transactions",
    async ({ body: { ref, amount, accountId } }) => {
      const { transactions } = await prisma.account.update({
        where: { id: accountId },
        data: {
          balance: {
            increment: amount,
          },
          transactions: {
            create: {
              ref,
              amount,
            },
          },
        },
        select: {
          transactions: true,
        },
      });

      return transactions;
    },
    {
      body: t.Object({
        amount: t.Numeric(),
        accountId: t.Numeric(),
        ref: t.Union([t.String(), t.Null()]),
      }),
    }
  );
