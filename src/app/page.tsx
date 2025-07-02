import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
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
