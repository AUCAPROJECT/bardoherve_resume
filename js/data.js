const portfolioData = {
  name: "Barnardo Ntaganira Herve",
  title: "Software Engineer | Full-Stack Developer",
  location: "Kigali, Rwanda",
  email: "hervebardo@gmail.com",
  phone: "+250-783-500-656",
  summary:
    "Full-Stack Developer with over 3+ years of experience specializing in .NET Core, Spring Boot microservices, and React/TypeScript. Proven track record of architecting clean, scalable systems and translating complex requirements into seamless digital products.",

  experience: [
    {
      company: "Orion System and Design Ltd",
      period: "April 2026 – Present",
      role: "Software Engineer | C# (.NET Core) Full Stack Developer",
      highlights: [
        "Lead development on a financial middleware platform that manages inward and outward payment flows between partner banks.",
        "Build and maintain high-scale .NET Core services for real-time transaction routing, settlement, and reconciliation.",
        "Ensure mission-critical reliability and data security for cross-bank payment interoperability infrastructure.",
      ],
    },
    {
      company: "Guaranty Trust Bank (Rwanda) plc",
      period: "2023 – March 2026",
      role: "Software Engineer | Full Stack Developer",
      highlights: [
        "Owned the USSD *600# platform enabling customers to access accounts and execute transfers from any mobile phone.",
        "Delivered GAPS (GTBank Automated Payment Systems), a corporate internet banking platform for business customers.",
        "Designed and built end-to-end API integrations connecting customer systems and third-party vendor platforms to core banking.",
        "Improved system performance and data integrity through legacy C# refactoring and SQL stored procedure optimization.",
      ],
    },
    {
      company: "SOLVIT Africa",
      period: "2022 – 2023",
      role: "Backend Developer",
      highlights: [
        "Built backend modules for internal platforms using Node.js and Python, from feature design through production deployment.",
        "Containerized services with Docker to standardize environments and streamline release cycles across the team.",
        "Supported the full software lifecycle — requirements, implementation, testing, and deployment — in an agile delivery setting.",
        "Earned SOLVIT Africa Certified Backend Developer credential while delivering production-ready backend solutions.",
      ],
    },
    {
      company: "ANDELA (Rwanda)",
      period: "2019 – 2020",
      role: "Full-Stack Developer",
      highlights: [
        "Built responsive, user-centric web interfaces with JavaScript and CSS, integrated with RESTful APIs in fast-paced sprints.",
        "Delivered frontend features in a remote-first, agile team — practicing code reviews, pair programming, and iterative delivery.",
        "Strengthened full-stack fundamentals that became the foundation for later work in banking and fintech systems.",
      ],
    },
  ],

  skills: [
    {
      category: "Backend",
      items: ["C# (.NET Core)", "Java (Spring Boot Microservice)", "Python (Django)", "Node.js"],
    },
    {
      category: "Frontend",
      items: ["React.js", "Redux", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3"],
    },
    {
      category: "Web Services",
      items: ["RESTful APIs", "SOAP", "Microservices", "GraphQL"],
    },
    {
      category: "Databases",
      items: ["SQL Server (Advanced Stored Procedures)", "PostgreSQL", "MongoDB"],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "CI/CD (GitHub Actions)", "Nginx", "Git", "Linux", "Postman"],
    },
    {
      category: "Methodologies",
      items: ["Agile / Scrum", "SOLID Principles", "Clean Architecture", "Remote Collaboration"],
    },
  ],

  education: [
    {
      title: "Bachelor of Science in IT",
      subtitle: "Software Engineering",
      institution: "Adventist University of Central Africa",
      period: "2019 – 2025",
    },
  ],

  certifications: [
    "Certified Backend Developer — SOLVIT Africa",
    "Certified Network Essentials — Cisco",
  ],

  softSkills: [
    "Problem-Solving & Critical Thinking",
    "Communication",
    "Teamwork & Collaboration",
    "Adaptability & Time Management",
  ],

  blogs: [
    {
      id: "gtbank-banking-systems",
      title: "Building Mission-Critical Banking Systems at GT Bank Rwanda",
      company: "Guaranty Trust Bank (Rwanda) plc",
      period: "2023 – March 2026",
      excerpt:
        "From USSD *600# and corporate internet banking to custom API integrations — how I delivered the core digital channels that connected GT Bank to its customers and partners.",
      tags: ["C#", ".NET Core", "Java", "React", "USSD", "REST APIs", "SQL Server"],
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "During my three years at Guaranty Trust Bank Rwanda, I worked at the center of the bank's digital operations. My role went beyond writing code — I owned the systems that customers and corporate clients relied on every day to move money, check balances, and connect their businesses to the bank.",
            "I contributed across three major pillars: retail USSD banking, corporate internet banking, and external API integrations. Each required a different mindset — user simplicity on USSD, enterprise-grade security for corporates, and strict contract-driven design for third-party integrations.",
          ],
        },
        {
          heading: "USSD *600# — Banking in Every Customer's Pocket",
          paragraphs: [
            "I worked on the USSD *600# system, the bank's primary self-service channel for retail customers. Through a simple dial code, customers could access their accounts, check balances, and initiate transfers without needing a smartphone or internet connection.",
          ],
          achievements: [
            "Built and maintained backend services powering account lookup, authentication, and fund transfer flows over USSD.",
            "Ensured transaction reliability and session security for a channel used daily by thousands of customers.",
            "Collaborated with telecom and core banking teams to keep the *600# service stable under high transaction volume.",
          ],
        },
        {
          heading: "GAPS — Corporate Internet Banking",
          paragraphs: [
            "I contributed to GAPS (GTBank Automated Payment Systems), the bank's internet banking platform built for corporate and business customers. Unlike retail banking, GAPS had to support bulk payments, multi-user approvals, and complex account structures.",
          ],
          achievements: [
            "Developed full-stack features using C#, Java, and React.js for corporate payment workflows and admin dashboards.",
            "Translated business requirements from corporate banking teams into secure, scalable technical designs.",
            "Delivered responsive admin interfaces that gave operations teams real-time visibility into payment activity.",
          ],
        },
        {
          heading: "API Integrations — Connecting the Bank to the Ecosystem",
          paragraphs: [
            "A significant part of my work involved designing and building APIs that connected external systems to GT Bank's core infrastructure. These included customer-owned platforms that needed direct banking access, as well as vendor systems requiring secure integration with the bank's payment rails.",
          ],
          achievements: [
            "Designed and developed RESTful APIs from scratch for customer and vendor integration projects.",
            "Implemented authentication, validation, and error-handling standards to meet financial-grade security requirements.",
            "Served as the primary developer on integration projects, owning the API lifecycle from design through deployment.",
          ],
        },
        {
          heading: "What This Demonstrates",
          paragraphs: [
            "This experience shaped my ability to work across the full stack in regulated financial environments — from customer-facing channels to backend services and external integrations. I learned to balance speed of delivery with the zero-tolerance-for-failure standard that banking demands.",
          ],
        },
      ],
    },
    {
      id: "orion-payment-middleware",
      title: "Engineering Cross-Bank Payment Flows at Orion",
      company: "Orion System and Design Ltd",
      period: "April 2026 – Present",
      excerpt:
        "How I build and maintain financial middleware that routes inward and outward payments between partner banks — the infrastructure behind modern digital banking interoperability.",
      tags: ["C#", ".NET Core", "Microservices", "Payment Systems", "Middleware", "FinTech"],
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "At Orion System and Design, I focus on a core financial middleware platform that handles the inward and outward payment flows for banks the company serves. This system sits at the heart of payment interoperability — routing transactions between institutions, ensuring settlement accuracy, and maintaining the reliability that financial institutions depend on.",
          ],
        },
        {
          heading: "Inward & Outward Payment Processing",
          paragraphs: [
            "The platform I work on manages two critical directions of money movement. Inward payments handle funds coming into a bank from external sources — other banks, payment networks, or partner institutions. Outward payments route customer-initiated transactions to their destination, whether that is another domestic bank or an external payment channel.",
          ],
          achievements: [
            "Design and maintain .NET Core services that process real-time inward and outward transaction requests.",
            "Build middleware logic that validates, routes, and reconciles payments across multiple banking partners.",
            "Ensure high availability and fault tolerance for a system where downtime directly impacts financial operations.",
          ],
        },
        {
          heading: "Architecture & Security",
          paragraphs: [
            "Working on payment middleware requires strict adherence to clean architecture and security best practices. Every transaction must be traceable, every failure must be recoverable, and every integration point must be secured against unauthorized access.",
          ],
          achievements: [
            "Apply SOLID principles and clean architecture patterns to keep the middleware modular and maintainable.",
            "Implement strict data security controls for sensitive financial data in transit and at rest.",
            "Collaborate with partner banks to align on message formats, settlement rules, and integration protocols.",
          ],
        },
        {
          heading: "What This Demonstrates",
          paragraphs: [
            "This role deepens my expertise in financial middleware and payment interoperability — the layer that makes modern digital banking possible. It builds directly on my GT Bank experience with APIs and transaction systems, now applied at a multi-bank scale where reliability and precision are non-negotiable.",
          ],
        },
      ],
    },
    {
      id: "solvit-backend-platforms",
      title: "Building Backend Foundations at SOLVIT Africa",
      company: "SOLVIT Africa",
      period: "2022 – 2023",
      excerpt:
        "How I developed backend features for internal platforms, embraced containerized deployment with Docker, and earned my Certified Backend Developer credential.",
      tags: ["Node.js", "Python", "Docker", "Backend", "Agile"],
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "At SOLVIT Africa, I worked as a Backend Developer building features for internal platforms that supported the organization's day-to-day operations. This role marked a key step in my career — moving from structured training into production backend development with real delivery expectations.",
            "I worked primarily with Node.js and Python, contributing across the full lifecycle from initial design through testing and deployment. The experience also led to my SOLVIT Africa Certified Backend Developer credential.",
          ],
        },
        {
          heading: "Backend Feature Development",
          paragraphs: [
            "My core responsibility was implementing backend features that powered internal tools and services. Each feature required understanding business requirements, designing a clean API or service layer, and delivering code that was testable and maintainable.",
          ],
          achievements: [
            "Developed backend modules and API endpoints using Node.js and Python for internal platform needs.",
            "Wrote structured, readable code following team conventions and backend best practices.",
            "Participated in code reviews and iterative refinement to improve feature quality before release.",
          ],
        },
        {
          heading: "Docker & Deployment",
          paragraphs: [
            "SOLVIT emphasized modern deployment practices. I worked with Docker-based containerization to package services consistently and reduce environment-related issues between development and production.",
          ],
          achievements: [
            "Containerized backend services with Docker for reproducible builds and deployments.",
            "Supported testing and release workflows across design, staging, and production environments.",
            "Gained hands-on experience with the full delivery pipeline — not just writing code, but shipping it.",
          ],
        },
        {
          heading: "What This Demonstrates",
          paragraphs: [
            "SOLVIT Africa strengthened my backend engineering discipline and introduced me to containerized deployment — skills I later applied at scale in banking environments. It confirmed that I could own features end-to-end, not just implement isolated tasks.",
          ],
        },
      ],
    },
    {
      id: "andela-fullstack-training",
      title: "Launching My Full-Stack Journey at ANDELA",
      company: "ANDELA (Rwanda)",
      period: "2019 – 2020",
      excerpt:
        "How ANDELA's remote-first, agile program shaped my ability to build responsive web interfaces, integrate RESTful APIs, and deliver under real sprint pressure.",
      tags: ["JavaScript", "CSS", "REST APIs", "Agile", "Remote Collaboration"],
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "ANDELA Rwanda was where I formally entered professional software development. As a Full-Stack Developer in their training program, I learned to build production-quality web applications in a remote-first, agile environment — the same working model I use today in fintech and banking teams.",
          ],
        },
        {
          heading: "Frontend & API Integration",
          paragraphs: [
            "My primary focus was building responsive, user-centric web interfaces using JavaScript and CSS. Every frontend feature had to connect cleanly to backend services through RESTful APIs — teaching me early that full-stack development is about seamless end-to-end flow, not isolated layers.",
          ],
          achievements: [
            "Built responsive web interfaces that worked across devices and screen sizes.",
            "Integrated frontend components with RESTful APIs for data-driven user experiences.",
            "Delivered features within tight sprint deadlines alongside distributed team members.",
          ],
        },
        {
          heading: "Agile & Remote Collaboration",
          paragraphs: [
            "ANDELA's program mirrored real industry conditions: daily standups, sprint planning, code reviews, and remote collaboration. This environment taught me how to communicate progress clearly, accept feedback, and ship iteratively.",
          ],
          achievements: [
            "Consistently delivered sprint commitments in a fast-moving agile development team.",
            "Collaborated remotely with mentors and peers across code reviews and pair programming sessions.",
            "Developed the adaptability and communication skills essential for later enterprise and fintech roles.",
          ],
        },
        {
          heading: "What This Demonstrates",
          paragraphs: [
            "ANDELA laid the groundwork for everything that followed — from SOLVIT's backend work to GT Bank's mission-critical systems and Orion's payment middleware. It proved I could learn quickly, work remotely, and deliver under pressure from the very start of my career.",
          ],
        },
      ],
    },
  ],
};
