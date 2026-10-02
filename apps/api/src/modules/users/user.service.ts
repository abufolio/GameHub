import { AppError } from "../../common/errors/app-error.js";
import { userRepository } from "./user.repository.js";

export const userService = {
  async getByUsername(username: string) {
    const user = await userRepository.findByUsername(username);

    if (!user) {
      throw new AppError(404, "User not found");
    }

    return {
      id: user.id,
      username: user.username,
      avatarUrl: user.avatarUrl,
      bio: user.bio,
      role: user.role,
      status: user.status,
      createdAt: user.createdAt,
    };
  },
};
