import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function MobileNavLinks() {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/user-profile"
        className="bg-white items-center font-bold hover:text-orange-500"
      >
        User Profile
      </Link>
      <Button
        onClick={async () => await logout()}
        className="flex flex-1 items-center px-3 font-bold hover:bg-gray-500"
      >
        Logout
      </Button>
    </>
  );
}
