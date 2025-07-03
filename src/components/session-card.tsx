import Link from "next/link";
import { Button } from "./ui/button";

interface SessionCardProps {
  title: string;
  numberOfCards: number;
  hue: number;
}

const SessionCard = ({ title, numberOfCards, hue }: SessionCardProps) => {
  return (
    <main
      className="bg-secondary px-10 py-10 rounded-2xl"
      style={{ backgroundColor: `hsl(${hue}, 50%, 50%)` }}
    >
      <Link href={`/sessions/${title}`}>
        <Button className="text-2xl font-semibold text-accent" variant={"link"}>
          {title}
        </Button>
      </Link>

      <section className="mt-5 text-accent">
        <p>- {numberOfCards} cards</p>
      </section>
    </main>
  );
};

export default SessionCard;
