import { AppFooter } from "@/components/app-footer/app-footer";
import { AppHeader } from "@/components/app-header/app-header";
import AppBody from "@/components/app-body/app-body";
import React from "react";

export default function AppRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader />
      <AppBody>{children}</AppBody>
      <AppFooter />
    </>
  );
}
