import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const HomePage = () => {
  return (
    <div>
      Home Page
      <ModeToggle />
      <UserButton />
    </div>
  );
};

export default HomePage;
