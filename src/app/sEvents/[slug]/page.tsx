import supabaseIntializer from "@/app/api/supabaseClient/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const supabase = supabaseIntializer();

  const { data: event, error } = await supabase
    .from("events_description")
    .select("*")
    .eq("id", slug)
    .single();

  console.log(event);

  if (error) {
    console.log(error);
    console.error("Error fetching event data:", error);
    return <p>Error loading event data.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{event.name}</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-red-600 hover:text-red-800 font-semibold"
                >
                  Tickets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src="/images/event-placeholder.jpg" // Placeholder image since URL isn't in JSON
                alt={event.title}
                width={300}
                height={400}
                className="h-48 w-full object-cover md:h-full md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {event.title}
              </div>
              <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                {event.name}
              </h2>
              <p className="mt-2 text-gray-500">{event.description}</p>
              <div className="mt-4">
                <h3 className="font-semibold">Age Requirements:</h3>
                <p>{event.age}</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Family Offers:</h3>
                <p>{event.family_offers ? "Available" : "Not Available"}</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Price:</h3>
                <p>${event.price}</p>
              </div>
              <div className="mt-6">
                <Link href={`/events/${event.event_id}`}>
                  <Button className="bg-violet-300 text-white font-bold px-6 py-2 rounded-full hover:bg-violet-400 transition-colors">
                    Book now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
