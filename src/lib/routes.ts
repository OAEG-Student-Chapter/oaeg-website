interface route {
  path: string;
  name: string;
}

const home: route = {
  path: "/",
  name: "Home",
};

const aboutUs: route = {
  path: "/about-us",
  name: "About Us",
};

const contactUs: route = {
  path: "/contact-us",
  name: "Contact Us",
};

const projects: route = {
  path: "/projects",
  name: "Projects",
};

const blog: route = {
  path: "/blog",
  name: "Blog",
};

const team: route = {
  path: "/team",
  name: "Board of Officials",
};

export const runtime = "edge";

export const routes = [home, aboutUs, projects, team, blog, contactUs];

export const routesMap = {
  home,
  aboutUs,
  projects,
  team,
  blog,
  contactUs,
};
