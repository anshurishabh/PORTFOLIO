import type { IconType } from "react-icons";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiFramer,
  SiVercel,
  SiFirebase,
  SiGooglecloud,
  SiPandas,
  SiPytorch,
  SiSocketdotio,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import { Database, Sparkles, TrendingUp, Video, Binary } from "lucide-react";

export interface Skill {
  name: string;
  icon: IconType | typeof Database;
  color: string; // hex used to tint the icon
}

// Add more tools here any time — the homepage cloud shows a subset,
// the /skills page shows this entire list automatically.
export const skills: Skill[] = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Java", icon: Binary, color: "#E76F00" },
  { name: "SQL", icon: Database, color: "#8FB6E9" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#E8E8E8" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Framer Motion", icon: SiFramer, color: "#D291FF" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#E8E8E8" },
  { name: "Vercel", icon: SiVercel, color: "#E8E8E8" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "XGBoost", icon: TrendingUp, color: "#FF6B35" },
  { name: "Socket.IO", icon: SiSocketdotio, color: "#E8E8E8" },
  { name: "WebRTC", icon: Video, color: "#38BDF8" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "AI / ML APIs", icon: Sparkles, color: "#FFC53D" },
];
