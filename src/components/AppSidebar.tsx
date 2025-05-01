
import { Activity, FileText, BookOpen } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Navigation items.
const navItems = [
  {
    title: "Dashboard",
    path: "/app",
    icon: Activity,
    end: true,
  },
  {
    title: "Job Posting",
    path: "/app/job-posting",
    icon: FileText,
  },
  {
    title: "Course",
    path: "/app/course",
    icon: BookOpen,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <div className="flex h-14 items-center border-b px-4">
        <SidebarTrigger />
        <span className="ml-2 font-semibold text-lg">vibeChecks</span>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.path}
                      end={item.end}
                      className={({ isActive }) =>
                        isActive ? "text-vibe-purple" : "text-muted-foreground hover:text-foreground"
                      }
                    >
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
