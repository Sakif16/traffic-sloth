"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function LogoutButton() {
  const handleClick = async() => {
    await authClient.signOut({
        fetchOptions: {
        onSuccess: () => {
        redirect('/signin')// redirect to login page
    },
  },
});
  };

  return (
    <Button variant="ghost" onClick={handleClick}>
      Log out
    </Button>
  );
}