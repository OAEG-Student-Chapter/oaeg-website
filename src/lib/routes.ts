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
  path: "/projects/",
  name: "Projects",
};

const gallery: route = {
  path: "/gallery/",
  name: "Gallery"
};

const news: route = {
    path: "/news",
    name: "News",
};

const blog: route = {
  path: "/blog",
  name: "Blog",
};

const team: route = {
  path: "/exco",
  name: "EXCO",
};

const register: route = {
    path: "https://docs.google.com/document/d/1sn1BjEnYY3f6AMLsA7lB2gCL6ge5xTnG/edit?usp=sharing&ouid=110892561269839592164&rtpof=true&sd=true",
    name: "Become A Member"
};

export const routes:route[] = [home, projects, gallery, team, contactUs, news, blog];

export const routesMap = {
  home,
  projects,
  gallery,
  team,
  contactUs,
  news,
  blog,
  register
};
