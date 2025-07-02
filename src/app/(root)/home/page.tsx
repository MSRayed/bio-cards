"use client";

import { useAuth } from "@clerk/nextjs";

const HomePage = () => {
  const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth();

  return (
    <main>
      Hello, {userId}! Your current active session is {sessionId}.
    </main>
  );
};

export default HomePage;
