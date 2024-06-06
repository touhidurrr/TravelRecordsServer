import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const getPartners = (app: Elysia) =>
  app.get(
    "/:recordId/partners",
    async ({ params: { recordId } }) => {
      const res = await prisma.usersOnTravelRecord.findMany({
        where: { travelRecordId: recordId },
        select: { user: true },
      });

      return res.map((u) => u.user);
    },
    {
      params: t.Object({
        recordId: t.Numeric(),
      }),
    }
  );
