import UiIcon from "../assets/icons/ui-ux.png";
import WebIcon from "../assets/icons/web-design.png";
import AppIcon from "../assets/icons/app-design.png";
import GraphicDesignIcon from "../assets/icons/graphic-design.png";
import Project1 from "../assets/project1.webp";
import Project2 from "../assets/project2.webp";
import Project3 from "../assets/project3.webp";
import Project4 from "../assets/project4.webp";
import Project5 from "../assets/project5.webp";
import Project6 from "../assets/project6.webp";
import Project7 from "../assets/project7.webp";
import Project8 from "../assets/project8.webp";
import Project9 from "../assets/project9.webp";
import FacebookIcon from "../assets/icons/Facebook.png";
import TwitterIcon from "../assets/icons/Twitter.png";
import InstagramIcon from "../assets/icons/Instagram.png";
import LinkedInIcon from "../assets/icons/LinkedIn.png";
import Profile1 from "../assets/profile1.jpeg";
import Profile2 from "../assets/profile2.jpeg";
import Profile3 from "../assets/profile3.webp";
import Profile4 from "../assets/profile4.webp";

export const navLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About Me",
    href: "#about-me",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const services = [
  {
    logo: UiIcon,
    title: "UI/UX",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    logo: WebIcon,
    title: "Web Design ",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    logo: AppIcon,
    title: "App Design",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    logo: GraphicDesignIcon,
    title: "Graphic Design ",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
];

export const socialLinks = [
  {
    logo: FacebookIcon,
    url: "https://www.facebook.com/nowshadbroo",
  },
  {
    logo: TwitterIcon,
    url: "https://x.com/Noushad_xaman",
  },
  {
    logo: InstagramIcon,
    url: "https://www.instagram.com/noushad_ozi",
  },
  {
    logo: LinkedInIcon,
    url: "https://www.linkedin.com/in/noushadzaman/",
  },
];

export const projectCategories = [
  {
    id: 0,
    text: "All",
  },
  {
    id: 1,
    text: "Web Design",
  },
  {
    id: 2,
    text: "UI/UX",
  },
  {
    id: 3,
    text: "App Design",
  },
  {
    id: 4,
    text: "Graphic Design",
  },
];

export const projects = [
  {
    name: "AirCalling Landing Page Design",
    category: "Web Design",
    img: Project1,
    imgHeight: 4096,
    imgWidth: 1212,
  },
  {
    name: "Business Landing Page Design",
    category: "Web Design",
    img: Project2,
    imgHeight: 4096,
    imgWidth: 720,
  },
  {
    name: "Ecom Web Page Design",
    category: "Web Design",
    img: Project3,
    imgHeight: 4096,
    imgWidth: 831,
  },
  {
    name: "Mobile App UI Design",
    category: "App Design",
    img: Project4,
    imgHeight: 4096,
    imgWidth: 725,
  },
  {
    name: "Portfolio Website Design",
    category: "UI/UX",
    img: Project5,
    imgHeight: 4096,
    imgWidth: 720,
  },
  {
    name: "E-commerce Mobile App Design",
    category: "App Design",
    img: Project6,
    imgHeight: 4096,
    imgWidth: 1010,
  },
  {
    name: "Landing Page for Startup",
    category: "App Design",
    img: Project7,
    imgHeight: 1200,
    imgWidth: 418,
  },
  {
    name: "Corporate Website Design",
    category: "Graphic Design",
    img: Project8,
    imgHeight: 2775,
    imgWidth: 1400,
  },
  {
    name: "Social Media App Design",
    category: "App Design",
    img: Project9,
    imgHeight: 4096,
    imgWidth: 1097,
  },
];

export const testimonials = [
  {
    name: "Alice Johnson",
    designation: "Founder & Creative Director",
    img: Profile1,
    review:
      "Working with this designer transformed our brand identity. Their attention to detail and creative vision brought our ideas to life.",
  },
  {
    name: "Michael Smith",
    designation: "CTO",
    img: Profile2,
    review:
      "An exceptional experience! The team delivered a user-friendly app that exceeded our expectations and delighted our users.",
  },
  {
    name: "Emma Brown",
    designation: "Marketing Manager",
    img: Profile3,
    review:
      "Their design process is truly collaborative. We felt involved at every step, and the final product perfectly aligned with our goals.",
  },
  {
    name: "David Wilson",
    designation: "Product Owner",
    img: Profile4,
    review:
      "Highly recommend! The designs are not only visually stunning but also functional, enhancing our users' overall experience.",
  },
];
