import socialMediaLinks from "@/lib/social-media";
import { routes } from "@/lib/routes";
import React from "react";
import IconLinks from "@/components/app-header/icon-links";
import textTheme from "@/lib/fonts";
import { organization } from "@/lib/constants";

export const AppFooter = () => {
  return (
    <footer className={`${textTheme.body.className} bg-primary-dark text-white border-t border-white/10`}>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start md:gap-4">
          {/* Logo & Name Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <img
                className="h-12 w-12 brightness-0 invert"
                src="/images/logo_oaeg.png"
                alt="OAEG Logo"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-none">
                  {organization.shortName}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1">
                  Old Anandian Engineers' Guild
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
            {routes.map((route, index) => (
              <a
                key={index}
                href={route.path}
                className="transition-colors hover:text-theme-yellow underline-offset-4 hover:underline"
              >
                {route.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <IconLinks
              color="white"
              iconData={socialMediaLinks.map((l) => ({
                Icon: l.icon,
                link: l.url,
              }))}
              iconSize={"1.25rem"}
              className="flex justify-center gap-6"
              iconClass="transition-opacity hover:opacity-70"
            />
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-[11px] text-white/40 tracking-wide uppercase">
          <p>
            Copyright © {new Date().getFullYear()} — {organization.name}
          </p>
          <p className="mt-2">
            Designed and Developed by <span className="text-white/60">OAEG Student Chapter</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
