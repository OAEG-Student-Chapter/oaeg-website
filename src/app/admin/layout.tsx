import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/sidebar";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="w-full">
         <div className="p-4 border-b">
           <SidebarTrigger />
         </div>
         {children}
      </main>
    </SidebarProvider>
  );
}
