"use server";

import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

// import { auth } from "@clerk/nextjs"

export async function requireUser() {
  const { userId } = await auth.protect();
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  if (!user) {
    throw new Error("user is not logged in");
  }
  return user;
}
