import { useLocation } from "react-router";
import { sidebarItems } from "@/router/sidebar";

type BreadcrumbItem = {
  title: string;
  href?: string;
};

export const useBreadcrumbs = (): BreadcrumbItem[] => {
  const location = useLocation();

  const breadcrumbs: BreadcrumbItem[] = [{ title: "Inicio", href: "/" }];

  const currentItem = sidebarItems.find((item) =>
    location.pathname.startsWith(item.url)
  );

  if (currentItem) {
    breadcrumbs.push({
      title: currentItem.title,
      href: currentItem.url,
    });
  }

  const pathSegments = location.pathname.split("/").filter(Boolean);
  if (pathSegments.length > 1) {
    const lastSegment = pathSegments[pathSegments.length - 1];
    if (lastSegment === "edit") {
      breadcrumbs.push({ title: "Editar" });
    } else if (lastSegment === "create") {
      breadcrumbs.push({ title: "Crear" });
    } else if (!isNaN(Number(lastSegment))) {
      breadcrumbs.push({ title: "Detalle" });
    }
  }

  return breadcrumbs;
};
