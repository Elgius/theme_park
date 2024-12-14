import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Phone } from "lucide-react";

export default function BusSchedule() {
  return (
    <div className="min-h-screen bg-[#8CD7E0] p-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl font-black text-center text-black drop-shadow-md">
          Bus Schedule
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Camp Bonifas to Camp Casey Schedule */}
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle className="text-center text-sm font-medium">
                Camp Bonifas - Camp Casey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">SPOT</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="text-right">Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Departs</TableCell>
                    <TableCell>
                      Bldg S-164
                      <br />
                      Camp Bonifas, ROK
                    </TableCell>
                    <TableCell className="text-right">07:30</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Departs</TableCell>
                    <TableCell>
                      Bldg S-164
                      <br />
                      Camp Bonifas, ROK
                    </TableCell>
                    <TableCell className="text-right">07:30</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Arrives</TableCell>
                    <TableCell>
                      Bldg S-2007
                      <br />
                      Camp Casey, ROK
                    </TableCell>
                    <TableCell className="text-right">08:50</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Camp Casey to Camp Bonifas Schedule */}
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle className="text-center text-sm font-medium">
                Camp Casey - Camp Bonifas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">SPOT</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="text-right">Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Departs</TableCell>
                    <TableCell>
                      Bldg S-2007
                      <br />
                      Camp Casey, ROK
                    </TableCell>
                    <TableCell className="text-right">13:00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Departs</TableCell>
                    <TableCell>
                      Bldg S-2007
                      <br />
                      Camp Casey, ROK
                    </TableCell>
                    <TableCell className="text-right">13:00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Arrives</TableCell>
                    <TableCell>
                      Bldg S-164
                      <br />
                      Camp Bonifas, ROK
                    </TableCell>
                    <TableCell className="text-right">14:00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-black text-black">SUNDAY ONLY</h2>
          <div className="bg-white/90 rounded-lg p-4 inline-block">
            <p className="text-sm flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              For any questions, please contact MTCC
            </p>
            <p className="text-xs text-gray-600">Monday - Friday 0800-1630</p>
          </div>
        </div>
      </div>
    </div>
  );
}
