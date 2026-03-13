"use client";
import Link from "next/link";
import { routes, routesMap } from "@/lib/routes";
import { Krub } from "next/font/google";
import { usePathname } from "next/navigation";
import socialMediaLinks from "@/lib/social-media";
import IconLinks from "@/components/app-header/icon-links";
import React from "react";
import { NavBrand } from "@/components/app-header/app-header";

const krubFont = Krub({ weight: "500", subsets: ["latin"] });

export default function AppNavbar({
  onItemClick,
}: {
  onItemClick?: () => void;
}) {
  const pathName = usePathname();
  const links = () => (
    <ul className="ml-2 flex h-full w-full list-none flex-col items-start md:flex-row md:items-center md:justify-end">
      {routes.map((route, index) => {
        const isActive = pathName === route.path;
        return (
          <li
            key={index}
            className={`mb-2 flex h-full items-center justify-center border-b-[3px] transition-colors md:mx-4 lg:mb-0 ${isActive ? "border-white" : "border-transparent hover:border-primary"}`}
          >
            <Link
              href={route.path}
              className={`${krubFont.className} text-white no-underline`}
              onClick={() => {
                if (onItemClick) onItemClick();
              }}
            >
              {route.name}
            </Link>
          </li>
        );
      })}
      <li className="my-2 lg:my-0 lg:ml-1">
        <RegisterButton />
      </li>
      <li className="my-2 ml-0 mr-2 text-[1.1em] text-white md:ml-6 lg:my-0">
        <IconLinks
          color="white"
          iconClass="h-8 w-8"
          className="flex justify-center gap-2"
          iconData={socialMediaLinks.map((l) => {
            return {
              Icon: l.icon,
              link: l.url,
            };
          })}
        />
      </li>
      <li className="my-2 flex lg:my-0">
        <a
          href="https://www.anandacollegeoba.org/old-boys-association/affiliated-groups/old-anandians-engineers-guild-details/"
          target={"_blank"}
          className="h-10 rounded"
        >
          <img
            className="contain h-full"
            src={"/images/oba.webp"}
            alt={"ananda college oba"}
          />
        </a>
      </li>
    </ul>
  );
  return (
    <nav className="relative flex h-full w-full items-center justify-between bg-transparent px-[5vw] transition-all duration-500 ease-in-out md:h-[var(--navbar-height)]">
      <div className="hidden sm:block">
        <NavBrand />
      </div>
      {links()}
    </nav>
  );
}

export const RegisterButton = ({ cta }: { cta?: string }) => (
  <Link
    target={"_blank"}
    className="flex items-center sm:h-full"
    href={routesMap.register.path}
  >
    <span
      style={{ background: "var(--color-primary-gradient)", color: "black" }}
      className="rounded px-4 py-2 font-semibold uppercase tracking-wide"
    >
      {cta ?? routesMap.register.name}
    </span>
  </Link>
);
