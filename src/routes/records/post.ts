import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const postTravelRecords = (app: Elysia) =>
  app.post(
    "",
    async ({ body: { ownerId, title, from, to } }) => {
      const record = await prisma.travelRecord.create({
        data: {
          title,
          from,
          to,
          ownerId,
          travelRecordLinks: {
            create: {
              userId: ownerId,
            },
          },
        },
      });

      return record;
    },
    {
      body: t.Object({
        ownerId: t.Number(),
        title: t.String(),
        from: t.String(),
        to: t.String(),
      }),
    }
  );
