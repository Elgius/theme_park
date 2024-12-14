import { BusTimingsTable } from "@/components/bus/bus-timing-table";
import { BusTiming } from "@/types/bus-timings";

// This function simulates fetching data from an API
async function getBusTimings(): Promise<BusTiming[]> {
  return [
    {
      id: "B001",
      name: "City Express",
      arrivalTime: "10:00 AM",
      departureTime: "10:15 AM",
    },
    {
      id: "B002",
      name: "Suburban Shuttle",
      arrivalTime: "10:30 AM",
      departureTime: "10:45 AM",
    },
    {
      id: "B003",
      name: "Downtown Direct",
      arrivalTime: "11:00 AM",
      departureTime: "11:10 AM",
    },
    {
      id: "B004",
      name: "Airport Link",
      arrivalTime: "11:30 AM",
      departureTime: "11:45 AM",
    },
    {
      id: "B005",
      name: "University Route",
      arrivalTime: "12:00 PM",
      departureTime: "12:15 PM",
    },
  ];
}

export default async function BusTimingsPage() {
  const busTimings = await getBusTimings();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Ferry timings</h1>
      <BusTimingsTable timings={busTimings} />
    </div>
  );
}
