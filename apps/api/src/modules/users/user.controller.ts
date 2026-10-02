import type { Request, Response } from "express";
import { sendResponse } from "../../common/types/send-response.js";
import { userService } from "./user.service.js";

export const getUserByUsername = async (
  req: Request<{ username: string }>,
  res: Response,
) => {
  const user = await userService.getByUsername(req.params.username);

  return sendResponse(res, 200, user);
};
