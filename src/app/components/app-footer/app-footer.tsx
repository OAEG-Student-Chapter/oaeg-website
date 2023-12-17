import Image from "next/image";
import styles from "./app-footer.module.css";
import socialMediaLinks, {facebook, linkedIn} from "@/lib/social-media";
import {routes} from "@/lib/routes";
import React from "react";
import Link from "next/link";
import IconLinks from "@/app/components/app-header/icon-links";

export const AppFooter = () => {
  return (
    <div className={styles.main}>
      <footer className="glass [--glass-reflex-opacity:0] footer footer-center p-5 rounded" style={{rowGap:"2rem"}}>
        <nav className="grid grid-flow-col gap-4">
          {routes.map((route) => (
              <a className="link link-hover" href={route.path}>{route.name}</a>
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
          />
        <aside>
          <p>Copyright © 2023 - All right reserved by OAEG | Designed and Developed by OAEG Student Chapter</p>
        </aside>
      </footer>
    </div>
  );
};
