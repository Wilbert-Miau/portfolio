export type Language = "en" | "es";

export const messages = {
  en: {
    meta: {
      title: "Wilbert Castillo | Backend & Infrastructure Developer",
      description:
        "Portfolio of Wilbert Enrrique Castillo Nolasco - Backend & Infrastructure Developer",
    },
    nav: {
      items: [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Certifications", href: "#certifications" },
        { name: "Contact", href: "#contact" },
      ],
      toggleMenuAria: "Toggle menu",
    },
    hero: {
      badge: "Available for new opportunities",
      titleTop: "Backend & Infrastructure",
      titleAccent: "Developer",
      subtitle:
        "I build systems that save money, run fast, and never go down. 2+ years turning infrastructure into competitive advantage through strategic optimization and event-driven architecture.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadResume: "Download Resume",
    },
    about: {
      sectionTitle: "About Me",
      lead: "Engineering Efficiency. Maximizing Value.",
      paragraphs: [
        "I turn infrastructure into a competitive advantage.",
        "My focus is simple: cut costs, boost speed, and ensure reliability. I make strategic infrastructure decisions, whether cloud, hybrid, or self-hosted, based on what delivers the best value. Through SQL Server query monitoring and index optimization, I have slashed production latency by 90% (700ms to <50ms).",
        "I do not just write code. I build scalable solutions that drive profit and stability.",
      ],
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      categories: [
        {
          title: "Platform Services",
          items: [
            "Docker & Containerization",
            "MinIO Object Storage",
            "Caddy Reverse Proxy",
            "Self-hosted GitHub Actions",
            "Linux Servers",
            "VMware vSphere",
            "Windows Server",
          ],
        },
        {
          title: "Cloud Platforms",
          items: ["AWS (CloudFront, S3, EC2, VPC)", "Azure", "GCP (voiceagents)"],
        },
        {
          title: "Streaming & Messaging",
          items: [
            "Asterisk Manager Interface (AMI)",
            "MediaMTX Streaming",
            "SignalR WebSockets",
            "RabbitMQ Message Broker",
          ],
        },
        {
          title: "Backend Development",
          items: [
            "C# .NET APIs",
            "Python / FastAPI",
            "Go (Golang)",
            "SQL Server Optimization",
            "Event-Driven Architecture",
          ],
        },
        {
          title: "Monitoring & Security",
          items: ["Sentry Error Tracking", "Grafana Dashboards"],
        },
        {
          title: "Management & Soft Skills",
          highlightCategory: true,
          items: [
            "Problem Solving & Root Cause Analysis",
            "Cross-Functional Collaboration",
            "Strategic Cost Optimization",
            "Technical Documentation",
            "Adaptability",
          ],
        },
      ],
      highlightedSkills: [
        "SQL Server Optimization",
        "Linux Servers",
        "C# .NET APIs",
        "Problem Solving & Root Cause Analysis",
      ],
    },
    projects: {
      sectionTitle: "Featured Projects",
      challengeLabel: "The Challenge",
      items: [
        {
          title: "Comprehensive Administrative Platform",
          problem:
            "The company needed to shift from simple financial control to generating digital experiences to increase sales. Legacy systems failed to meet specific modern needs, such as real-time management of digital signage.",
          description:
            "A multi-module system for funeral service management. Features include equipment tracking, AI-generated tributes, real-time digital signage control, document storage, and live camera streaming. Includes client access portals and WhatsApp integration. Currently expanding with real-time slideshow tributes.",
          tags: [
            "C# .NET",
            "Angular",
            "SignalR",
            "MediaMTX",
            "RabbitMQ",
            "MinIO",
            "OpenAI API",
            "Docker",
          ],
        },
        {
          title: "Event-Driven Receipt System",
          problem:
            "Receipts were previously paper-only. The company wanted to modernize by offering digital receipts to clients, requiring a scalable system to handle the transition.",
          description:
            "Scalable processing system for handling high-volume receipt data. Uses message queues for asynchronous processing and reliability.",
          tags: ["RabbitMQ", "Background Workers", "FastAPI", "Python", "Docker"],
          hasImage: true,
        },
        {
          title: "SQL Server Optimization & Payment Monitor",
          problem:
            "The previous process was painful and inefficient, causing employees to lose time and become frustrated due to critical failures and lack of visibility during high-traffic periods.",
          description:
            "Optimized database performance to resolve critical failures in the payment monitor during high-traffic periods. Implemented indexing, normalization, and stored procedure tuning to ensure stability and efficiency.",
          tags: [
            "SQL Server",
            "Performance Tuning",
            "Database Normalization",
            "Stored Procedures",
            "Monitoring",
          ],
        },
      ],
    },
    certifications: {
      sectionTitle: "Certifications",
      verifyCta: "View More & Verify on LinkedIn",
    },
    contact: {
      sectionTitle: "Get In Touch",
      description:
        "I am always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      copyrightOwner: "Wilbert Enrrique Castillo Nolasco",
      rights: "All rights reserved.",
      builtWith: "Built with",
    },
  },
  es: {
    meta: {
      title: "Wilbert Castillo | Desarrollador Backend e Infraestructura",
      description:
        "Portafolio de Wilbert Enrrique Castillo Nolasco - Desarrollador Backend e Infraestructura",
    },
    nav: {
      items: [
        { name: "Sobre mí", href: "#about" },
        { name: "Habilidades", href: "#skills" },
        { name: "Proyectos", href: "#projects" },
        { name: "Certificaciones", href: "#certifications" },
        { name: "Contacto", href: "#contact" },
      ],
      toggleMenuAria: "Abrir menú",
    },
    hero: {
      badge: "Disponible para nuevas oportunidades",
      titleTop: "Desarrollador de",
      titleAccent: "Backend e Infraestructura",
      subtitle:
        "Construyo sistemas que ahorran dinero, corren rápido y no se caen. Más de 2 años convirtiendo infraestructura en ventaja competitiva con optimización estratégica y arquitectura orientada a eventos.",
      viewProjects: "Ver proyectos",
      contactMe: "Contáctame",
      downloadResume: "Descargar CV",
    },
    about: {
      sectionTitle: "Sobre mí",
      lead: "Ingeniería eficiente. Máximo valor.",
      paragraphs: [
        "Convierto infraestructura en una ventaja competitiva.",
        "Mi enfoque es simple: reducir costos, aumentar velocidad y asegurar confiabilidad. Tomo decisiones estratégicas de infraestructura, ya sea cloud, híbrida o self-hosted, según lo que entregue mayor valor. Con monitoreo de consultas e indexación en SQL Server, reduje la latencia en producción en 90% (de 700ms a <50ms).",
        "No solo escribo código. Construyo soluciones escalables que impulsan rentabilidad y estabilidad.",
      ],
    },
    skills: {
      sectionTitle: "Habilidades y experiencia",
      categories: [
        {
          title: "Servicios de plataforma",
          items: [
            "Docker & Containerization",
            "MinIO Object Storage",
            "Caddy Reverse Proxy",
            "GitHub Actions autohospedado",
            "Servidores Linux",
            "VMware vSphere",
            "Windows Server",
          ],
        },
        {
          title: "Plataformas cloud",
          items: ["AWS (CloudFront, S3, EC2, VPC)", "Azure", "GCP (voiceagents)"],
        },
        {
          title: "Streaming y mensajería",
          items: [
            "Asterisk Manager Interface (AMI)",
            "MediaMTX Streaming",
            "SignalR WebSockets",
            "RabbitMQ Message Broker",
          ],
        },
        {
          title: "Desarrollo backend",
          items: [
            "C# .NET APIs",
            "Python / FastAPI",
            "Go (Golang)",
            "Optimización SQL Server",
            "Event-Driven Architecture",
          ],
        },
        {
          title: "Monitoreo y seguridad",
          items: ["Sentry Error Tracking", "Grafana Dashboards"],
        },
        {
          title: "Gestión y habilidades blandas",
          highlightCategory: true,
          items: [
            "Resolución de problemas y análisis de causa raíz",
            "Colaboración cross-functional",
            "Optimización estratégica de costos",
            "Documentación técnica",
            "Adaptabilidad",
          ],
        },
      ],
      highlightedSkills: [
        "Optimización SQL Server",
        "Servidores Linux",
        "C# .NET APIs",
        "Resolución de problemas y análisis de causa raíz",
      ],
    },
    projects: {
      sectionTitle: "Proyectos destacados",
      challengeLabel: "El desafío",
      items: [
        {
          title: "Plataforma administrativa integral",
          problem:
            "La empresa necesitaba pasar de un control financiero simple a experiencias digitales que impulsaran ventas. Los sistemas legacy no cubrían necesidades modernas como gestión en tiempo real de señalización digital.",
          description:
            "Sistema modular para gestión de servicios funerarios. Incluye control de equipos, homenajes con IA, señalización digital en tiempo real, almacenamiento documental y streaming en vivo. También incorpora portales para clientes e integración con WhatsApp. Actualmente en expansión con slideshow de homenajes en tiempo real.",
          tags: [
            "C# .NET",
            "Angular",
            "SignalR",
            "MediaMTX",
            "RabbitMQ",
            "MinIO",
            "OpenAI API",
            "Docker",
          ],
        },
        {
          title: "Sistema de recibos orientado a eventos",
          problem:
            "Antes, los recibos eran solo en papel. La empresa quería modernizarse ofreciendo recibos digitales, lo que requería un sistema escalable para soportar la transición.",
          description:
            "Sistema escalable para procesar alto volumen de datos de recibos. Usa colas de mensajes para procesamiento asíncrono y mayor confiabilidad.",
          tags: ["RabbitMQ", "Background Workers", "FastAPI", "Python", "Docker"],
          hasImage: true,
        },
        {
          title: "Optimización SQL Server y monitor de pagos",
          problem:
            "El proceso anterior era doloroso e ineficiente; el equipo perdía tiempo y se frustraba por fallas críticas y falta de visibilidad en picos de tráfico.",
          description:
            "Optimicé el rendimiento de base de datos para resolver fallas críticas del monitor de pagos en periodos de alta demanda. Implementé indexación, normalización y tuning de stored procedures para asegurar estabilidad y eficiencia.",
          tags: [
            "SQL Server",
            "Performance Tuning",
            "Database Normalization",
            "Stored Procedures",
            "Monitoring",
          ],
        },
      ],
    },
    certifications: {
      sectionTitle: "Certificaciones",
      verifyCta: "Ver más y validar en LinkedIn",
    },
    contact: {
      sectionTitle: "Hablemos",
      description:
        "Siempre me interesa conocer nuevos proyectos y oportunidades. Si tienes una pregunta o solo quieres saludar, escríbeme.",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      copyrightOwner: "Wilbert Enrrique Castillo Nolasco",
      rights: "Todos los derechos reservados.",
      builtWith: "Hecho con",
    },
  },
} as const;

export type MessagePack = (typeof messages)[Language];
