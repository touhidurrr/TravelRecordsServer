import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const addTransaction = (app: Elysia) =>
  app.post(
    "/accounts/transactions/add",
    async ({ body: { ref, amount, accountId } }) => {
      const trasaction = await prisma.trasaction.create({
        data: {
          ref,
          amount,
          accountId,
        },
      });
      return trasaction;
    },
    {
      body: t.Object({
        amount: t.Numeric(),
        accountId: t.Numeric(),
        ref: t.Union([t.String(), t.Null()]),
      }),
    }
  );
