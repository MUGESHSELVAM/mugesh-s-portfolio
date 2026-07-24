// All content below is derived directly from Mugesh Selvam K's resume.
// Placeholders are explicitly marked TODO for future updates — nothing here is invented.

export const profile = {
  name: "Mugesh Selvam K",
  role: "Cybersecurity Engineer",
  roles: ["SOC Analyst", "Threat Hunter", "VAPT Practitioner", "SIEM Analyst"],
  tagline:
    "I find what's exploitable before attackers do, and build the systems that catch what slips through.",
  summary:
    "Cybersecurity undergraduate with hands-on experience across VAPT, SOC operations, and applied security research. I've validated OWASP Top 10 vulnerabilities in authorized engagements, correlated SIEM telemetry to triage real alerts, and shipped a responsible disclosure to CERT-In for a live FMCG attack surface.",
  location: "Tiruppur, Tamil Nadu, India",
  email: "iammugesh07@gmail.com",
  phone: "+91 90921 22507",
  github: "https://github.com/MUGESHSELVAM",
  linkedin: "https://linkedin.com/in/mugeshselvamk",
  resumeUrl: "/resume.pdf",
  availability: "Open to VAPT / SOC Analyst roles",
};

export const stats = [
  { label: "Authorized Pentest Engagements", value: 5, suffix: "+" },
  { label: "CVSS-Scored Reports Delivered", value: 5, suffix: "" },
  { label: "Hands-on Labs Completed", value: 40, suffix: "+" },
  { label: "Certifications Earned", value: 9, suffix: "+" },
  { label: "Responsible Disclosures", value: 1, suffix: "" },
];

export const education = {
  school: "Nandha Engineering College",
  location: "Erode, Tamil Nadu",
  degree: "B.E. Computer Science and Engineering (Cyber Security)",
  cgpa: "8.0 / 10.0",
  period: "2023 – 2027",
};

export const about = {
  journey: [
    {
      year: "2023",
      title: "Started B.E. CSE (Cyber Security)",
      description:
        "Began undergraduate studies at Nandha Engineering College, focusing on offensive and defensive security fundamentals.",
    },
    {
      year: "2025",
      title: "Cyber Security Intern — Yale IT Skill Hub",
      description:
        "First hands-on SOC exposure: SIEM log correlation, IOC analysis, and MITRE ATT&CK-mapped incident response workflows.",
    },
    {
      year: "2025",
      title: "CERT-In Responsible Disclosure",
      description:
        "Identified and reported publicly exposed services on a live FMCG attack surface through structured OSINT and responsible disclosure practice.",
    },
    {
      year: "2025 – 2026",
      title: "Ethical Hacking Intern — Hackup Technology",
      description:
        "Ran authorized black-box penetration tests, validated OWASP Top 10 vulnerabilities, and delivered CVSS-scored reports with remediation roadmaps.",
    },
    {
      year: "2026 – 2027",
      title: "Building toward a VAPT/SOC Analyst role",
      description:
        "Deepening detection engineering and threat hunting practice ahead of graduation — targeting SOC Analyst, Threat Hunter, and SIEM Analyst roles.",
    },
  ],
  currentFocus:
    "Detection engineering, SIEM correlation logic, and closing the loop between vulnerability findings and incident response playbooks.",
  goal:
    "To operate inside a SOC where I can turn raw telemetry into prioritized, actionable threat intelligence — and eventually move into threat hunting and detection engineering full-time.",
};

export type SkillCategory = {
  category: string;
  icon: "shield" | "radar" | "cloud" | "network" | "code" | "terminal";
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "VAPT",
    icon: "shield",
    items: [
      "SQL Injection",
      "XSS",
      "IDOR",
      "CSRF",
      "Auth Bypass",
      "OWASP Top 10",
      "CVSS Scoring",
      "Recon & Enumeration",
    ],
  },
  {
    category: "SOC Operations",
    icon: "radar",
    items: [
      "Threat Detection",
      "SIEM (Splunk)",
      "Incident Response",
      "IOC Analysis",
      "MITRE ATT&CK",
      "Threat Hunting",
      "IR Playbooks",
    ],
  },
  {
    category: "Security Tools",
    icon: "terminal",
    items: [
      "Burp Suite",
      "Nmap",
      "SQLmap",
      "FFUF",
      "Gobuster",
      "Nikto",
      "Wireshark",
      "Metasploit",
      "Kali Linux",
    ],
  },
  {
    category: "Networking",
    icon: "network",
    items: [
      "TCP/IP",
      "DNS",
      "HTTP/S",
      "Packet Analysis",
      "Service Enumeration",
      "Protocol Analysis",
      "Log Analysis",
    ],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Ethical Hacking Intern",
    company: "Hackup Technology",
    location: "Coimbatore, India",
    period: "Dec 2025 – Jan 2026",
    bullets: [
      "Ran authorized black-box penetration tests against 5+ targets using Nmap (-sV -O --script vuln), mapping 5 exposed services — SSH, MySQL, SMTP, IMAP, RPCBind — into structured attack-surface profiles aligned to the OWASP Testing Guide v4.",
      "Identified and validated OWASP Top 10 vulnerabilities, including UNION/blind SQL injection and reflected XSS, using Burp Suite and SQLmap — confirming authentication-bypass risk with a fully documented exploit chain.",
      "Delivered 5 CVSS-scored penetration test reports covering the full attack chain (recon → exploitation → impact) with prioritized remediation roadmaps for every client engagement.",
    ],
    technologies: ["Nmap", "Burp Suite", "SQLmap", "OWASP Testing Guide", "CVSS"],
  },
  {
    role: "Cyber Security Intern",
    company: "Yale IT Skill Hub",
    location: "Coimbatore, India",
    period: "Jun 2025 – Jul 2025",
    bullets: [
      "Correlated SIEM (Splunk) logs across firewall, IDS, and endpoint telemetry, applying IOC analysis and MITRE ATT&CK TTP mapping to surface suspicious activity and prioritize high-risk alerts.",
      "Accelerated threat-triage workflows by structuring alert investigation around documented Incident Response procedures.",
      "Investigated anomalous network behavior and security alerts end-to-end, escalating confirmed threats through formal IR channels.",
    ],
    technologies: ["Splunk", "MITRE ATT&CK", "IOC Analysis", "Incident Response"],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  github: string;
  demo?: string;
  cover: string;
  metrics: { label: string; value: string }[];
  content: {
    problem: string;
    objective: string;
    architecture: string;
    methodology: string[];
    toolsUsed: string[];
    challenges: string;
    solution: string;
    results: string[];
    lessons: string;
    futureImprovements: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "phishing-detection-dashboard",
    title: "Phishing Detection Dashboard",
    tagline:
      "A heuristic URL threat-detection engine with a real-time SOC triage dashboard.",
    stack: ["Python", "Flask", "REST API", "Heuristic Analysis"],
    github: "https://github.com/MUGESHSELVAM/phishing-detection-dashboard",
    cover: "/images/project-phishing.png",
    metrics: [
      { label: "Detection accuracy", value: "85%" },
      { label: "False positives reduced", value: "30%" },
      { label: "Samples analyzed", value: "50+" },
    ],
    content: {
      problem:
        "Phishing URLs are cheap to generate and mutate faster than static blocklists can keep up — SOC teams need a lightweight first-pass filter before a URL ever reaches manual triage.",
      objective:
        "Build a URL threat-detection engine that scores incoming URLs in real time using explainable heuristics, and exposes that scoring through both a dashboard and an API a SIEM could ingest.",
      architecture:
        "A Flask backend exposes a REST scoring endpoint that runs each URL through a heuristic pipeline; results are persisted and rendered on a real-time dashboard for analyst review, with the same endpoint designed for direct SIEM ingestion.",
      methodology: [
        "Extracted lexical and structural features from each URL, including domain entropy, character-level typosquatting distance, and suspicious keyword density.",
        "Weighted and combined heuristics into a composite risk score rather than a single binary signal, to keep the output explainable for an analyst.",
        "Benchmarked the scoring engine against a labeled set of 50+ phishing and legitimate URL samples.",
        "Tuned thresholds specifically to bring down false positives without losing detection sensitivity.",
      ],
      toolsUsed: ["Python", "Flask", "REST API design", "Heuristic scoring"],
      challenges:
        "Typosquatted domains and high-entropy but legitimate URLs (tracking links, shortened URLs) both tend to trigger naive heuristics, inflating false positives.",
      solution:
        "Combined multiple weak heuristics (entropy, typosquatting distance, keyword density) into a single composite score instead of relying on any one signal, which cut false positives by 30% while holding detection accuracy at 85%.",
      results: [
        "85% detection accuracy across the evaluated sample set.",
        "30% reduction in false positives versus single-heuristic scoring.",
        "REST API designed for direct SIEM ingestion, enabling automated phishing triage in a SOC workflow.",
      ],
      lessons:
        "Explainable, composite heuristic scoring is often more useful to a SOC analyst than a black-box classifier — the score has to justify itself in the time it takes to triage an alert.",
      futureImprovements: [
        "Add a lightweight ML classifier as a second-opinion layer on top of the heuristic score.",
        "Integrate live threat-intel feeds for domain reputation lookups.",
        "TODO — add screenshots of the live dashboard once redeployed.",
      ],
    },
  },
  {
    slug: "honeytrap-ids",
    title: "HoneyTrap IDS",
    tagline:
      "A honeypot-based intrusion detection system for real-time brute-force and anomaly capture.",
    stack: ["Python", "Flask", "Intrusion Detection", "Security Monitoring"],
    github: "https://github.com/MUGESHSELVAM/HoneyTrap-IDS",
    cover: "/images/project-honeytrap.png",
    metrics: [
      { label: "Detection mode", value: "Real-time" },
      { label: "Log output", value: "Forensic-ready" },
      { label: "Alerting", value: "Automated" },
    ],
    content: {
      problem:
        "Attackers routinely probe exposed services with brute-force and scanning attempts long before a real breach — most of that early signal is invisible without dedicated instrumentation.",
      objective:
        "Deploy a honeypot that mimics vulnerable services, capture unauthorized access attempts in real time, and produce logs detailed enough to support downstream incident response.",
      architecture:
        "A Flask-based service simulates exposed endpoints, logging every connection attempt with source IP, timing, and payload data; an alerting layer flags brute-force patterns as they happen rather than in batch review.",
      methodology: [
        "Instrumented simulated services to capture connection attempts, credentials tried, and request payloads.",
        "Built pattern detection for brute-force behavior (repeated attempts, credential stuffing patterns) to trigger real-time alerts.",
        "Structured every captured event into a forensic-ready log format suitable for IR handoff.",
        "Added IP tracking to support attacker attribution and repeat-offender detection.",
      ],
      toolsUsed: ["Python", "Flask", "Intrusion detection logic", "Log forensics"],
      challenges:
        "Distinguishing genuine brute-force/attack behavior from benign scanning noise in real time, without drowning the alert feed.",
      solution:
        "Applied pattern-based thresholds (attempt frequency, credential variation) tuned specifically to flag brute-force and anomalous behavior while keeping the alert stream usable.",
      results: [
        "Real-time capture of brute-force attempts, unauthorized access, and anomalous network activity.",
        "Automated alert generation tied to IP tracking for attacker attribution.",
        "Forensic-ready logs structured to plug directly into incident response and threat hunting workflows.",
      ],
      lessons:
        "A honeypot is only as useful as its logging discipline — the value is almost entirely in how cleanly the captured data maps to an IR workflow afterward.",
      futureImprovements: [
        "Add a lightweight web dashboard for live attack visualization.",
        "Extend service simulation to additional protocols beyond the current set.",
        "TODO — publish sample forensic log output.",
      ],
    },
  },
  {
    slug: "tamper-evident-logging-system",
    title: "Tamper-Evident Logging System",
    tagline:
      "A SHA-256 hash-chaining audit framework built to make log tampering detectable.",
    stack: ["Python", "SHA-256", "Digital Forensics", "Audit Logging"],
    github: "https://github.com/MUGESHSELVAM/Tamper-Evident-Logging-System",
    cover: "/images/project-logging.png",
    metrics: [
      { label: "Hashing", value: "SHA-256" },
      { label: "Integrity model", value: "Hash-chained" },
      { label: "Use case", value: "Forensic evidence" },
    ],
    content: {
      problem:
        "Logs are the backbone of any forensic investigation — but if they can be silently edited after the fact, they stop being evidence.",
      objective:
        "Design an audit-logging framework where any unauthorized modification to historical log entries is cryptographically detectable, preserving forensic integrity.",
      architecture:
        "Each log entry is hashed with SHA-256 and chained to the hash of the previous entry, so altering any single record breaks the chain for every subsequent entry — the same principle behind blockchain integrity, applied to audit logs.",
      methodology: [
        "Designed the hash-chain schema linking each new log entry to the previous entry's hash.",
        "Implemented verification tooling to walk the chain and flag the exact point of tampering, if any.",
        "Built evidence-preservation handling so verified logs could be exported for forensic review.",
      ],
      toolsUsed: ["Python", "SHA-256", "Hash-chaining design", "Audit logging"],
      challenges:
        "Keeping the integrity verification computationally cheap enough to run routinely, not just during an incident.",
      solution:
        "Kept the chain verification to a single linear pass over stored hashes, so integrity checks stay lightweight enough to run on a schedule rather than only reactively.",
      results: [
        "Any unauthorized modification to a historical log entry is detectable via hash-chain verification.",
        "Evidence-preservation mechanisms support direct use in digital forensic investigations.",
      ],
      lessons:
        "Integrity guarantees are only useful if verification is cheap enough that people actually run it — a scheme nobody checks provides no real assurance.",
      futureImprovements: [
        "Add periodic automated integrity checks with alerting on failure.",
        "Explore anchoring chain checkpoints externally for stronger tamper-evidence.",
        "TODO — add a CLI walkthrough demo.",
      ],
    },
  },
];

export const securityResearch = {
  intro:
    "Beyond internships, I run independent security assessments following responsible disclosure practice — treating every engagement like it will end in a formal report, not just a finding.",
  disclosures: [
    {
      title: "Vulnerability Assessment — Leading FMCG Company",
      tag: "CERT-In Disclosure",
      summary:
        "Conducted passive OSINT, attack surface mapping, and service enumeration on a live FMCG environment, identifying five publicly accessible internet-facing services and administrative interfaces. Prepared a structured responsible disclosure report with risk assessment and remediation recommendations, and submitted it to CERT-In following responsible disclosure practice.",
      methodology: [
        "Passive OSINT",
        "Attack surface mapping",
        "Service enumeration",
        "Risk assessment",
        "Structured remediation reporting",
      ],
    },
  ],
  practiceAreas: [
    {
      title: "Responsible Disclosure",
      description:
        "Reporting confirmed findings through proper channels — CERT-In and direct organizational contact — with remediation guidance, not public exposure.",
    },
    {
      title: "Recon Methodology",
      description:
        "Passive OSINT and enumeration first, always scoped to authorized targets, before any active testing begins.",
    },
    {
      title: "OWASP Testing",
      description:
        "Structured testing against the OWASP Testing Guide v4 and OWASP Top 10 — SQLi, XSS, IDOR, CSRF, auth bypass.",
    },
    {
      title: "CVSS Analysis",
      description:
        "Scoring every validated finding against CVSS to translate technical risk into a prioritization signal stakeholders can act on.",
    },
  ],
};

export type Certification = {
  name: string;
  issuer: string;
  category: "Foundations" | "Threat & Defense" | "Practical Labs" | "Applied / Simulation";
};

export const certifications: Certification[] = [
  { name: "Cyber Threat Management", issuer: "Cisco", category: "Threat & Defense" },
  { name: "Network Defense", issuer: "Cisco", category: "Threat & Defense" },
  { name: "Endpoint Security", issuer: "Cisco", category: "Threat & Defense" },
  { name: "Cybersecurity Fundamentals", issuer: "IBM", category: "Foundations" },
  { name: "Cybersecurity and Privacy (Elite)", issuer: "NPTEL — IIT Bombay", category: "Foundations" },
  {
    name: "Introduction to Critical Infrastructure Protection (ICIP)",
    issuer: "OPSWAT",
    category: "Foundations",
  },
  { name: "IAM & Threat Analysis Job Simulation", issuer: "Deloitte (Forage)", category: "Applied / Simulation" },
  { name: "Phishing Job Simulation", issuer: "Mastercard (Forage)", category: "Applied / Simulation" },
  { name: "Incident Response Job Simulation", issuer: "Tata (Forage)", category: "Applied / Simulation" },
  {
    name: "40+ Labs — Web Exploitation, Privilege Escalation, CTF",
    issuer: "TryHackMe / Hack The Box",
    category: "Practical Labs",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
