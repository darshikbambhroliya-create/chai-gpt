import { ModeToggle } from "@/components/ui/mode-toggle";
import { startNewChat } from "@/features/Home/action/start-new-chat";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const HomePage = async () => {
  const conversationId = await startNewChat();
  redirect(`/c/${conversationId}`);
};

export default HomePage;
