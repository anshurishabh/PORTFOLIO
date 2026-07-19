export interface Skill {
  name: string;
  iconKey: string;
  color: string; // hex used to tint the icon
}

// Add more tools here any time — the homepage cloud shows a subset,
// the /skills page shows this entire list automatically.
// `iconKey` must match a key in the iconMap inside FloatingBadge.tsx
export const skills: Skill[] = [
  { name: "Python", iconKey: "python", color: "#3776AB" },
  { name: "JavaScript", iconKey: "javascript", color: "#F7DF1E" },
  { name: "TypeScript", iconKey: "typescript", color: "#3178C6" },
  { name: "Java", iconKey: "java", color: "#E76F00" },
  { name: "SQL", iconKey: "sql", color: "#8FB6E9" },
  { name: "Node.js", iconKey: "nodejs", color: "#5FA04E" },
  { name: "Express", iconKey: "express", color: "#E8E8E8" },
  { name: "MongoDB", iconKey: "mongodb", color: "#47A248" },
  { name: "MySQL", iconKey: "mysql", color: "#4479A1" },
  { name: "HTML5", iconKey: "html5", color: "#E34F26" },
  { name: "CSS3", iconKey: "css3", color: "#1572B6" },
  { name: "Tailwind CSS", iconKey: "tailwind", color: "#38BDF8" },
  { name: "Framer Motion", iconKey: "framer", color: "#D291FF" },
  { name: "Git", iconKey: "git", color: "#F05032" },
  { name: "GitHub", iconKey: "github", color: "#E8E8E8" },
  { name: "Vercel", iconKey: "vercel", color: "#E8E8E8" },
  { name: "Firebase", iconKey: "firebase", color: "#FFCA28" },
  { name: "Google Cloud", iconKey: "googlecloud", color: "#4285F4" },
  { name: "Pandas", iconKey: "pandas", color: "#150458" },
  { name: "PyTorch", iconKey: "pytorch", color: "#EE4C2C" },
  { name: "XGBoost", iconKey: "xgboost", color: "#FF6B35" },
  { name: "Socket.IO", iconKey: "socketio", color: "#E8E8E8" },
  { name: "WebRTC", iconKey: "webrtc", color: "#38BDF8" },
  { name: "Postman", iconKey: "postman", color: "#FF6C37" },
  { name: "AI / ML APIs", iconKey: "ai", color: "#FFC53D" },
];