import socialMediaLinks from "@/lib/social-media";
import { routes } from "@/lib/routes";
import React from "react";
import IconLinks from "@/components/app-header/icon-links";

export const AppFooter = () => {
  return (
    <div className="bg-primary-dark text-white font-['Poppins']">
      <footer className="glass [--glass-reflex-opacity:0]
        footer footer-center p-5 gap-8 bg-transparent">
        <div className="grid gap-4">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {routes.map((route, index) => (
              <a className="link link-hover text-white no-underline" key={index} href={route.path}>{route.name}</a>
            ))}
          </nav>
          <IconLinks
            color="white"
            iconData={socialMediaLinks.map(l => {
              return {
                Icon: l.icon,
                link: l.url
              }
            })}
            iconSize={'1.5rem'}
            className="flex justify-center gap-4"
          />
          <aside>
            <p>Copyright © 2023 - All right reserved by OAEG | Designed and Developed by OAEG Student Chapter</p>
          </aside>
        </div>
      </footer>
    </div>
  );
};
