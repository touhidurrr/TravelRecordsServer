import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const postAccount = (app: Elysia) =>
  app.post(
    "",
    async ({ body: { name, balance, userId } }) => {
      const account = await prisma.account.create({
        data: {
          name,
          balance,
          ownerId: userId,
          transactions: {
            create: {
              amount: balance,
              ref: "Initial deposit",
            },
          },
        },
      });

      return account;
    },
    {
      body: t.Object({
        name: t.String(),
        balance: t.Numeric(),
        userId: t.Numeric(),
      }),
    },
  );
