import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Logo from "@/assets/images/logo.svg";
import { useAuthStore } from "@/store/auth";
import { sidebarItems } from "@/router/sidebar";
import { Link } from "react-router";

export const AppSidebar = () => {
  const { user } = useAuthStore();

  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className=" text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    Municipalidad Local
                  </span>
                  <span className="truncate text-xs">Administrador</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: user?.displayName || "Usuario Ejemplo",
            email: user?.email || "usuario@example.com",
            avatar: user?.photoURL || "/avatars/default.jpg",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
};
