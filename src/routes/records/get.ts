import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const getTravelRecords = (app: Elysia) =>
  app.get(
    "",
    async ({ query: { userId } }) => {
      const records = await prisma.travelRecord.findMany({
        where: { travelRecordLinks: { some: { userId } } },
      });

      return records;
    },
    {
      query: t.Object({
        userId: t.Numeric(),
      }),
    }
  );
