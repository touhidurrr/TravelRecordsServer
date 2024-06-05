import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const deleteAccount = (app: Elysia) =>
  app.delete(
    "/:accountId",
    async ({ params: { accountId } }) => {
      await prisma.transaction.deleteMany({
        where: { accountId },
      });
      await prisma.account.delete({
        where: { id: accountId },
      });

      return { success: true };
    },
    {
      params: t.Object({
        accountId: t.Numeric(),
      }),
    }
  );
