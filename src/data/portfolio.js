export const personalInfo = {
  name: "Sai Naren",
  title: "Software Developer",
  taglines: [
    "Computer Science Student(AI&ML) 💻",
    "Machine Learning Enthusiast 🤖",
    "Problem Solver 🧩",
    "CS Engineering Student 🎓",
  ],
  email: "msainaren1408@gmail.com",
  phone: "6300135303",
  location: "India",
  linkedin: "https://www.linkedin.com/in/sai-naren-m",
  github: "https://github.com/naren1408",
  resume: "/CV.SN.pdf",
  about: `I'm a passionate Computer Science Engineering student at Lovely Professional University with a strong foundation in full-stack development, machine learning, and competitive programming. I love building intelligent, user-centric applications that solve real-world problems. With experience in Python, Java, C++, React, and Flask, I bring ideas to life through clean code and innovative solutions. I've solved 100+ coding challenges and participated in hackathons, always pushing myself to learn and grow.`,
};

export const skills = {
  "FRONTEND": [
    { name: "React.js", icon: "SiReact", color: "#61DAFB" },
    { name: "HTML", icon: "SiHtml5", color: "#E34F26" },
    { name: "CSS", icon: "FaCss3Alt", color: "#1572B6" },
    { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
  ],
  "BACKEND": [
    { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
    { name: "Express", icon: "SiExpress", color: "#000000" },
    { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
    { name: "REST API", icon: "SiInsomnia", color: "#5849BE" },
  ],
  "AI / ML": [
    { name: "Scikit-Learn", icon: "SiScikitlearn", color: "#F7931E" },
    { name: "Pandas", icon: "SiPandas", color: "#150458" },
    { name: "NumPy", icon: "SiNumpy", color: "#013243" },
    { name: "Matplotlib", icon: "SiPlotly", color: "#7E7E7E" },
    { name: "Seaborn", icon: "SiPython", color: "#3776AB" },
  ],
  "TOOLS": [
    { name: "Git", icon: "SiGit", color: "#F05032" },
    { name: "GitHub", icon: "SiGithub", color: "#181717" },
    { name: "AWS", icon: "FaAws", color: "#232F3E" },
    { name: "Linux", icon: "SiLinux", color: "#FCC624" },
  ],
  "LANGUAGES": [
    { name: "Python", icon: "SiPython", color: "#3776AB" },
    { name: "Java", icon: "SiOpenjdk", color: "#ED8B00" },
    { name: "C++", icon: "SiCplusplus", color: "#00599C" },
    { name: "C", icon: "SiC", color: "#A8B9CC" },
    { name: "SQL", icon: "SiPostgresql", color: "#4169E1" },
  ],
};

export const projects = [
  {
    title: "Power Consumption Monitoring & Recommendation System",
    date: "Oct 2025",
    description:
      "An intelligent system to monitor household electricity usage, identify abnormal consumption patterns, and suggest actionable steps to reduce energy waste. Features real-time alerts, notification triggers, and user-friendly dashboards for daily and monthly power consumption insights.",
    techStack: ["Python", "Machine Learning", "Flask", "Data Analytics"],
    highlights: [
      "Anomaly detection pipelines using ML models",
      "Personalized optimization recommendations",
      "Real-time alerts & dashboards",
      "Flask backend for data flow management",
    ],
    liveLink: "#",
    githubLink: "https://github.com/Naren",
  },
  {
    title: "E-Commerce Website",
    date: "Sep 2025",
    description:
      "A full-featured e-commerce platform with product listings, category navigation, smart search suggestions, and a complete cart & checkout flow. Includes real-time AI assistant for in-app support.",
    techStack: ["HTML", "CSS", "JavaScript", "Flask"],
    highlights: [
      "Smart search with suggestions",
      "Real-time AI chat assistant",
      "User authentication & sessions",
      "Responsive UI with reusable components",
    ],
    liveLink: "#",
    githubLink: "https://github.com/Naren",
  },
  {
    title: "Library Management System",
    date: "Aug 2025",
    description:
      "A console-based application developed in C++ to efficiently manage library operations such as adding books, borrowing, returning, and tracking availability. The system uses object-oriented programming principles to ensure modularity, scalability, and clean code structure.",
    techStack: ["C++", "OOP", "STL"],
    highlights: [
      "Object-oriented design using classes and encapsulation",
      "Book tracking with borrow/return status",
      "Menu-driven user interface for easy interaction",
      "Efficient data storage using STL vectors",
    ],
    liveLink: "#",
    githubLink: "https://github.com/naren1408/Library-Tracker-",
  },
];

export const education = [
  {
    institution: "Kings English Medium",
    location: "Andhra Pradesh, India",
    degree: "Matriculation",
    grade: "Percentage: 100%",
    period: "June 2020 — March 2021",
    icon: "school",
  },
  {
    institution: "Sri Chaitanya Jr. College",
    location: "Andhra Pradesh, India",
    degree: "Intermediate",
    grade: "Percentage: 91.7%",
    period: "April 2022 — March 2023",
    icon: "school",
  },
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "B.Tech (CSE - AI & ML)",
    grade: "CGPA: 6.99",
    period: "August 2023 — Present",
    icon: "university",
  },
];


export const certificates = [
  { title: "ChatGPT-4 Prompt Engineering", date: "August 16, 2025", org: "Infosys", image: "/certificates/cert1.png", url: "/certificates/chatgpt-prompt-engineering.pdf" },
  { title: "Data Structures Algorithms", date: "June 4 - July 15, 2025", org: "CipherSchools / LPU", image: "/certificates/cert2.png", url: "/certificates/dsa-training.pdf" },
  { title: "Computational Theory: Finite Automata", date: "August 11, 2025", org: "Infosys", image: "/certificates/cert3.png", url: "/certificates/computational-theory.pdf" },
  { title: "Build Generative AI Apps and Solutions", date: "August 16, 2025", org: "Infosys | Springboard", image: "/certificates/cert4.png", url: "/certificates/gen-ai-no-code.pdf" },
  { title: "Master Generative AI & AI Tools", date: "August 18, 2025", org: "Infosys | Springboard", image: "/certificates/cert5.png", url: "/certificates/master-gen-ai.pdf" },
];

export const achievements = [
  {
    title: "Webathon Champion",
    description: "Participated in a Webathon, showcased competitive programming skills and built a complete website in 1st year.",
  },
  {
    title: "Search & Filter Implementation",
    description: "Developed clean search and filter logic to retrieve products based on categories and user queries.",
  },
  {
    title: "100+ Coding Problems",
    description: "Solved 100+ competitive programming problems on platforms like HackerRank and CodeChef.",
  },
];

export const extraCurricular = [
  "Represented Karnataka and Sri Lanka in cultural events (One India & One World)",
  "Assisted in community awareness programs on HIV/AIDS outreach (NGO)",
];
