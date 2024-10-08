import UiIcon from "../assets/icons/ui-ux.png";
import WebIcon from "../assets/icons/web-design.png";
import AppIcon from "../assets/icons/app-design.png";
import GraphicDesignIcon from "../assets/icons/graphic-design.png";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import FacebookIcon from "../assets/icons/Facebook.png";
import TwitterIcon from "../assets/icons/Twitter.png";
import InstagramIcon from "../assets/icons/Instagram.png";
import LinkedInIcon from "../assets/icons/LinkedIn.png";

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
    text: "All",
  },
  {
    text: "UI/UX",
  },
  {
    text: "Web Design",
  },
  {
    text: "App Design",
  },
  {
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
];
