export interface Project {
  title: string;
  subtitle: string;
  desc: string;
  tech: string[];
  link: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  verifyLink: string;
  skills: string[];
}

// Add new projects here — they'll automatically show up on the
// homepage preview (first 4) and the full /projects page.
export const projects: Project[] = [
  {
    title: "Credo AI",
    subtitle: "Hybrid microfinance loan risk engine",
    desc: "A predictive system for microfinance institutions to assess credit risk, combining an XGBoost model with Google Gemini for automated financial recommendations.",
    tech: ["Python", "XGBoost", "Gemini API", "Node.js", "MongoDB"],
    link: "https://github.com/anshurishabh/credo-ai",
  },
  {
    title: "Distributed Database Matrix",
    subtitle: "SQL & Node.js backend framework",
    desc: "A production-grade backend focused on optimized relational schema design, fast query execution, and clean version-controlled development.",
    tech: ["Node.js", "SQL", "MongoDB", "Express"],
    link: "https://github.com/anshurishabh",
  },
  {
    title: "Driver Drowsiness Detection",
    subtitle: "Real-time computer vision safety system",
    desc: "A CV pipeline that monitors driver alertness in real time using facial landmark tracking, triggering instant alerts on signs of fatigue.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    link: "https://github.com/anshurishabh/Detection",
  },
  {
    title: "NexChat AI",
    subtitle: "Real-time WebRTC communication platform",
    desc: "A full-stack chat and video platform with custom signaling logic, message editing, push notifications, and peer-to-peer video via WebRTC.",
    tech: ["Next.js", "Node.js", "Socket.IO", "WebRTC"],
    link: "https://github.com/anshurishabh/chat-ai",
  },
];

// Add new certificates here — same pattern as projects above.
export const certificates: Certificate[] = [
  {
    title: "Frontend Developer (Intermediate)",
    issuer: "HackerRank",
    verifyLink: "https://www.hackerrank.com/certificates/495d3ff85ad4",
    skills: ["React", "JavaScript ES6", "Frontend Architecture"],
  },
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    verifyLink: "https://www.hackerrank.com/certificates/7256184e4f51",
    skills: ["CSS3", "Responsive Layouts", "Flexbox & Grid"],
  },
  {
    title: "AI for Data Analysis",
    issuer: "Google, via Coursera",
    verifyLink: "https://coursera.org/share/87c0835b42e6d90694129699645f8fab",
    skills: ["Data Analytics", "Predictive Analytics"],
  },
];
