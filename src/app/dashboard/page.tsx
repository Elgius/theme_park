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
import { HeroSection } from "@/components/dash/HeroSection";
import { AttractionsGrid } from "@/components/dash/AttractionsGrid";
import { WeatherWidget } from "@/components/dash/WeatherWidget";
import { TicketBooking } from "@/components/dash/TicketBooking";
import { NewsCarousel } from "@/components/dash/NewsCarousel";

export default function Page() {
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
                <BreadcrumbLink href="#">Themepark</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage> Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className="p-4 space-y-6">
          <HeroSection />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Popular Attractions</h2>
              <AttractionsGrid />
            </div>
            <div className="space-y-6">
              <WeatherWidget />
              <TicketBooking />
              <NewsCarousel />
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
