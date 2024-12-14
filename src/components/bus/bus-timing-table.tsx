import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BusTiming } from "@/types/bus-timings";

interface BusTimingsTableProps {
  timings: BusTiming[];
}

export function BusTimingsTable({ timings }: BusTimingsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Ferry ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Arrival Time</TableHead>
          <TableHead>Departure Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {timings.map((bus) => (
          <TableRow key={bus.id}>
            <TableCell className="font-medium">{bus.id}</TableCell>
            <TableCell>{bus.name}</TableCell>
            <TableCell>{bus.arrivalTime}</TableCell>
            <TableCell>{bus.departureTime}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
