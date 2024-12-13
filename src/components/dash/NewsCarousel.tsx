"use client";

import * as React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const news = [
  {
    title: "New Roller Coaster Opening Next Month!",
    content: "Get ready for the ride of your life!",
  },
  {
    title: "Summer Festival Dates Announced",
    content: "Join us for music, food, and fun under the stars.",
  },
  {
    title: "Special Discount for Students",
    content: "Show your student ID for 20% off admission.",
  },
];

export function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length);
  };

  return (
    <Card className="relative p-4">
      <CardTitle>Marketing News</CardTitle>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">
          {news[currentIndex].title}
        </h3>
        <p>{news[currentIndex].content}</p>
      </CardContent>
      <div className="absolute bottom-2 right-2 flex space-x-2 mt-5">
        <Button size="icon" variant="outline" onClick={prevSlide}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="outline" onClick={nextSlide}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
