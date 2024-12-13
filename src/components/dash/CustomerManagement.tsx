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
import { Pencil, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type PassType = "Normal" | "Premium" | "Special";

interface Customer {
  id: string;
  name: string;
  attractions: string[];
  hotel: string;
  arrival: string;
  departure: string;
  pass: PassType;
}

const PASS_TYPES: PassType[] = ["Normal", "Premium", "Special"];

export function CustomerManagement() {
  const [customers, setCustomers] = React.useState<Customer[]>([
    {
      id: "001",
      name: "John Doe",
      attractions: ["Cosmic Coaster", "Splash Mountain"],
      hotel: "Magic Castle Inn",
      arrival: "2023-07-01",
      departure: "2023-07-05",
      pass: "Normal",
    },
    {
      id: "002",
      name: "Jane Smith",
      attractions: ["Haunted Mansion", "Fairy Tale Forest", "Cosmic Coaster"],
      hotel: "Enchanted Woods Lodge",
      arrival: "2023-07-03",
      departure: "2023-07-07",
      pass: "Premium",
    },
  ]);

  const [isOpen, setIsOpen] = React.useState(false);
  const [editingCustomer, setEditingCustomer] = React.useState<Customer | null>(
    null
  );

  const handleCreateCustomer = (newCustomer: Customer) => {
    setCustomers([...customers, { ...newCustomer, id: Date.now().toString() }]);
    setIsOpen(false);
  };

  const handleUpdateCustomer = (updatedCustomer: Customer) => {
    setCustomers(
      customers.map((c) => (c.id === updatedCustomer.id ? updatedCustomer : c))
    );
    setIsOpen(false);
    setEditingCustomer(null);
  };

  const handleDeleteCustomer = (id: string) => {
    setCustomers(customers.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Customer Management</h2>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingCustomer(null)}>
              Add New Customer
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <CustomerForm
              customer={editingCustomer}
              onSubmit={
                editingCustomer ? handleUpdateCustomer : handleCreateCustomer
              }
              onCancel={() => {
                setIsOpen(false);
                setEditingCustomer(null);
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
              <TableHead>Attractions</TableHead>
              <TableHead>Hotel</TableHead>
              <TableHead>Arrival</TableHead>
              <TableHead>Departure</TableHead>
              <TableHead>Pass</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.attractions.join(", ")}</TableCell>
                <TableCell>{customer.hotel}</TableCell>
                <TableCell>{customer.arrival}</TableCell>
                <TableCell>{customer.departure}</TableCell>
                <TableCell>{customer.pass}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => {
                        setEditingCustomer(customer);
                        setIsOpen(true);
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => handleDeleteCustomer(customer.id)}
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

interface CustomerFormProps {
  customer: Customer | null;
  onSubmit: (customer: Customer) => void;
  onCancel: () => void;
}

function CustomerForm({ customer, onSubmit, onCancel }: CustomerFormProps) {
  const [formData, setFormData] = React.useState<Customer>(
    customer || {
      id: "",
      name: "",
      attractions: [],
      hotel: "",
      arrival: "",
      departure: "",
      pass: "Normal",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAttractionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const attractions = e.target.value
      .split(",")
      .map((a) => a.trim())
      .filter((a) => a !== "");
    setFormData((prev) => ({ ...prev, attractions: attractions.slice(0, 10) }));
  };

  const handlePassChange = (value: PassType) => {
    setFormData((prev) => ({ ...prev, pass: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>
          {customer ? "Edit Customer" : "Add New Customer"}
        </DialogTitle>
        <DialogDescription>
          {customer
            ? "Edit the customer details below."
            : "Enter the details for the new customer."}
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
          <Label htmlFor="attractions" className="text-right">
            Attractions (up to 10)
          </Label>
          <Input
            id="attractions"
            name="attractions"
            value={formData.attractions.join(", ")}
            onChange={handleAttractionsChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="hotel" className="text-right">
            Hotel
          </Label>
          <Input
            id="hotel"
            name="hotel"
            value={formData.hotel}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="arrival" className="text-right">
            Arrival
          </Label>
          <Input
            id="arrival"
            name="arrival"
            type="date"
            value={formData.arrival}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="departure" className="text-right">
            Departure
          </Label>
          <Input
            id="departure"
            name="departure"
            type="date"
            value={formData.departure}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="pass" className="text-right">
            Pass Type
          </Label>
          <Select onValueChange={handlePassChange} value={formData.pass}>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Select a pass type" />
            </SelectTrigger>
            <SelectContent>
              {PASS_TYPES.map((passType) => (
                <SelectItem key={passType} value={passType}>
                  {passType}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <DialogFooter>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">{customer ? "Update" : "Create"}</Button>
      </DialogFooter>
    </form>
  );
}
