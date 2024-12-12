import { Metadata } from "next";
import EventDetails from "./EventsDetails";

interface PageProps {
  params: { event: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  // You can fetch data here if needed for dynamic metadata
  return {
    title: `Event: ${params.event}`,
  };
}

export default function Page({ params }: PageProps) {
  return <EventDetails eventId={params.event} />;
}
