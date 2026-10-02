import { prisma } from "../../infrastructure/prisma/prisma.service.js";

export const userRepository = {
  findByUsername(username: string) {
    return prisma.user.findUnique({
      where: { username },
    });
  },
};
