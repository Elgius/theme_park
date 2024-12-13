import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const attractions = [
  {
    name: "Cosmic Coaster",
    description: "Out-of-this-world roller coaster experience",
  },
  {
    name: "Splash Mountain",
    description: "Cool off on this thrilling water ride",
  },
  {
    name: "Haunted Mansion",
    description: "Spooky adventures await in this classic attraction",
  },
  {
    name: "Fairy Tale Forest",
    description: "Magical journey through enchanted woods",
  },
];

export function AttractionsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {attractions.map((attraction) => (
        <Card key={attraction.name}>
          <CardHeader>
            <CardTitle>{attraction.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{attraction.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
      <Link href="/dashboard/events">
        <Button>+ Add Event</Button>
      </Link>
    </div>
  );
}
