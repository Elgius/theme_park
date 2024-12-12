"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface Sevents {
  id: number;
  name: string;
  title: string;
  age: string;
  description: string;
  family_offers: boolean;
  price: string;
  event_id: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Sevents[]>([]);
  const [currentEvent, setCurrentEvent] = useState<Sevents | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addEvent = (event: Omit<Sevents, "id">) => {
    const newEvent = { ...event, id: Date.now() };
    setEvents([...events, newEvent]);
    setIsDialogOpen(false);
  };

  const updateEvent = (updatedEvent: Sevents) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    setIsDialogOpen(false);
  };

  const deleteEvent = (id: number) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const openEditDialog = (event: Sevents) => {
    setCurrentEvent(event);
    setIsDialogOpen(true);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Events</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Events</h1>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => setCurrentEvent(null)}>Add Event</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {currentEvent ? "Edit Event" : "Add New Event"}
                  </DialogTitle>
                </DialogHeader>
                <EventForm
                  event={currentEvent}
                  onSubmit={(eventData) => {
                    if (currentEvent) {
                      updateEvent({ ...eventData, id: currentEvent.id });
                    } else {
                      addEvent(eventData);
                    }
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Family Offers</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Event ID</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.name}</TableCell>
                  <TableCell>{event.title}</TableCell>
                  <TableCell>{event.age}</TableCell>
                  <TableCell>{event.description}</TableCell>
                  <TableCell>{event.family_offers ? "Yes" : "No"}</TableCell>
                  <TableCell>{event.price}</TableCell>
                  <TableCell>{event.event_id}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      className="mr-2"
                      onClick={() => openEditDialog(event)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => deleteEvent(event.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

function EventForm({
  event,
  onSubmit,
}: {
  event: Sevents | null;
  onSubmit: (event: Omit<Sevents, "id">) => void;
}) {
  const [name, setName] = useState(event?.name || "");
  const [title, setTitle] = useState(event?.title || "");
  const [age, setAge] = useState(event?.age || "");
  const [description, setDescription] = useState(event?.description || "");
  const [familyOffers, setFamilyOffers] = useState(
    event?.family_offers || false
  );
  const [price, setPrice] = useState(event?.price || "");
  const [eventId, setEventId] = useState(event?.event_id || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      title,
      age,
      description,
      family_offers: familyOffers,
      price,
      event_id: eventId,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="title" className="text-right">
            Title
          </Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="age" className="text-right">
            Age
          </Label>
          <Input
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Description
          </Label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="family_offers" className="text-right">
            Family Offers
          </Label>
          <Checkbox
            id="family_offers"
            checked={familyOffers}
            onCheckedChange={(checked) => setFamilyOffers(checked as boolean)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="price" className="text-right">
            Price
          </Label>
          <Input
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="event_id" className="text-right">
            Event ID
          </Label>
          <Input
            id="event_id"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">{event ? "Update Event" : "Add Event"}</Button>
      </DialogFooter>
    </form>
  );
}
