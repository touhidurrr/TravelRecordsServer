import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const getExpenses = (app: Elysia) =>
  app.get(
    "/:recordId/expenses",
    async ({ params: { recordId } }) => {
      const expenses = await prisma.expense.findMany({
        where: { travelRecordId: recordId },
      });

      return expenses;
    },
    {
      params: t.Object({
        recordId: t.Numeric(),
      }),
    }
  );
