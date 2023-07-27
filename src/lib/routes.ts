interface route {
    path: string;
    name: string;
}

const home: route = {
    path: '/',
    name: 'Home',
}

const aboutUs: route = {
    path: '/about-us',
    name: 'About Us',
}

const contactUs: route = {
    path: '/contact-us',
    name: 'Contact Us',
}

const projects: route = {
    path:'/projects',
    name:'Projects'
}

const blog: route = {
    path:'/blog',
    name:'Blog'
}

export const routes = [
    home,
    aboutUs,
    projects,
    blog,
    contactUs,
]