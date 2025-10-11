import { SquareClient, SquareEnvironment } from "square";

export const square = new SquareClient({
  environment: SquareEnvironment.Sandbox,
  token: process.env.SQUARE_ACCESS_TOKEN,
});
