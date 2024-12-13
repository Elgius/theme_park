"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
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
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Trash2 } from "lucide-react";

interface RoomType {
  type: string;
  price: number;
}

interface Hotel {
  id: string;
  name: string;
  description: string;
  location: string;
  availableRooms: number;
  bookedRooms: number;
  roomTypes: RoomType[];
  openingHour: string;
  closingHour: string;
}

export function HotelManagement() {
  const [hotels, setHotels] = React.useState<Hotel[]>([
    {
      id: "001",
      name: "Magic Castle Inn",
      description: "A magical hotel with enchanted rooms",
      location: "Fantasyland",
      availableRooms: 50,
      bookedRooms: 30,
      roomTypes: [
        { type: "Standard", price: 100 },
        { type: "Deluxe", price: 200 },
        { type: "Suite", price: 300 },
      ],
      openingHour: "08:00",
      closingHour: "22:00",
    },
    {
      id: "002",
      name: "Futuristic Space Hotel",
      description: "Experience the future of hospitality",
      location: "Tomorrowland",
      availableRooms: 75,
      bookedRooms: 45,
      roomTypes: [
        { type: "Pod", price: 150 },
        { type: "Luxury Pod", price: 250 },
        { type: "Space Suite", price: 400 },
      ],
      openingHour: "00:00",
      closingHour: "23:59",
    },
  ]);

  const [isOpen, setIsOpen] = React.useState(false);
  const [editingHotel, setEditingHotel] = React.useState<Hotel | null>(null);

  const handleCreateHotel = (newHotel: Hotel) => {
    setHotels([...hotels, { ...newHotel, id: Date.now().toString() }]);
    setIsOpen(false);
  };

  const handleUpdateHotel = (updatedHotel: Hotel) => {
    setHotels(hotels.map((h) => (h.id === updatedHotel.id ? updatedHotel : h)));
    setIsOpen(false);
    setEditingHotel(null);
  };

  const handleDeleteHotel = (id: string) => {
    setHotels(hotels.filter((h) => h.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Hotel Management</h2>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingHotel(null)}>Add New Hotel</Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <HotelForm
              hotel={editingHotel}
              onSubmit={editingHotel ? handleUpdateHotel : handleCreateHotel}
              onCancel={() => {
                setIsOpen(false);
                setEditingHotel(null);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Available Rooms</TableHead>
              <TableHead>Booked Rooms</TableHead>
              <TableHead>Room Types + Prices</TableHead>
              <TableHead>Opening Hours</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hotels.map((hotel) => (
              <TableRow key={hotel.id}>
                <TableCell>{hotel.id}</TableCell>
                <TableCell>{hotel.name}</TableCell>
                <TableCell>{hotel.description}</TableCell>
                <TableCell>{hotel.location}</TableCell>
                <TableCell>{hotel.availableRooms}</TableCell>
                <TableCell>{hotel.bookedRooms}</TableCell>
                <TableCell>
                  {hotel.roomTypes.map((room, index) => (
                    <div key={index}>{`${room.type}: $${room.price}`}</div>
                  ))}
                </TableCell>
                <TableCell>{`${hotel.openingHour} - ${hotel.closingHour}`}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => {
                        setEditingHotel(hotel);
                        setIsOpen(true);
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => handleDeleteHotel(hotel.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

interface HotelFormProps {
  hotel: Hotel | null;
  onSubmit: (hotel: Hotel) => void;
  onCancel: () => void;
}

function HotelForm({ hotel, onSubmit, onCancel }: HotelFormProps) {
  const [formData, setFormData] = React.useState<Hotel>(
    hotel || {
      id: "",
      name: "",
      description: "",
      location: "",
      availableRooms: 0,
      bookedRooms: 0,
      roomTypes: [{ type: "", price: 0 }],
      openingHour: "",
      closingHour: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: parseInt(value) || 0 }));
  };

  const handleRoomTypeChange = (
    index: number,
    field: "type" | "price",
    value: string
  ) => {
    const newRoomTypes = [...formData.roomTypes];
    if (field === "type") {
      newRoomTypes[index].type = value;
    } else {
      newRoomTypes[index].price = parseFloat(value) || 0;
    }
    setFormData((prev) => ({ ...prev, roomTypes: newRoomTypes }));
  };

  const addRoomType = () => {
    setFormData((prev) => ({
      ...prev,
      roomTypes: [...prev.roomTypes, { type: "", price: 0 }],
    }));
  };

  const removeRoomType = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      roomTypes: prev.roomTypes.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>{hotel ? "Edit Hotel" : "Add New Hotel"}</DialogTitle>
        <DialogDescription>
          {hotel
            ? "Edit the hotel details below."
            : "Enter the details for the new hotel."}
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Description
          </Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="location" className="text-right">
            Location
          </Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="availableRooms" className="text-right">
            Available Rooms
          </Label>
          <Input
            id="availableRooms"
            name="availableRooms"
            type="number"
            value={formData.availableRooms}
            onChange={handleNumberChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="bookedRooms" className="text-right">
            Booked Rooms
          </Label>
          <Input
            id="bookedRooms"
            name="bookedRooms"
            type="number"
            value={formData.bookedRooms}
            onChange={handleNumberChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right">Room Types</Label>
          <div className="col-span-3 space-y-2">
            {formData.roomTypes.map((roomType, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  placeholder="Room Type"
                  value={roomType.type}
                  onChange={(e) =>
                    handleRoomTypeChange(index, "type", e.target.value)
                  }
                />
                <Input
                  type="number"
                  placeholder="Price"
                  value={roomType.price}
                  onChange={(e) =>
                    handleRoomTypeChange(index, "price", e.target.value)
                  }
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => removeRoomType(index)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addRoomType}>
              Add Room Type
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="openingHour" className="text-right">
            Opening Hour
          </Label>
          <Input
            id="openingHour"
            name="openingHour"
            type="time"
            value={formData.openingHour}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="closingHour" className="text-right">
            Closing Hour
          </Label>
          <Input
            id="closingHour"
            name="closingHour"
            type="time"
            value={formData.closingHour}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">{hotel ? "Update" : "Create"}</Button>
      </DialogFooter>
    </form>
  );
}
