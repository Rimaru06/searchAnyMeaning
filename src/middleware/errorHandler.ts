import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";

const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message = err.message;
  console.error("Global error Handler : ", err);
  res.status(statusCode).json({ error: message });
};

export default errorHandler;
