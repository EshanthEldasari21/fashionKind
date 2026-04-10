"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"

import {
  LayoutDashboard,
  Inbox,
  Truck,
  Warehouse,
  Wallet,
  FileText,
  CreditCard,
  Boxes,
  Headset,
} from "lucide-react"

const AppSidebar = () => {
  const { t } = useTranslation()
  const pathname = usePathname()

  const menuItems = [
    {
      title: t("sidebarOverview"),
      icon: LayoutDashboard,
      href: "/overview",
    },
    {
      title: t("sidebarInbox"),
      icon: Inbox,
      href: "/inbox",
    },
    {
      title: t("sidebarFulfillment"),
      icon: Truck,
      href: "/fulfillment-logistics",
    },
    {
      title: t("sidebarWarehouse"),
      icon: Warehouse,
      href: "/warehouse-receiving",
    },
    {
      title: t("sidebarOrders"),
      icon: Wallet,
      href: "/orders-payouts",
    },
    {
      title: t("sidebarDocuments"),
      icon: FileText,
      href: "/documents",
    },
    {
      title: t("sidebarBilling"),
      icon: CreditCard,
      href: "/billing",
    },
    {
      title: t("sidebarModules"),
      icon: Boxes,
      href: "/modules",
    },
    {
      title: t("sidebarCareTeam"),
      icon: Headset,
      href: "/care-team",
    },
  ]

  return (
    <Sidebar style={{backgroundColor: "#EDE9E3"}}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="pt-6">
            <h2 className="text-lg font-bold" style={{color: "#1C1C1C"}}>NewCo</h2>
          </SidebarGroupLabel>

          <SidebarMenu className="pt-6">
            <p className="text-xs text-muted-foreground px-2 py-2">
              {t("platform")}
            </p>

            {menuItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <SidebarMenuItem key={item.title}>
                  <Link href={item.href}>
                   <SidebarMenuButton
  className={`w-full ${
    isActive
      ? "bg-[#EDE9E3] text-[#BE832B]"
      : "text-muted-foreground hover:bg-gray-100"
  } flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors
  }`}
>
  <item.icon className="h-4 w-4" />
  <span>{item.title}</span>
</SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar