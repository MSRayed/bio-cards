"use client";

import { UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <nav className="px-10 py-3 bg-secondary flex justify-between items-center">
      <p className="text-3xl font-bold text-primary">bio.</p>

      {isSignedIn && (
        <div className="flex justify-between gap-x-5">
          <UserButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
