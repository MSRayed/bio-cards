"use client";

import SessionCard from "@/components/session-card";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/");
    }
  }, [isLoaded, isSignedIn]);

  return (
    <main>
      <section>
        <h1 className="text-4xl font-bold text-foreground">Recent sessions</h1>

        <section className="flex gap-x-5 mt-10">
          <SessionCard title="Zygote" numberOfCards={21} hue={236} />
          <SessionCard title="Lungs" numberOfCards={13} hue={121} />
          <SessionCard title="Mitosis" numberOfCards={18} hue={0} />
        </section>
      </section>
    </main>
  );
};

export default HomePage;
