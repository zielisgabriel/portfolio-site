import { PrismaClient } from "./generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

export const adapter = new PrismaBetterSqlite3({
  url: process.env["DATABASE_URL"] ?? ":memory:",
});

export const prisma = new PrismaClient({
  adapter,
});