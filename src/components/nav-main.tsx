"use client";

import { type LucideIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <DropdownMenu key={item.title}>
            <Link href={item.url}>
              <SidebarMenuItem>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                    {item.title} <DotsHorizontalIcon className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                {item.items?.length ? (
                  <DropdownMenuContent
                    side={isMobile ? "bottom" : "right"}
                    align={isMobile ? "end" : "start"}
                    className="min-w-56 rounded-lg"
                  >
                    {item.items.map((item) => (
                      <DropdownMenuItem asChild key={item.title}>
                        <Link href={item.url}>{item.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                ) : null}
              </SidebarMenuItem>
            </Link>
          </DropdownMenu>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
