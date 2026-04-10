
"use client"

import React from "react"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { useTranslation } from "react-i18next";
import { Bell, UserCircle } from "lucide-react"

const Navbar = () => {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div
      className="border-b mt-6"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        padding: "0 40px",
        alignItems: "center",
      }}
    >
      <SidebarTrigger />

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <select
          onChange={handleLanguageChange}
          defaultValue="en"
          className="border rounded px-2 py-1"
          title="Select language"
          style={{fontSize: "14px", backgroundColor: "transparent", border: "none" ,   padding: "0px", outline:" none" }}
          
        >
          <option value="en">English</option>
          <option value="es">Español (México)</option>
          <option value="fr">Français</option>
        </select>

        <button
    className="p-2 rounded-md hover:bg-gray-100 transition"
    title={t("notifications")}
  >
    <Bell className="h-5 w-5" />
  </button>

  <button
    className="p-2 rounded-md hover:bg-gray-100 transition"
    title={t("user")}
  >
    <UserCircle className="h-5 w-5" />
  </button>
      </div>
    </div>
  )
}

export default Navbar