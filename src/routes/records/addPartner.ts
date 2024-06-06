import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const addPartner = (app: Elysia) =>
  app.post(
    "/:recordId/partners",
    async ({ error, params: { recordId }, body: { email } }) => {
      const user = await prisma.user.findFirst({
        where: { email },
        select: {
          id: true,
          name: true,
          email: true,
          username: true,
        }
      });

      if (!user) return error(400, "User not found");

      await prisma.usersOnTravelRecord.create({
        data: {
          userId: user.id,
          travelRecordId: recordId,
        },
      });

      return user;
    },
    {
      params: t.Object({
        recordId: t.Numeric(),
      }),
      body: t.Object({
        email: t.String({ format: "email" }),
      }),
    }
  );
