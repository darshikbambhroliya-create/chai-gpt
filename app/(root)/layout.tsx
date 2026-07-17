import { onBoard } from "@/features/auth/action/onboard";
import { ChatShell } from "@/features/Conversation/components/ChatShell";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const RootGroupLayout = async ({ children }: { children: React.ReactNode }) => {
  await auth.protect();
  await onBoard();
  return (
    <div>
      <ChatShell>{children}</ChatShell>
    </div>
  );
};

export default RootGroupLayout;
