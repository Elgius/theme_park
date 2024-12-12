"use client";

import React, { createContext, useContext } from "react";
import { cn } from "@/lib/utils";

type BookingFormProps = {
  title: string;
  subtitle: string;
  links: { href: string; label: string }[];
};

type BookingFormContextProps = BookingFormProps;

const BookingFormContext = createContext<BookingFormContextProps | null>(null);

function useBookingForm() {
  const context = useContext(BookingFormContext);

  if (!context) {
    throw new Error("useBookingForm must be used within a <BookingForm />");
  }

  return context;
}

const BookingForm = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & BookingFormProps>(
  ({ title, subtitle, links, className, children, ...props }, ref) => {
    return (
      <BookingFormContext.Provider value={{ title, subtitle, links }}>
        <div ref={ref} className={cn("max-w-4xl mx-auto py-6", className)} {...props}>
          {children}
        </div>
      </BookingFormContext.Provider>
    );
  }
);
BookingForm.displayName = "BookingForm";

const BookingFormHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { title, subtitle } = useBookingForm();

    return (
      <header ref={ref} className={cn("flex items-center mb-6 mt-3", className)} {...props}>
        <h1 className="text-2xl font-bold">{title}</h1>
        <span className="ml-auto text-gray-500">{subtitle}</span>
      </header>
    );
  }
);
BookingFormHeader.displayName = "BookingFormHeader";

const BookingFormSidebar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { height?: string }>(
  ({ className, height = "h-[600px]", ...props }, ref) => {
    const { links } = useBookingForm();

    return (
      <div
        ref={ref}
        className={cn(`bg-violet-50 p-10 ${height} flex flex-col justify-center space-y-9 `, className)}
        {...props}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="block text-slate-400 hover:text-black transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    );
  }
);
BookingFormSidebar.displayName = "BookingFormSidebar";

const BookingFormContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(` md:col-span-4  h-[600px] overflow-y-auto shadow`, className)}
        {...props}
      />
    );
  }
);
BookingFormContent.displayName = "BookingFormContent";

export { BookingForm, BookingFormHeader, BookingFormSidebar, BookingFormContent };
