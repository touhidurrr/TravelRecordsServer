import { type Elysia, t } from "elysia";
import { prisma } from "../../../services/prisma";

export const postTransaction = (app: Elysia) =>
  app.post(
    "/transactions",
    async ({ body: { ref, amount, accountId } }) => {
      const transactions = await prisma.transaction.create({
        data: {
          ref,
          amount,
          accountId,
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
    },
  );
