import express from "../assets/express.png"
import string from "../assets/no-strings.png"
import mag from "../assets/mag.png"
import dash from "../assets/dash.png"
import {faEnvelope, faTools, faFolder, faChartBar, faPhone} from "@fortawesome/free-solid-svg-icons"

export const NAV_ITEMS = [
    {href: "#hero", label: "Hero", icon: faEnvelope},
    {href: "#skills", label: "Skills", icon: faTools},
    {href: "#projects", label: "Projects", icon: faFolder},
    {href: '#experiences', label: "Experiences", icon: faChartBar},
    {href: "#contact", label: "Contact", icon: faPhone},
]

export const CARD_ITEMS = [
    {title: "Languages", description: "JAVASCRIPT, TYPESCRIPT, PYTHON, SQL", icon: "code"},
    {title: "Frontend", description: "REACT, NEXT.JS, TAILWIND CSS, THREE.js", icon: "monitor"},
    {title: "Backend", description: "NODE.JS, POSTGRESQL, SUPABASE, FIREBASE", icon: "server"},
    {title: "Data Analysis", description: "PANDAS, NUMPY, TABLEAU, POWER BI", icon: "bar-chart-2"},
    {title: "Design Tools", description: "FIGMA, ADOBE SUITE, CANVA", icon: "pen-tool"},
    {title: "AI & Productivity", description: "LLM PROMPTING, GITHUB COPILOT, SLACK", icon: "cpu"},
    {title: "Low-Code/No-Code", description: "WEBFLOW, BUBBLE, ADALO", icon: "settings"},
    {title: "Publishing", description: "INDESIGN, BOOK FORMATTING, DIGITAL, DISTRO", icon: "book"},
]

export const WORKS_ITEMS = [
    {title: "DataVis Analytics", description: "A high-performance 3D dashboard for real-time traffic monitoring and analysis", tools: "REACT THREE, THREE FIBER, SUPABASE", image: dash},
    {title: "DigitAll Books", description: "Reimagining digital literacy and access for West African learners.", tools: "EDUCATIONAL PLATFORM", image: express},
    {title: "XpressExams", description: "Educational mobile app, with access to online tutorials, CBT and Live functions", tools: "MOBILE & CONSUMER", image: string},
    {title: "The Editorial Archive", description: "A showcase of over 50+ book covers and branding identities designed for regional authors.", tools: "PUBLISHING, ADOBE SUITE", image: mag},
]

export const EXPERIENCE_ITEMS = [
    {title: "Creative Director & Full-Stack Developer", sub: "SIGN DIGITALL WORLD / DIGITALL BOOKS", description: "Leading end-to-end development of digital publishing platforms and educational tools, Architecting scalable database structures for high-traffic content management., Mentoring junior developers and designers in best practices for UI/UX", year: "2018 - Present"},
    {title: "Lead Operations & Tech Strategist", sub: "THE GIRL FROM IPANEMA CAFE", description: "Modernized inventory and POS system through custom internal tools., Developed digital marketing strategies that increases customer engagement by 40%", year: "2012 - 2018"},
    {title: "Technical Analys", sub: "LEGACY SYSTEMS CORP", description: "Early-career focus on data migration -system maintenance -and frontend optimization", year: "2008 - 2012"}
]