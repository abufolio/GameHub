import type { Response } from "express";
import type { ApiResponse } from "./api-response.js";

export const sendResponse = <T>(
  res: Response,
  statusCode: number,
  data: T,
  message?: string,
) => {
  const response: ApiResponse<T> = {
    success: true,
    data,
    ...(message && { message }),
  };

  return res.status(statusCode).json(response);
};
