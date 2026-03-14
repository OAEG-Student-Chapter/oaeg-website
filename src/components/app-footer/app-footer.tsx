import socialMediaLinks from "@/lib/social-media";
import { routes } from "@/lib/routes";
import React from "react";
import IconLinks from "@/components/app-header/icon-links";
import textTheme from "@/lib/fonts";
import { organization } from "@/lib/constants";

export const AppFooter = () => {
  return (
    <footer className={`${textTheme.body.className} bg-primary-dark text-white border-t border-white/10`}>
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-4">
          {/* Logo & Info Section - Left */}
          <div className="flex flex-col items-center gap-4 md:col-span-4 md:items-start">
            <div className="flex items-center gap-3">
              <img
                className="h-10 w-10 md:h-20 md:w-20"
                src="/images/logo_oaeg.png"
                alt="OAEG Logo"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight leading-none">
                  {organization.shortName}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1">
                  Old Anandian Engineers&apos; Guild
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Section - Middle */}
          <div className="flex flex-col items-center md:col-span-4 md:items-center">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">Quick Links</h3>
            <nav className="grid grid-cols-3 gap-x-8 gap-y-1 text-sm font-medium text-center">
              {routes.filter((r) => r.name !== "Home").map((route, index) => (
                <a
                  key={index}
                  href={route.path}
                  className="transition-colors hover:text-theme-yellow underline-offset-4 hover:underline"
                >
                  {route.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section - Right */}
          <div className="flex flex-col items-center md:col-span-4 md:items-end">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">Connect With Us</h3>
            <div className="flex gap-4 items-center">
              <IconLinks
                color="white"
                iconData={socialMediaLinks.map((l) => ({
                  Icon: l.icon,
                  link: l.url,
                }))}
                iconSize={"2rem"}
                className="flex justify-center gap-5 md:justify-end"
                iconClass="transition-opacity hover:opacity-70"
              />
            </div>
          </div>
        </div>

        {/* Bottom Credits - Integrated more tightly */}
        <div className="mt-8 border-t border-white/5 pt-4 text-[10px] text-white/30 tracking-widest uppercase md:flex md:items-center md:justify-between">
          <p className="text-center md:text-left">
            Copyright © {new Date().getFullYear()} — {organization.name}
          </p>
          <p className="mt-2 text-center md:mt-0 md:text-right">
            Designed and Developed by <span className="text-white/60">OAEG Student Chapter</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
