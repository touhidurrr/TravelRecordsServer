import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const addAccount = (app: Elysia) =>
  app.post(
    "/:userId/accounts/add",
    async ({ params: { userId }, body: { name, balance } }) => {
      const account = await prisma.account.create({
        data: {
          name,
          balance,
          ownerId: userId,
        },
      });

      return account;
    },
    {
      params: t.Object({
        userId: t.Numeric(),
      }),
      body: t.Object({
        name: t.String(),
        balance: t.Numeric(),
      }),
    }
  );
