import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoutButton from "./logoutButton";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b px-6 py-4">
      <Link href="/" className="font-semibold">
        🦥 Traffic Sloth
      </Link>
      <div className="flex items-center gap-2">
        <Link href="/signin">
          <Button variant="ghost">Log in</Button>
        </Link>
        <Link href="/signup">
          <Button>Sign up</Button>
        </Link>
        <LogoutButton/>
      </div>
    </nav>
  );
}