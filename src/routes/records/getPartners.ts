import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const getPartners = (app: Elysia) =>
  app.get(
    "/:recordId/partners",
    async ({ params: { recordId } }) => {
      const users = await prisma.user.findMany({
        where: { travelRecordLinks: { some: { userId: recordId } } },
      });

      return users;
    },
    {
      params: t.Object({
        recordId: t.Numeric(),
      }),
    }
  );
