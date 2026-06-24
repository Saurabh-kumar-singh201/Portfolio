function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo
} = React;

/* ─── Data ─── */

const roles = ["Full Stack Developer", "Problem Solver", "Backend Engineer", "CSE Student"];
const projects = [{
  id: "cryuze",
  title: "Cryuze",
  tag: "Service Marketplace",
  desc: "A service marketplace platform with real-time chat, payment integration, and modular backend architecture.",
  highlights: ["JWT Auth & RBAC", "Razorpay Payments", "Real-Time Chat", "REST API Design"],
  stack: ["React", "Node.js", "MongoDB", "Socket.IO", "Razorpay"],
  href: "https://github.com/Saurabh-kumar-singh201/Cryuze",
  span: "lg:col-span-2 lg:row-span-1",
  accent: "#34d399"
}, {
  id: "protype",
  title: "ProType",
  tag: "Real-Time Multiplayer",
  desc: "A synchronized typing race platform where players compete on speed and accuracy in real-time rooms.",
  highlights: ["Socket.IO Sync", "Multiplayer Rooms", "Live Leaderboards", "Host Controls", "Real-Time Events"],
  stack: ["HTML", "CSS", "JS", "Node.js", "Express", "Socket.IO"],
  href: "https://github.com/Saurabh-kumar-singh201/proType",
  demo: "https://protypex.vercel.app/",
  span: "lg:col-span-2 lg:row-span-2",
  accent: "#00d4ff",
  featured: true
}, {
  id: "yggdrasil",
  title: "Yggdrasil",
  tag: "Social Platform",
  desc: "A personality-driven social platform for questions, discovery, and community matching.",
  highlights: ["JWT Auth", "PostgreSQL Schema", "Responsive UI", "Community Flows"],
  stack: ["React", "Vite", "Tailwind", "Node.js", "JWT", "PostgreSQL"],
  href: "https://github.com/Saurabh-kumar-singh201/Yggdrasil",
  demo: "https://yggdrasil-zeta.vercel.app/",
  span: "",
  accent: "#7c5cfc"
}, {
  id: "fakecurrency",
  title: "Fake Currency Detection",
  tag: "Computer Vision",
  desc: "Detects counterfeit currency using image comparison and SSIM analysis with OpenCV.",
  highlights: ["Python", "OpenCV", "SSIM Analysis", "Tkinter GUI"],
  stack: ["Python", "OpenCV", "Tkinter", "SSIM"],
  href: "",
  span: "",
  accent: "#f59e0b"
}, {
  id: "habittracker",
  title: "HabitTracker",
  tag: "Habit Tracking",
  desc: "A simple habit tracker with JWT-authenticated user accounts and MongoDB persistence, deployed via a split frontend-backend architecture.",
  highlights: ["JWT Auth", "MongoDB Persistence", "Habit CRUD", "User Accounts"],
  stack: ["HTML", "CSS", "JS", "Node.js", "Express", "MongoDB"],
  href: "https://github.com/Saurabh-kumar-singh201/HabitTracker",
  demo: "https://habit-tracker-alpha-ochre.vercel.app",
  span: "",
  accent: "#10b981"
}, {
  id: "contemplatio",
  title: "Contemplatio",
  tag: "Stoic Todo App",
  desc: "A minimalist todo application embodying stoic philosophy — focus on what matters, eliminate the superfluous, act with intention.",
  highlights: ["Todo Management", "Stoic Philosophy UI", "Minimal Design", "Bare-Metal JS"],
  stack: ["HTML", "CSS", "JavaScript"],
  href: "https://github.com/Saurabh-kumar-singh201/Contemplatio",
  demo: "https://contemplatio-five.vercel.app",
  span: "",
  accent: "#d4a574"
}, {
  id: "kachraconnect",
  title: "kachraConnect",
  tag: "Waste Management",
  desc: "A smart waste management platform with JWT auth, report filing, dashboard, and file uploads — connecting citizens to sanitation services.",
  highlights: ["JWT Auth", "Report Filing", "Dashboard", "File Uploads"],
  stack: ["HTML", "CSS", "JS", "Node.js", "Express", "JWT"],
  href: "https://github.com/Saurabh-kumar-singh201/kachraConnect",
  span: "",
  accent: "#14b8a6"
}];
const techStack = [{
  category: "Languages",
  items: ["Java", "JavaScript", "Python"],
  icon: ">"
}, {
  category: "Frontend",
  items: ["React", "HTML", "CSS", "Tailwind"],
  icon: "}"
}, {
  category: "Backend",
  items: ["Node.js", "Express", "REST APIs"],
  icon: "/"
}, {
  category: "Databases",
  items: ["MongoDB", "MySQL", "PostgreSQL"],
  icon: "$"
}, {
  category: "Tools",
  items: ["Git", "GitHub", "VS Code", "IntelliJ"],
  icon: "&"
}];
const dsaTopics = ["Arrays", "Trees", "Graphs", "DP", "Binary Search", "Greedy", "Backtracking"];
const contacts = [{
  label: "GitHub",
  href: "https://github.com/Saurabh-kumar-singh201"
}, {
  label: "LinkedIn",
  href: "https://www.linkedin.com/in/saurabh-kumar-singh-135a452a2/?skipRedirect=true"
}, {
  label: "LeetCode",
  href: "https://leetcode.com/u/saurabh_201/"
}, {
  label: "Email",
  href: "mailto:saurabhsingh201619@gmail.com"
}];
const terminalCommands = {
  help: {
    output: ["Available commands:", "  about      — Who I am", "  skills     — Technical stack", "  projects   — Featured projects", "  leetcode   — DSA progress", "  resume     — Download resume", "  contact    — Get in touch", "  clear      — Clear terminal", "  whoami     — Guess what"]
  },
  about: {
    output: ["Saurabh Kumar Singh", "B.Tech CSE (IoT) @ NIET", "Building systems, not just websites.", "Full-stack developer · 350+ DSA problems · Open source"]
  },
  skills: {
    output: ["Languages:  Java, JavaScript, Python", "Frontend:   React, Vite, Tailwind, HTML, CSS", "Backend:    Node.js, Express, REST APIs, JWT", "Databases:  MongoDB, MySQL, PostgreSQL", "Tools:      Git, GitHub, VS Code, IntelliJ IDEA", "Core:       DSA, OOP, OS, DBMS, Computer Networks"]
  },
  projects: {
    output: ["Cryuze    — Service Marketplace (React, Node, MongoDB, Socket.IO)", "ProType   — Real-Time Typing Arena (Socket.IO, Express)", "Yggdrasil — Social Platform (React, PostgreSQL, JWT)", "Fake Currency Detection — Python, OpenCV, SSIM"]
  },
  leetcode: {
    output: ["350+ Problems Solved", "", "Topics: Arrays, Trees, Graphs, DP, Binary Search, Greedy, Backtracking", "Profile: https://leetcode.com/u/saurabh_201/"]
  },
  resume: {
    output: ["Opening resume PDF..."]
  },
  contact: {
    output: ["GitHub:   https://github.com/Saurabh-kumar-singh201", "LinkedIn: https://linkedin.com/in/saurabh-kumar-singh-135a452a2/", "LeetCode: https://leetcode.com/u/saurabh_201/", "Email:    saurabhsingh201619@gmail.com"]
  },
  whoami: {
    output: ["> saurabh", "", "A developer who turns ideas into reliable products.", "Thinks in systems. Codes with purpose."]
  }
};
const skillLevels = {
  "Java": 85,
  "JavaScript": 92,
  "Python": 78,
  "React": 86,
  "HTML": 90,
  "CSS": 88,
  "Tailwind": 90,
  "Node.js": 82,
  "Express": 80,
  "MongoDB": 78,
  "MySQL": 72,
  "PostgreSQL": 70,
  "Git": 85,
  "GitHub": 88,
  "VS Code": 90,
  "IntelliJ": 80
};

/* ─── Hooks ─── */

function useTypewriter(words, typingSpeed = 75, deletingSpeed = 40, pauseTime = 1400) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIdx(idx => (idx + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, wordIdx, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);
  return text;
}

/* ─── Components ─── */

function Section({
  children,
  className = "",
  id
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    className: `py-24 md:py-32 ${className}`
  }, children);
}
function SectionLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cyan"
  }, children);
}
function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof window === "undefined" || typeof window.IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
      ...options
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
}
function useCountUp(target, start = 1, duration = 1100) {
  const [ref, isVisible] = useInView();
  const [count, setCount] = useState(start);
  useEffect(() => {
    if (!isVisible) return;
    let frameId;
    let startTime;
    const step = timestamp => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const nextValue = Math.floor(start + (target - start) * progress);
      setCount(nextValue);
      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };
    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [isVisible, start, target, duration]);
  return [ref, count];
}
function ScrollReveal({
  children,
  className = '',
  delay = 0,
  rotate = false
}) {
  const [ref, isVisible] = useInView();
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: `reveal ${isVisible ? "is-visible" : ""} ${rotate ? "reveal-tilt" : ""} ${className}`,
    style: {
      transitionDelay: `${delay}s`
    }
  }, children);
}

/* ─── Particle Field ─── */

function ParticleField() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    const initParticles = () => {
      const count = Math.max(20, Math.min(80, Math.floor(canvas.width * canvas.height / 15000)));
      particles = Array.from({
        length: count
      }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5
      }));
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 255, 0.25)";
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${(0.07 * (1 - dist / 130)).toFixed(3)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      animId = requestAnimationFrame(animate);
    };
    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: "fixed inset-0 pointer-events-none z-0",
    style: {
      opacity: 0.5
    }
  });
}

/* ─── Scroll Progress ─── */

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed top-0 left-0 right-0 z-[60] h-[2px] bg-[rgba(255,255,255,0.04)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full scroll-progress",
    style: {
      width: `${progress}%`
    }
  }));
}

/* ─── Back to Top ─── */

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    }),
    className: `fixed bottom-8 right-8 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-cyan/10 text-cyan ring-1 ring-cyan/30 transition-all duration-500 hover:bg-cyan/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}`,
    "aria-label": "Back to top"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "18 15 12 9 6 15"
  })));
}

/* ─── Tilt Card ─── */

function TiltCard({
  children,
  className = ""
}) {
  const ref = useRef(null);
  const handleMouseMove = e => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -6;
    const rotateY = (x - centerX) / centerX * 6;
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`;
  };
  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `tilt-card ${className}`
  }, children);
}

/* ─── Navbar ─── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["About", "Projects", "Skills", "Insights", "Terminal", "Contact"];
  const scrollTo = id => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-space/80 border-b border-[rgba(255,255,255,0.04)] backdrop-blur-xl" : "bg-transparent"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    }),
    className: "font-mono text-sm font-bold tracking-wider text-cyan"
  }, "saurabh", /*#__PURE__*/React.createElement("span", {
    className: "text-muted"
  }, "201.in")), /*#__PURE__*/React.createElement("div", {
    className: "hidden items-center gap-1 md:flex"
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => scrollTo(l),
    className: "rounded-lg px-3 py-1.5 font-mono text-[13px] text-muted transition hover:bg-white/[0.04] hover:text-ink"
  }, l))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenuOpen(!menuOpen),
    className: "relative z-50 grid h-8 w-8 place-items-center text-muted md:hidden"
  }, /*#__PURE__*/React.createElement("span", {
    className: `block h-0.5 w-5 rounded bg-current transition-all ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `mt-[3px] block h-0.5 w-5 rounded bg-current transition-all ${menuOpen ? "opacity-0" : ""}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `mt-[3px] block h-0.5 w-5 rounded bg-current transition-all ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 top-14 border-b border-[rgba(255,255,255,0.04)] bg-space/95 backdrop-blur-xl md:hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-1 px-5 py-4"
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => scrollTo(l),
    className: "rounded-lg px-3 py-2.5 text-left font-mono text-sm text-muted transition hover:bg-white/[0.04] hover:text-ink"
  }, l)))));
}

/* ─── Hero ─── */

function Hero() {
  const typedRole = useTypewriter(roles);
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(value => !value), 520);
    return () => clearInterval(interval);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "relative z-10 flex min-h-screen items-center px-5"
  }, /*#__PURE__*/React.createElement(ParticleField, null), /*#__PURE__*/React.createElement("div", {
    className: "float-glow pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[120px] opacity-30"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-orb hero-orb-a pointer-events-none absolute left-[12%] top-[24%] h-24 w-24 rounded-full bg-cyan/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-orb hero-orb-b pointer-events-none absolute right-[10%] top-[18%] h-28 w-28 rounded-full bg-purple/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto w-full max-w-6xl pt-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal is-visible"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-sm text-cyan/80"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-muted"
  }, "$"), " whoami"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-headline mt-4 font-display text-[clamp(2.2rem,7vw,5rem)] font-bold leading-[0.92] tracking-tight"
  }, "Building Software", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "hero-gradient text-transparent bg-clip-text bg-gradient-to-r from-cyan via-purple to-cyan"
  }, "That Solves Real Problems."))), /*#__PURE__*/React.createElement("div", {
    className: "reveal is-visible mt-4 flex items-center gap-2 font-mono text-lg sm:text-xl",
    style: {
      transitionDelay: "0.08s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-muted"
  }, ">"), /*#__PURE__*/React.createElement("span", {
    className: "min-h-[1.75rem] text-ink"
  }, typedRole), /*#__PURE__*/React.createElement("span", {
    className: `inline-block h-5 w-[2px] bg-cyan transition-opacity duration-150 ${showCursor ? "opacity-100" : "opacity-0"}`
  })), /*#__PURE__*/React.createElement("p", {
    className: "reveal is-visible mt-6 max-w-xl leading-relaxed text-muted",
    style: {
      transitionDelay: "0.16s"
    }
  }, "B.Tech CSE Student at NIET. 350+ DSA problems solved. Building scalable applications with React, Node.js, and Java."), /*#__PURE__*/React.createElement("div", {
    className: "reveal is-visible mt-8 flex flex-wrap gap-3",
    style: {
      transitionDelay: "0.24s"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#projects",
    className: "inline-flex items-center gap-2 rounded-lg bg-cyan/10 px-5 py-2.5 font-mono text-sm font-medium text-cyan ring-1 ring-cyan/30 transition-all hover:bg-cyan/20 hover:ring-cyan/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-muted"
  }, "$"), " view_projects"), /*#__PURE__*/React.createElement("a", {
    href: "Resume.pdf",
    target: "_blank",
    rel: "noreferrer",
    className: "inline-flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.08)] bg-white/[0.03] px-5 py-2.5 font-mono text-sm font-medium text-muted transition-all hover:border-[rgba(255,255,255,0.15)] hover:bg-white/[0.06] hover:text-ink"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  })), "resume.pdf")), /*#__PURE__*/React.createElement("div", {
    className: "reveal is-visible mt-20 flex items-center gap-3 text-xs text-dim",
    style: {
      transitionDelay: "0.32s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-px w-8 bg-[rgba(255,255,255,0.06)]"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-mono tracking-wider uppercase soft-pulse"
  }, "Explore below"), /*#__PURE__*/React.createElement("span", {
    className: "h-px w-8 bg-[rgba(255,255,255,0.06)]"
  }))));
}

/* ─── About / Stats ─── */

function StatsCard({
  icon,
  label,
  value,
  index
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "group rounded-xl border border-[rgba(255,255,255,0.05)] bg-card/50 p-6 transition-all hover:border-cyan/20 hover:bg-card/80 hover:shadow-[0_0_30px_rgba(0,212,255,0.05)]"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-2xl"
  }, icon), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 font-display text-2xl font-bold"
  }, value), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-muted"
  }, label));
}
function AboutSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-6xl px-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "About"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-2 font-display text-3xl font-bold md:text-4xl"
  }, "Who Am I"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 font-display text-xl text-ink/90"
  }, "Saurabh Kumar Singh"), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 max-w-2xl leading-relaxed text-muted"
  }, "I design systems, build scalable applications, and solve complex problems. My work sits at the intersection of thoughtful engineering and practical user experiences.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
  }, [{
    icon: "\uD83C\uDF93",
    label: "Education",
    value: "NIET, CSE IoT"
  }, {
    icon: "\uD83D\uDCBB",
    label: "DSA Problems",
    value: "350+"
  }, {
    icon: "\uD83D\uDE80",
    label: "Projects",
    value: "3+"
  }, {
    icon: "\uD83D\uDCDA",
    label: "Learning",
    value: "System Design"
  }].map((s, i) => /*#__PURE__*/React.createElement(StatsCard, _extends({
    key: s.label
  }, s, {
    index: i
  }))))));
}

/* ─── Projects ─── */

function ProjectCard({
  project,
  index
}) {
  const {
    title,
    tag,
    desc,
    highlights,
    stack,
    href,
    demo,
    accent
  } = project;
  return /*#__PURE__*/React.createElement(TiltCard, {
    className: "h-full"
  }, /*#__PURE__*/React.createElement("article", {
    className: "group hover-card glow-border relative flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.05)] bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/20 hover:shadow-[0_20px_60px_rgba(0,212,255,0.06)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 top-0 h-px opacity-70",
    style: {
      background: `linear-gradient(90deg, transparent, ${accent}, transparent)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 flex-col p-6 md:p-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-start justify-between gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider",
    style: {
      color: accent,
      backgroundColor: `${accent}18`
    }
  }, tag), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, demo && /*#__PURE__*/React.createElement("a", {
    href: demo,
    target: "_blank",
    rel: "noreferrer",
    className: "flex items-center gap-1.5 rounded-md bg-white/[0.04] px-3 py-1.5 font-mono text-[12px] text-muted transition-all hover:bg-white/[0.08] hover:text-ink"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "15 3 21 3 21 9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "14",
    x2: "21",
    y2: "3"
  })), "Live"), href && /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer",
    className: "flex items-center gap-1.5 rounded-md bg-white/[0.04] px-3 py-1.5 font-mono text-[12px] text-muted transition-all hover:bg-white/[0.08] hover:text-ink"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  })), "Code"))), /*#__PURE__*/React.createElement("h3", {
    className: "mt-4 font-display text-2xl font-bold md:text-3xl"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm leading-relaxed text-muted"
  }, desc), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-dim"
  }, "Highlights")), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex flex-wrap gap-1.5"
  }, highlights.map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    className: "rounded-md bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-dim ring-1 ring-[rgba(255,255,255,0.04)]"
  }, h))), /*#__PURE__*/React.createElement("div", {
    className: "mt-auto pt-6"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-dim"
  }, "Stack"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex flex-wrap gap-2"
  }, stack.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "rounded-md px-2.5 py-1 font-mono text-[11px] font-medium transition-all",
    style: {
      color: accent,
      backgroundColor: `${accent}14`
    }
  }, t)))))));
}
function ProjectsSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    className: "py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-6xl px-5"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Projects"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-2 font-display text-3xl font-bold md:text-4xl"
  }, "Projects"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 max-w-2xl leading-relaxed text-muted"
  }, "Real products with real users. Each built from scratch with a focus on architecture, performance, and user experience.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
  }, projects.map((p, i) => /*#__PURE__*/React.createElement(ScrollReveal, {
    key: p.id,
    delay: 0.06 * i,
    rotate: true
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    project: p,
    index: i
  }))))));
}

/* ─── Tech Stack ─── */

function TechCard({
  group,
  index
}) {
  const [ref, isVisible] = useInView();
  const colors = ["#00d4ff", "#7c5cfc", "#34d399", "#f59e0b", "#f472b6"];
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: `group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.05)] bg-gradient-to-br from-card/50 to-card/20 p-6 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,212,255,0.06)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`,
    style: {
      transitionDelay: `${0.08 * index}s`,
      transitionProperty: "all",
      transitionDuration: "0.6s",
      transitionTimingFunction: "ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100",
    style: {
      background: `linear-gradient(90deg, transparent, ${colors[index % colors.length]}, transparent)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -inset-20 opacity-0 transition-opacity duration-700 group-hover:opacity-[0.08]",
    style: {
      background: `radial-gradient(circle at 50% 0%, ${colors[index % colors.length]}, transparent 70%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex h-10 w-10 items-center justify-center rounded-xl font-mono text-base font-bold transition-all duration-300 group-hover:shadow-lg",
    style: {
      backgroundColor: `${colors[index % colors.length]}18`,
      color: colors[index % colors.length],
      boxShadow: isVisible ? `0 0 20px ${colors[index % colors.length]}10` : "none"
    }
  }, group.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs font-semibold uppercase tracking-[0.2em]",
    style: {
      color: colors[index % colors.length]
    }
  }, group.category), /*#__PURE__*/React.createElement("p", {
    className: "mt-0.5 font-mono text-[11px] text-dim"
  }, group.items.length, " technologies"))), /*#__PURE__*/React.createElement("div", {
    className: "relative mt-6 space-y-2.5"
  }, group.items.map((item, idx) => /*#__PURE__*/React.createElement(SkillBadge, {
    key: item,
    name: item,
    level: skillLevels[item] || 75,
    color: colors[index % colors.length],
    delay: idx * 0.06,
    visible: isVisible
  }))));
}
function SkillBadge({
  name,
  delay,
  visible
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `flex items-center rounded-xl bg-[rgba(255,255,255,0.02)] px-3.5 py-2.5 ring-1 ring-[rgba(255,255,255,0.04)] transition-all duration-300 hover:bg-[rgba(255,255,255,0.04)] hover:ring-[rgba(255,255,255,0.08)] ${visible ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"}`,
    style: {
      transitionDelay: `${delay + 0.2}s`,
      transitionProperty: "all",
      transitionDuration: "0.5s",
      transitionTimingFunction: "ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-sm text-muted transition-colors duration-300 group-hover:text-ink"
  }, name));
}
function TechSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "skills",
    className: "relative overflow-hidden py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute inset-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-cyan/5 blur-[120px]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-purple/5 blur-[120px]"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto max-w-6xl px-5"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Tech Stack"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-2 font-display text-3xl font-bold md:text-4xl"
  }, "Technical Arsenal"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 max-w-xl leading-relaxed text-muted"
  }, "Technologies I use daily to design, build, and ship production-grade software.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
  }, techStack.map((group, i) => /*#__PURE__*/React.createElement(TechCard, {
    key: group.category,
    group: group,
    index: i
  })))));
}

/* ─── DSA ─── */

function DSASection() {
  const [countRef, count] = useCountUp(350, 1, 1200);
  const codeLines = ["$ solve graph shortest_path", "", "Analyzing graph...", "Vertices: 6, Edges: 8", "Running Dijkstra's algorithm...", "", "Result:", "  Distance to all nodes computed", "  Time Complexity: O(E log V)", "  Space Complexity: O(V)", "", "✓ Accepted"];
  const typedCode = codeLines.join("\n");
  return /*#__PURE__*/React.createElement("section", {
    id: "dsa",
    className: "relative overflow-hidden py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-6xl px-5"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(SectionLabel, null, "DSA Journey"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-2 font-display text-3xl font-bold md:text-4xl"
  }, "350+ Problems Solved")), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 grid gap-6 lg:grid-cols-2"
  }, /*#__PURE__*/React.createElement(ScrollReveal, {
    rotate: true
  }, /*#__PURE__*/React.createElement("div", {
    ref: countRef,
    className: "hover-card glow-border flex flex-col items-center justify-center rounded-xl border border-[rgba(255,255,255,0.05)] bg-card/30 p-10"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-display count-up text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple md:text-8xl"
  }, count), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 font-mono text-sm text-muted"
  }, "Problems Solved"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-xs text-dim"
  }, "Across LeetCode, GFG, and Codeforces"), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex flex-wrap justify-center gap-2"
  }, dsaTopics.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "rounded-md bg-white/[0.04] px-3 py-1.5 font-mono text-[12px] text-dim ring-1 ring-[rgba(255,255,255,0.04)]"
  }, t))))), /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 0.12,
    rotate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "hover-card glow-border rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#0d0d14] p-5 font-mono text-sm leading-relaxed shadow-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 border-b border-[rgba(255,255,255,0.06)] pb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-3 w-3 rounded-full bg-red-500/60"
  }), /*#__PURE__*/React.createElement("span", {
    className: "h-3 w-3 rounded-full bg-yellow-500/60"
  }), /*#__PURE__*/React.createElement("span", {
    className: "h-3 w-3 rounded-full bg-green-500/60"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-2 text-[11px] text-dim"
  }, "terminal \u2014 dsa@portfolio")), /*#__PURE__*/React.createElement("pre", {
    className: "mt-3 overflow-x-auto text-[13px] text-muted"
  }, /*#__PURE__*/React.createElement("code", null, typedCode)))))));
}

/* ─── Terminal ─── */

function TerminalSection() {
  const [history, setHistory] = useState([{
    type: "system",
    text: "Welcome to saurabh@portfolio:~$"
  }, {
    type: "system",
    text: 'Type "help" for available commands.'
  }]);
  const [input, setInput] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef();
  const bottomRef = useRef();
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({
      behavior: "smooth"
    });
  }, [history]);
  const handleCommand = useCallback(cmd => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;
    setHistory(h => [...h, {
      type: "input",
      text: `$ ${cmd}`
    }]);
    if (trimmed === "clear") {
      setHistory([]);
      return;
    }
    if (trimmed === "resume") {
      window.open("Resume.pdf", "_blank");
    }
    const cmdData = terminalCommands[trimmed];
    if (cmdData) {
      setHistory(h => [...h, ...cmdData.output.map(l => ({
        type: "output",
        text: l
      }))]);
    } else {
      setHistory(h => [...h, {
        type: "error",
        text: `Command not found: ${trimmed}. Type "help" for available commands.`
      }]);
    }
  }, []);
  const terminalRef = useRef();
  const scrollContainerRef = useRef();
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
  }, [history]);
  const onSubmit = () => {
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
    requestAnimationFrame(() => inputRef.current?.focus());
  };
  return /*#__PURE__*/React.createElement(Section, {
    id: "terminal",
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-4xl px-5"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Terminal"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-2 font-display text-3xl font-bold md:text-4xl"
  }, "Interactive Shell"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 max-w-xl leading-relaxed text-muted"
  }, "Try typing ", /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-cyan"
  }, "help"), " to explore my profile from the command line.")), /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 0.2
  }, /*#__PURE__*/React.createElement("div", {
    ref: terminalRef,
    className: "mt-8 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#0a0a10] shadow-[0_0_40px_rgba(0,0,0,0.3)]",
    onClick: () => {
      if (inputRef.current) inputRef.current.focus();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 border-b border-[rgba(255,255,255,0.06)] px-4 py-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-3 w-3 rounded-full bg-red-500/60"
  }), /*#__PURE__*/React.createElement("span", {
    className: "h-3 w-3 rounded-full bg-yellow-500/60"
  }), /*#__PURE__*/React.createElement("span", {
    className: "h-3 w-3 rounded-full bg-green-500/60"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-2 font-mono text-[11px] text-dim"
  }, "saurabh@portfolio \u2014 bash")), /*#__PURE__*/React.createElement("div", {
    ref: scrollContainerRef,
    className: "max-h-80 overflow-y-auto p-4 font-mono text-[14px] leading-relaxed"
  }, history.map((line, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: line.type === "input" ? "text-ink" : line.type === "error" ? "text-red-400" : line.type === "system" ? "text-dim" : "text-muted"
  }, line.text)), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-cyan"
  }, "$"), /*#__PURE__*/React.createElement("span", {
    className: "mx-1 text-dim"
  }, ">"), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "text",
    value: input,
    onChange: e => setInput(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter") {
        e.preventDefault();
        onSubmit();
      }
    },
    className: "flex-1 bg-transparent outline-none text-ink caret-cyan",
    autoComplete: "off",
    spellCheck: "false"
  }), /*#__PURE__*/React.createElement("span", {
    className: `text-cyan ${showCursor ? "opacity-100" : "opacity-0"}`
  }, "_")))))));
}

/* ─── Contact ─── */

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    setFeedback("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "Unable to send message right now.");
      }
      setStatus("sent");
      setFeedback("Your message was sent successfully.");
      setForm({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Something went wrong while sending your message.");
    }
  };
  return /*#__PURE__*/React.createElement(Section, {
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-6xl px-5"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Contact"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-2 font-display text-3xl font-bold md:text-4xl"
  }, "Get In Touch"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 max-w-xl leading-relaxed text-muted"
  }, "I am open to internships, full-time roles, and opportunities to build great products.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 grid gap-6 lg:grid-cols-2"
  }, /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 0.15
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "rounded-xl border border-[rgba(255,255,255,0.05)] bg-card/40 p-6 backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-mono text-[11px] font-semibold uppercase tracking-wider text-dim"
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    }),
    disabled: status === "sending",
    className: "mt-1.5 w-full rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-3 py-2.5 font-mono text-sm text-ink outline-none transition-all focus:border-cyan/30 focus:shadow-[0_0_12px_rgba(0,212,255,0.06)]",
    placeholder: "Your name",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-mono text-[11px] font-semibold uppercase tracking-wider text-dim"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: form.email,
    onChange: e => setForm({
      ...form,
      email: e.target.value
    }),
    disabled: status === "sending",
    className: "mt-1.5 w-full rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-3 py-2.5 font-mono text-sm text-ink outline-none transition-all focus:border-cyan/30 focus:shadow-[0_0_12px_rgba(0,212,255,0.06)]",
    placeholder: "your@email.com",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "font-mono text-[11px] font-semibold uppercase tracking-wider text-dim"
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    value: form.message,
    onChange: e => setForm({
      ...form,
      message: e.target.value
    }),
    rows: 4,
    disabled: status === "sending",
    className: "mt-1.5 w-full resize-none rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-3 py-2.5 font-mono text-sm text-ink outline-none transition-all focus:border-cyan/30 focus:shadow-[0_0_12px_rgba(0,212,255,0.06)]",
    placeholder: "Your message",
    required: true
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: status === "sending",
    className: "w-full rounded-lg bg-cyan/10 px-5 py-2.5 font-mono text-sm font-medium text-cyan ring-1 ring-cyan/30 transition-all hover:bg-cyan/20 hover:ring-cyan/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.12)]"
  }, status === "sending" ? "Sending..." : status === "sent" ? "✓ Message sent!" : "$ send_message"), feedback && /*#__PURE__*/React.createElement("p", {
    className: `font-mono text-xs ${status === "error" ? "text-red-400" : "text-cyan"}`
  }, feedback)))), /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 0.25
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3"
  }, contacts.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.label,
    href: c.href,
    target: "_blank",
    rel: "noreferrer",
    className: "group hover-card glow-border flex items-center gap-3 rounded-xl border border-[rgba(255,255,255,0.05)] bg-card/30 px-5 py-3.5 transition-all hover:border-cyan/15 hover:bg-card/60"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-sm text-cyan/60"
  }, ">"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-sm text-muted transition-all group-hover:text-ink"
  }, c.label), /*#__PURE__*/React.createElement("span", {
    className: "ml-auto text-xs text-dim"
  }, c.href.replace("https://", "").replace("mailto:", "")))))))));
}

/* ─── Footer ─── */

function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "border-t border-[rgba(255,255,255,0.04)] py-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-6xl px-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-between gap-4 md:flex-row"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-sm text-dim"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-cyan"
  }, "$"), " saurabh", /*#__PURE__*/React.createElement("span", {
    className: "text-muted"
  }, "201.in")), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-[13px] text-dim"
  }, "\xA9 2026 Saurabh Kumar Singh \u2014 built with purpose"))));
}

/* ─── Things I've Figured Out ─── */

function ArticleCard({
  article,
  onClick,
  index
}) {
  const [hovered, setHovered] = useState(false);
  return /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 0.2 + index * 0.08
  }, /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    className: "group relative cursor-pointer overflow-hidden rounded-xl border border-[rgba(255,255,255,0.05)] bg-card/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,212,255,0.06)]",
    style: {
      borderColor: hovered ? `${article.categoryColor}40` : 'rgba(255,255,255,0.05)',
      boxShadow: hovered ? `0 0 30px ${article.categoryColor}10` : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[12px] text-dim"
  }, article.date), /*#__PURE__*/React.createElement("span", {
    className: "inline-block rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider",
    style: {
      color: article.categoryColor,
      backgroundColor: `${article.categoryColor}18`
    }
  }, article.category))), /*#__PURE__*/React.createElement("h3", {
    className: "mt-4 font-display text-xl font-bold leading-snug md:text-2xl"
  }, article.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm leading-relaxed text-muted line-clamp-2"
  }, article.preview), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex items-center gap-2 text-[13px] font-medium transition-all",
    style: {
      color: hovered ? article.categoryColor : '#585878'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Read article"), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "transition-all",
    style: {
      transform: hovered ? 'translateX(4px)' : 'translateX(0)'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  })))));
}
function ArticleModal({
  article,
  onClose
}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef();
  const [activeHeading, setActiveHeading] = useState("");
  const tocItems = useMemo(() => {
    return article.content.filter(s => s.type === "h2").map(s => s.text);
  }, [article]);
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const onScroll = () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = el;
      const progress = scrollTop / (scrollHeight - clientHeight);
      setScrollProgress(Math.min(progress, 1));
      const headings = el.querySelectorAll("h2");
      let current = "";
      headings.forEach(h => {
        const rect = h.getBoundingClientRect();
        if (rect.top <= 120) current = h.textContent;
      });
      setActiveHeading(current);
    };
    el.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  const scrollToHeading = text => {
    const el = contentRef.current;
    if (!el) return;
    const headings = el.querySelectorAll("h2");
    for (const h of headings) {
      if (h.textContent === text) {
        h.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        break;
      }
    }
  };
  const renderContent = section => {
    switch (section.type) {
      case "h2":
        return /*#__PURE__*/React.createElement("h2", {
          className: "mt-10 mb-4 font-display text-2xl font-bold md:text-3xl",
          id: section.text.replace(/\s+/g, "-").toLowerCase()
        }, section.text);
      case "h3":
        return /*#__PURE__*/React.createElement("h3", {
          className: "mt-6 mb-3 font-display text-lg font-semibold text-ink/90"
        }, section.text);
      case "p":
        return /*#__PURE__*/React.createElement("p", {
          className: "mb-4 leading-relaxed text-muted"
        }, section.text);
      case "blockquote":
        return /*#__PURE__*/React.createElement("blockquote", {
          className: "my-6 border-l-2 border-cyan/50 pl-5 italic text-ink/80"
        }, section.text);
      case "code":
        return /*#__PURE__*/React.createElement("pre", {
          className: "my-4 overflow-x-auto rounded-lg bg-[#0d0d14] p-4 font-mono text-[13px] leading-relaxed text-muted ring-1 ring-[rgba(255,255,255,0.06)]"
        }, /*#__PURE__*/React.createElement("code", null, section.text));
      case "ul":
        return /*#__PURE__*/React.createElement("ul", {
          className: "mb-4 list-disc space-y-1.5 pl-5 text-muted"
        }, section.items.map((item, i) => /*#__PURE__*/React.createElement("li", {
          key: i,
          className: "leading-relaxed"
        }, item)));
      case "ol":
        return /*#__PURE__*/React.createElement("ol", {
          className: "mb-4 list-decimal space-y-1.5 pl-5 text-muted"
        }, section.items.map((item, i) => /*#__PURE__*/React.createElement("li", {
          key: i,
          className: "leading-relaxed"
        }, item)));
      default:
        return null;
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-[100] flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-surface/95",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto flex h-full w-full max-w-6xl flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky top-0 z-10 h-1 bg-[rgba(255,255,255,0.06)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full transition-all duration-150",
    style: {
      width: `${scrollProgress * 100}%`,
      backgroundColor: article.categoryColor,
      boxShadow: `0 0 12px ${article.categoryColor}`
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    ref: contentRef,
    className: "flex-1 overflow-y-auto px-5 pb-20 pt-8 md:px-12 lg:px-16 bg-surface"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-3xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[13px] text-dim"
  }, article.date), /*#__PURE__*/React.createElement("span", {
    className: "inline-block rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider",
    style: {
      color: article.categoryColor,
      backgroundColor: `${article.categoryColor}18`
    }
  }, article.category), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[12px] text-dim"
  }, article.readingTime)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] text-muted transition-all hover:bg-white/[0.08] hover:text-ink"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), /*#__PURE__*/React.createElement("h1", {
    className: "mt-6 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
  }, article.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-base leading-relaxed text-muted/80 md:text-lg"
  }, article.preview), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex flex-wrap gap-2"
  }, article.topics.map(topic => /*#__PURE__*/React.createElement("span", {
    key: topic,
    className: "rounded-md bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-dim ring-1 ring-[rgba(255,255,255,0.04)]"
  }, topic))), /*#__PURE__*/React.createElement("hr", {
    className: "my-8 border-[rgba(255,255,255,0.06)]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "article-content"
  }, article.content.map((section, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, renderContent(section)))))), /*#__PURE__*/React.createElement("div", {
    className: "hidden w-64 shrink-0 border-l border-[rgba(255,255,255,0.04)] bg-surface p-6 lg:block"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-[11px] font-semibold uppercase tracking-wider text-dim"
  }, "On this page"), /*#__PURE__*/React.createElement("nav", {
    className: "mt-4 flex flex-col gap-1.5"
  }, tocItems.map(item => /*#__PURE__*/React.createElement("button", {
    key: item,
    onClick: () => scrollToHeading(item),
    className: `text-left text-[13px] transition-all ${activeHeading === item ? "text-ink font-medium" : "text-dim hover:text-muted"}`
  }, item)))))));
}
function InsightsSection() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);
  useEffect(() => {
    fetch("articles.json").then(res => res.json()).then(setArticles).catch(() => {});
  }, []);
  const categories = ["All", "Algorithms", "Data Structures", "Distributed Systems", "Databases", "Computer Networks", "React", "Operating Systems"];
  const filtered = articles.filter(a => {
    const q = search.toLowerCase();
    const matchSearch = !q || a.title.toLowerCase().includes(q) || a.preview.toLowerCase().includes(q) || a.topics.some(t => t.toLowerCase().includes(q)) || a.category.toLowerCase().includes(q);
    const matchCategory = category === "All" || a.category === category;
    return matchSearch && matchCategory;
  });
  return /*#__PURE__*/React.createElement(Section, {
    id: "insights"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-6xl px-5"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Insights"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-2 font-display text-3xl font-bold md:text-4xl"
  }, "Things I've Figured Out"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 max-w-2xl leading-relaxed text-muted"
  }, "Notes on algorithms, systems, computer science,", /*#__PURE__*/React.createElement("br", null), "and engineering ideas worth remembering.")), /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative mt-8"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-dim",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "Search insights...",
    className: "w-full rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] py-3 pl-10 pr-4 font-mono text-sm text-ink outline-none transition-all placeholder:text-dim focus:border-cyan/30 focus:shadow-[0_0_20px_rgba(0,212,255,0.06)]"
  }))), /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 0.15
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-none"
  }, categories.map(cat => /*#__PURE__*/React.createElement("button", {
    key: cat,
    onClick: () => setCategory(cat),
    className: `shrink-0 rounded-lg px-3.5 py-1.5 font-mono text-[13px] transition-all ${category === cat ? "bg-cyan/10 text-cyan ring-1 ring-cyan/30" : "bg-white/[0.03] text-muted ring-1 ring-[rgba(255,255,255,0.04)] hover:bg-white/[0.06] hover:text-ink"}`
  }, cat)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
  }, filtered.length > 0 ? filtered.map((a, i) => /*#__PURE__*/React.createElement(ArticleCard, {
    key: a.id,
    article: a,
    index: i,
    onClick: () => setSelectedArticle(a)
  })) : /*#__PURE__*/React.createElement("div", {
    className: "col-span-full py-16 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-sm text-dim"
  }, "No insights match your search.")))), selectedArticle && /*#__PURE__*/React.createElement(ArticleModal, {
    article: selectedArticle,
    onClose: () => setSelectedArticle(null)
  }));
}

/* ─── App ─── */

function App() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative min-h-screen bg-space selection:bg-cyan/20 selection:text-ink"
  }, /*#__PURE__*/React.createElement(ScrollProgress, null), /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(AboutSection, null), /*#__PURE__*/React.createElement(ProjectsSection, null), /*#__PURE__*/React.createElement(TechSection, null), /*#__PURE__*/React.createElement(DSASection, null), /*#__PURE__*/React.createElement(InsightsSection, null), /*#__PURE__*/React.createElement(TerminalSection, null), /*#__PURE__*/React.createElement(ContactSection, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(BackToTop, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
