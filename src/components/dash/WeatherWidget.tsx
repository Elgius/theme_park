import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sun, Thermometer } from "lucide-react";

export function WeatherWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sun className="mr-2" /> Park Weather
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Thermometer className="mr-2" />
            <span>75°F</span>
          </div>
          <div className="flex items-center">
            <Cloud className="mr-2" />
            <span>Partly Cloudy</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
