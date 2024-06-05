import { type Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const patchUser = (app: Elysia) =>
  app.post(
    "/:userId",
    async ({
      error,
      params: { userId },
      body: { name, email, password, newPassword },
    }) => {
      const dataToUpdate: {
        name?: string;
        hash?: string;
        email?: string;
      } = {};

      if (password && newPassword) {
        const user = await prisma.user.findFirst({
          where: { id: userId },
          select: { hash: true },
        });

        if (!(await Bun.password.verify(password, user?.hash || ""))) {
          return error(403);
        }

        dataToUpdate.hash = await Bun.password.hash(newPassword);
      }

      if (name) dataToUpdate.name = name;
      if (email) dataToUpdate.email = email;

      await prisma.user.update({
        where: { id: userId },
        data: dataToUpdate,
      });

      return { success: true };
    },
    {
      type: "json",
      params: t.Object({
        userId: t.Numeric(),
      }),
      body: t.Object({
        name: t.Union([t.String(), t.Null()]),
        email: t.Union([t.String(), t.Null()]),
        password: t.Union([t.String(), t.Null()]),
        newPassword: t.Union([t.String(), t.Null()]),
      }),
    }
  );
