import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const addExpense = (app: Elysia) =>
  app.post(
    "/:recordId/expenses",
    async ({ error, params: { recordId }, body: { title, amount } }) => {
      const expense = await prisma.expense.create({
        data: {
          title,
          amount,
          travelRecordId: recordId,
        },
      });
      return expense;
    },
    {
      params: t.Object({
        recordId: t.Numeric(),
      }),
      body: t.Object({
        title: t.String(),
        amount: t.Number(),
      }),
    }
  );
