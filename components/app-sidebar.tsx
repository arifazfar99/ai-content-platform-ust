"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import {
  Box,
  Briefcase,
  Calendar,
  Command,
  LayoutDashboard,
  Lightbulb,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Content Generator",
    url: "/content-generator",
    icon: Lightbulb,
  },
  {
    title: "Brand",
    url: "/brand",
    icon: Briefcase,
  },
  {
    title: "Products",
    url: "/products",
    icon: Box,
  },
  {
    title: "Contents",
    url: "/contents",
    icon: Calendar,
  },
  {
    title: "Social Channels",
    url: "/social-channels",
    icon: Share2,
  },
];

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size={"lg"} asChild>
              <Link href={"#"}>
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">UST Global</span>
                  <span className="truncate text-xs">AI Content Platform</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button onClick={handleLogout}>Logout</Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
