"use server";

import { prisma } from "@/lib/prisma";
import { cacheLife, cacheTag } from "next/cache";

export async function getTechnologiesService() {
  "use cache";

  cacheTag("technologies");
  cacheLife("weeks");

  const technologies = await prisma.technology.findMany({
    orderBy: { name: "asc" }
  });

  return technologies;
}
