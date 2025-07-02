"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LandingPage() {
  const router = useRouter();
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/home");
    }
  }, [isLoaded, isSignedIn]);

  return (
    <main className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1 className="text-6xl font-extrabold text-primary">Bio Cards</h1>
      <p className="text-xl">Generate cards from biology terms</p>

      <Link href="/home">
        <Button className="text-lg mt-8">Get started</Button>
      </Link>
    </main>
  );
}
