import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Aref",
  lastName: "Rezai",
  name: "Aref Rezai",
  role: "Student",
  avatar: "/images/avatar.jpg",
  email: "aref.rezai@gmail.com",
  location: "America/Toronto",
  languages: ["English", "Bahasa"],
};

const newsletter: Newsletter = {
  display: true,
  title: `Subscribe to ${person.firstName}'s Newsletter`,
  description: "My weekly newsletter about creativity and engineering",
};

const social: Social = [
  { name: "GitHub", icon: "github", link: "https://github.com", essential: true },
  { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/", essential: true },
  { name: "Instagram", icon: "instagram", link: "https://www.instagram.com/", essential: false },
  { name: "Threads", icon: "threads", link: "https://www.threads.com/", essential: true },
  { name: "Email", icon: "email", link: `mailto:${person.email}`, essential: true },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "Aref Rezai Portfolio",
  featured: {
    display: false,
    title: "George Brown College – Featured work",
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: "I'm Aref Rezai, Cybersecurity Student at George Brown College. Here, you can find more about my projects and my educational background.",
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: false, link: "https://cal.com" },
  intro: {
    display: true,
    title: "Introduction",
    description:
      "Aref is a Toronto-based IT Technician and aspiring SOC analyst with a passion for transforming complex security challenges into clear, actionable solutions. His work spans network configuration, system troubleshooting, and cybersecurity, with hands-on experience in SIEM tools, incident response, and digital forensics.",
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "DYNEX TECHNOLOGIES",
        timeframe: "Apr 2025 – Aug 2025",
        role: "MATERIAL HANDLER",
        achievements: [
          "Inspected incoming and outgoing goods for quality and quantity against purchase orders and shipping.",
          "Managed and organized inventory for a fast-paced warehouse, collaborating with team members to optimize storage solutions and improve material flow.",
        ],
        images: [
          { src: "", alt: "Project image", width: 16, height: 9 },
        ],
      },
      {
        company: "EasyTech4Business Inc",
        timeframe: "2018 - 2022",
        role: "IT TECHNICIAN",
        achievements: [
          "Configured and optimized network systems, enhancing data transmission efficiency and significantly improving user experience.",
          "Installed, terminated, and tested Ethernet (Cat6) cabling, including RJ45 connectors and keystone jacks, for residential and commercial data/voice networks.",
          "Performed comprehensive hardware and software troubleshooting to diagnose and resolve system issues, ensuring optimal performance and minimal downtime.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      { name: "George Brown College", description: "CYBERSECURITY (POSTGRADUATE CERTIFICATE)" },
      { name: "George Brown College", description: "CLOUD COMPUTING TECHNOLOGIES (POSTGRADUATE CERTIFICATE)" },
      { name: "George Brown College", description: "COMPUTER SYSTEMS TECHNOLOGY (3 YEARS ADVANCED DIPLOMA)" },
    ],
  },
};

const technical = {
  display: true,
  title: "Technical Skills",
  skills: [
    {
      title: "SIEM Tools",
      description: "Experience with Security Information and Event Management (SIEM) tools for monitoring and analyzing security events.",
      tags: [
        { name: "SIEM", icon: "siem" },
        { name: "Splunk", icon: "splunk" },
        { name: "LogRhythm", icon: "logrhythm" },
      ],
      images: [],
    },
    {
      title: "Incident Response and Triage",
      description: "Skilled in incident response processes, triaging alerts, and coordinating remediation actions.",
      tags: [
        { name: "Incident Response", icon: "incident" },
        { name: "Triage", icon: "triage" },
        { name: "Forensics", icon: "forensics" },
      ],
      images: [],
    },
    {
      title: "Malware & Network Attack Analysis",
      description: "Understanding of malware behavior, network attack vectors, and threat analysis techniques.",
      tags: [
        { name: "Malware Analysis", icon: "malware" },
        { name: "Network Security", icon: "network" },
        { name: "Threat Hunting", icon: "threat" },
      ],
      images: [],
    },
    {
      title: "DDoS Attack Concepts",
      description: "Knowledge of Distributed Denial-of-Service (DDoS) attack types, mitigation strategies, and defense techniques.",
      tags: [
        { name: "DDoS", icon: "ddos" },
        { name: "Mitigation", icon: "firewall" },
      ],
      images: [],
    },
    {
      title: "Endpoint Detection & Response (EDR) Tools",
      description: "Experience with EDR solutions for detecting, investigating, and responding to endpoint threats.",
      tags: [
        { name: "EDR", icon: "edr" },
        { name: "CrowdStrike", icon: "crowdstrike" },
        { name: "SentinelOne", icon: "sentinelone" },
      ],
      images: [],
    },
    {
      title: "Web Application Security",
      description: "Understanding of web app vulnerabilities such as SQL Injection, XSS, and secure coding practices.",
      tags: [
        { name: "SQL Injection", icon: "sql" },
        { name: "XSS", icon: "xss" },
        { name: "Secure Coding", icon: "web" },
      ],
      images: [],
    },
    {
      title: "Basic Scripting (Python)",
      description: "Proficient in Python scripting for automating security tasks and analysis.",
      tags: [
        { name: "Python", icon: "python" },
        { name: "Automation", icon: "automation" },
      ],
      images: [],
    },
  ],
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-3.jpg", alt: "image", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, technical, blog, work, gallery };
