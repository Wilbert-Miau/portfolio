export type Language = "en" | "es";

export const messages = {
  en: {
    meta: {
      title: "Wilbert Castillo | Backend & Platform Engineer",
      description:
        "Portfolio of Wilbert Enrrique Castillo Nolasco - Backend & Platform Engineer",
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
      titleTop: "Backend & Platform",
      titleAccent: "Engineer",
      subtitle:
        "I build and support business-critical software. 3+ years working with .NET, SQL Server, and distributed systems.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadResume: "Download Resume",
    },
    about: {
      sectionTitle: "About Me",
      lead: "Engineering Efficiency. Maximizing Value.",
      paragraphs: [
        "I turn infrastructure into a competitive advantage.",
        "At Memorial Amor Eterno (April 2024 to August 2026), I built and operated a self-hosted ASP.NET Core platform spanning 15+ business modules and 227 registered accounts.",
        "I refactored about 10 stored procedures and shared tables and indexes in SQL Server. One key collections query went from about 700 ms to under 50 ms.",
        "As a software consultant for Enercom, I built a .NET worker to sync projects, inspections, and surveys from Procore to SQL Server. I earned my degree in Administrative Informatics from UNAH in August 2026.",
      ],
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      categories: [
        {
          title: "Platform Services",
          items: [
            "Docker & Containerization",
            "Kubernetes (k3s)",
            "MinIO Object Storage",
            "Caddy Reverse Proxy",
            "Self-hosted GitHub Actions",
            "Ansible",
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
            "Asterisk ARI",
            "MediaMTX Streaming",
            "SignalR WebSockets",
            "RabbitMQ Message Broker",
          ],
        },
        {
          title: "Backend Development",
          items: [
            "C# .NET APIs",
            "Kotlin (Android)",
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
      disclaimer:
        "The repositories behind these projects are private, owned by the companies involved — these are case studies of the work, not linked source code.",
      readCaseStudy: "Read the case study →",
      items: [
        {
          title: "Comprehensive Administrative Platform",
          problem:
            "The company needed to shift from simple financial control to generating digital experiences to increase sales. Legacy systems failed to meet specific modern needs, such as real-time management of digital signage.",
          description:
            "A multi-module system for funeral service management. Features include equipment tracking, AI-generated tribute text and original songs (OpenAI + Suno), real-time digital signage control, document storage, and live camera streaming. Includes client access portals and WhatsApp integration.",
          tags: [
            "C# .NET",
            "Angular",
            "SignalR",
            "MediaMTX",
            "RabbitMQ",
            "MinIO",
            "OpenAI API",
            "Suno API",
            "Docker",
          ],
        },
        {
          title: "Event-Driven Receipt System",
          problem:
            "Receipts were previously paper-only. The company wanted to modernize by offering digital receipts to clients, requiring a scalable system to handle the transition.",
          description:
            "Built asynchronous receipt processing with RabbitMQ, .NET, and Python/FastAPI to decouple digital delivery from core ERP workflows.",
          tags: ["RabbitMQ", ".NET", "Background Workers", "FastAPI", "Python", "Docker"],
          hasImage: true,
          imageKey: "receipts",
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
        {
          title: "Offline-First Android Sales App",
          problem:
            "Field sales reps need to close and print a sale with zero connectivity, with no room for a duplicate or lost sale if the app crashes mid-retry — a different consistency problem than the company's Logistics Android app already solved with a different strategy (delta sync).",
          description:
            "Replaced a vendor-locked sales app with a Kotlin and Jetpack Compose client and ASP.NET Core APIs. Designed durable local transactions, queued sync, retries, and idempotency so sellers could complete sales without cell service. Sellers reported completing sales in under five minutes, compared with 30 minutes or more during failures of the previous system.",
          tags: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Offline-First", "ASP.NET Core"],
        },
        {
          title: "Self-Hosted Platform Edge & Orchestration",
          problem:
            "A growing family of internal apps needed unified routing, TLS, live camera and event streaming, and observability — without taking on public cloud costs or lock-in.",
          description:
            "Designed and operated the platform edge for the entire AE Suite: Caddy reverse proxy, k3s manifests and overlays, MediaMTX for HLS/WebRTC streaming, and a Docker Compose monitoring stack (Prometheus, Grafana, cAdvisor, PostgreSQL, Redis), plus backup automation and a CI/CD pipeline with automated k3s deployments.",
          tags: [
            "k3s",
            "Caddy",
            "Docker",
            "MediaMTX",
            "Prometheus",
            "Grafana",
            "Self-Hosted Infrastructure",
          ],
          hasImage: true,
          imageKey: "platform-architecture",
          caseStudySlug: "platform-edge",
        },
        {
          title: "PBX Call Automation & Voice Agent",
          problem:
            "Before committing to a full contact-center platform, the team needed to validate whether automated intent handling and spoken responses could actually work for inbound customer calls.",
          description:
            "Proof-of-concept Go service bridging Issabel/Asterisk ARI call events with Google Cloud Text-to-Speech for automated call handling and playback, paired with a companion voice-agent configuration layer defining intents, tools, and generative response behavior — built to validate the approach before any production commitment.",
          tags: ["Go", "Asterisk ARI", "GCP", "Text-to-Speech", "Voice Agents", "Proof of Concept"],
        },
        {
          title: "Legacy ERP Modernization",
          problem:
            "Core operations — sales, receipts, viewing-room scheduling — ran on a decade-old VB.NET/GeneXus ERP with no real-time capability, and the new platform's API was querying straight across into that legacy database with broad, ungoverned permissions.",
          description:
            "Kept the legacy VB.NET/GeneXus system running in production while designing and shipping its real-time replacement (Angular, C#, SignalR, live streaming) feature by feature. Closed the underlying security gap by authoring an architecture decision record that replaced direct cross-database queries into the legacy ERP with a governed API boundary and least-privilege database roles.",
          tags: [
            "VB.NET",
            "Legacy Modernization",
            "C#",
            "Angular",
            "SignalR",
            "Architecture Decision Records",
          ],
          caseStudySlug: "legacy-erp-modernization",
        },
      ],
    },
    caseStudies: {
      backLink: "← Back to Projects",
      items: {
        "platform-edge": {
          title: "Self-Hosted Platform Edge & Orchestration",
          summary:
            "How I designed and operated the routing, streaming, and observability layer behind Amor Eterno's entire operations platform — without adopting a public cloud.",
          sections: [
            {
              heading: "The Problem",
              body: "By 2025, Amor Eterno's operations had grown into a family of separate applications — an Angular control center, a Svelte monitor room, a public event-signage site, and two Android apps — all needing to reach one shared backend securely, over TLS, without each app reinventing routing, certificates, or deployment. Live camera and event streaming added another requirement entirely: low-latency HLS/WebRTC playback that a simple reverse proxy alone couldn't provide.",
            },
            {
              heading: "The Architecture",
              body: "Caddy sits at the edge, terminating TLS and routing every public domain (suite.amoreternohn.com, live.amoreternohn.com, and others) to the right backend service. Behind it, k3s manifests and overlays run the production and development API deployments, while a Docker Compose stack runs MediaMTX for camera/NVR ingestion and HLS/WebRTC playback, alongside PostgreSQL and Redis for the services that need them.",
            },
            {
              heading: "Observability & Operations",
              body: "A Prometheus, Grafana, and cAdvisor stack monitors container health and resource usage across the platform, backed by scripted k3s state backups and RTSP channel health checks. Deployments are automated end-to-end: GitHub Actions workflows push development and production builds straight to k3s, with separate pipelines for API code and EF Core database migrations, so a release never depends on a manual step on a server I have to remember.",
            },
            {
              heading: "Why It Matters",
              body: "Every application in the AE Suite family — internal and public — depends on this edge being right. Designing and operating it solo meant every routing change, certificate renewal, and deployment pipeline had one owner end-to-end, from the Caddyfile to the k3s overlay to the Grafana dashboard that tells me if it's actually working.",
            },
          ],
          diagram: "platform-architecture",
        },
        "legacy-erp-modernization": {
          title: "Legacy ERP Modernization",
          summary:
            "Closing a cross-database security gap while shipping the real-time platform that replaces a decade-old ERP, one module at a time.",
          sections: [
            {
              heading: "The Problem",
              body: "Amor Eterno's core operations — sales, receipts, viewing-room scheduling — ran for over a decade on a VB.NET/GeneXus ERP built around a third-party database (FUNAMOR) the company doesn't own the source for. As the new platform's backend grew, it queried straight across into that legacy database with broad SELECT permissions on multiple tables — the application login could read far more than any single feature required, every schema change on the other side risked breaking the new platform without warning, and there was no auditable interface between the two systems.",
            },
            {
              heading: "The Decision",
              body: "I documented the problem and the fix as a formal architecture decision record: replace direct cross-database SQL with a governed boundary. Rather than the API reaching into the legacy system's internal tables, database roles were scoped to least privilege, and a controlled interface — views and stored procedures rather than raw table access — became the only path across the boundary. A second ADR defined the specific roles and permissions each identity is allowed to hold.",
            },
            {
              heading: "The Parallel Build",
              body: "None of this happened in a vacuum with downtime to spare — the legacy VB.NET system kept running production sales, collections, and viewing-room scheduling the entire time. Its real-time replacement (Angular frontend, C# backend, SignalR for live updates, MediaMTX for streaming) was designed and shipped feature by feature, so each capability — monitors, viewing rooms, receipts — moved over only once its modern counterpart was proven.",
            },
            {
              heading: "Why It Matters",
              body: "This wasn't a UI refresh. It was closing a real security and coupling risk in a live production system while simultaneously building and shipping its replacement — the kind of decision that has to be made deliberately, documented so the reasoning survives past the person who made it, and executed without breaking the business it supports.",
            },
          ],
        },
      },
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
      title: "Wilbert Castillo | Ingeniero de Backend y Plataforma",
      description:
        "Portafolio de Wilbert Enrrique Castillo Nolasco - Ingeniero de Backend y Plataforma",
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
      titleTop: "Ingeniero de",
      titleAccent: "Backend y Plataforma",
      subtitle:
        "Desarrollo y mantengo software crítico para el negocio. Más de 3 años trabajando con .NET, SQL Server y sistemas distribuidos.",
      viewProjects: "Ver proyectos",
      contactMe: "Contáctame",
      downloadResume: "Descargar CV",
    },
    about: {
      sectionTitle: "Sobre mí",
      lead: "Ingeniería eficiente. Máximo valor.",
      paragraphs: [
        "Convierto infraestructura en una ventaja competitiva.",
        "En Memorial Amor Eterno (abril de 2024 a agosto de 2026), desarrollé y operé una plataforma autohospedada en ASP.NET Core con más de 15 módulos de negocio y 227 cuentas registradas.",
        "Refactoricé unos 10 procedimientos almacenados y tablas e índices compartidos en SQL Server. Una consulta clave de cobros pasó de unos 700 ms a menos de 50 ms.",
        "Como consultor de software en Enercom, desarrollé un servicio en .NET para sincronizar proyectos, inspecciones y encuestas de Procore con SQL Server. Recibí mi título en Informática Administrativa de la UNAH en agosto de 2026.",
      ],
    },
    skills: {
      sectionTitle: "Habilidades y experiencia",
      categories: [
        {
          title: "Servicios de plataforma",
          items: [
            "Docker & Containerization",
            "Kubernetes (k3s)",
            "MinIO Object Storage",
            "Caddy Reverse Proxy",
            "GitHub Actions autohospedado",
            "Ansible",
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
            "Asterisk ARI",
            "MediaMTX Streaming",
            "SignalR WebSockets",
            "RabbitMQ Message Broker",
          ],
        },
        {
          title: "Desarrollo backend",
          items: [
            "C# .NET APIs",
            "Kotlin (Android)",
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
      disclaimer:
        "Los repositorios detrás de estos proyectos son privados, propiedad de las empresas correspondientes — estas son reseñas del trabajo realizado, no código fuente enlazado.",
      readCaseStudy: "Leer el caso de estudio →",
      items: [
        {
          title: "Plataforma administrativa integral",
          problem:
            "La empresa necesitaba pasar de un control financiero simple a experiencias digitales que impulsaran ventas. Los sistemas legacy no cubrían necesidades modernas como gestión en tiempo real de señalización digital.",
          description:
            "Sistema modular para gestión de servicios funerarios. Incluye control de equipos, homenajes con texto y canciones originales generados por IA (OpenAI + Suno), señalización digital en tiempo real, almacenamiento documental y streaming en vivo. También incorpora portales para clientes e integración con WhatsApp.",
          tags: [
            "C# .NET",
            "Angular",
            "SignalR",
            "MediaMTX",
            "RabbitMQ",
            "MinIO",
            "OpenAI API",
            "Suno API",
            "Docker",
          ],
        },
        {
          title: "Sistema de recibos orientado a eventos",
          problem:
            "Antes, los recibos eran solo en papel. La empresa quería modernizarse ofreciendo recibos digitales, lo que requería un sistema escalable para soportar la transición.",
          description:
            "Implementé un flujo asíncrono de recibos con RabbitMQ, .NET y Python/FastAPI para desacoplar la entrega digital de la operación del ERP.",
          tags: ["RabbitMQ", ".NET", "Background Workers", "FastAPI", "Python", "Docker"],
          hasImage: true,
          imageKey: "receipts",
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
        {
          title: "App Android de ventas offline-first",
          problem:
            "Los vendedores de campo necesitan cerrar e imprimir una venta sin conectividad, sin riesgo de duplicar o perder la venta si la app falla a mitad de un reintento — un problema de consistencia distinto al que ya resolvió la app Android de Logística de la empresa con una estrategia diferente (delta sync).",
          description:
            "Reemplacé la app de ventas del proveedor con un cliente en Kotlin y Jetpack Compose y APIs en ASP.NET Core. Diseñé transacciones locales persistentes, sincronización en cola, reintentos e idempotencia para que los vendedores pudieran completar ventas sin señal. Según los vendedores, completaban ventas en menos de cinco minutos, frente a 30 minutos o más durante fallas del sistema anterior.",
          tags: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Offline-First", "ASP.NET Core"],
        },
        {
          title: "Edge y orquestación de plataforma self-hosted",
          problem:
            "Una familia creciente de aplicaciones internas necesitaba enrutamiento unificado, TLS, streaming de cámaras y eventos en vivo, y observabilidad — sin asumir los costos o el lock-in de la nube pública.",
          description:
            "Diseñé y operé el edge de la plataforma para todo AE Suite: proxy reverso Caddy, manifiestos y overlays de k3s, MediaMTX para streaming HLS/WebRTC, y un stack de monitoreo con Docker Compose (Prometheus, Grafana, cAdvisor, PostgreSQL, Redis), además de automatización de backups y un pipeline de CI/CD con despliegues automáticos a k3s.",
          tags: [
            "k3s",
            "Caddy",
            "Docker",
            "MediaMTX",
            "Prometheus",
            "Grafana",
            "Self-Hosted Infrastructure",
          ],
          hasImage: true,
          imageKey: "platform-architecture",
          caseStudySlug: "platform-edge",
        },
        {
          title: "Automatización de llamadas PBX y agente de voz",
          problem:
            "Antes de comprometerse con una plataforma completa de contact center, el equipo necesitaba validar si el manejo automatizado de intenciones y las respuestas habladas podían funcionar para llamadas entrantes de clientes.",
          description:
            "Servicio prototipo en Go que conecta eventos de llamadas de Issabel/Asterisk ARI con Google Cloud Text-to-Speech para manejo y reproducción automatizada de llamadas, junto con una capa de configuración de agente de voz que define intenciones, herramientas y comportamiento de respuesta generativa — construido para validar el enfoque antes de cualquier compromiso de producción.",
          tags: ["Go", "Asterisk ARI", "GCP", "Text-to-Speech", "Voice Agents", "Proof of Concept"],
        },
        {
          title: "Modernización de ERP legacy",
          problem:
            "Las operaciones principales — ventas, recibos, agenda de salas de velación — corrían sobre un ERP legacy de VB.NET/GeneXus de una década de antigüedad sin capacidad en tiempo real, y la API de la nueva plataforma consultaba directamente esa base de datos legacy con permisos amplios y sin gobernanza.",
          description:
            "Mantuve el sistema legacy VB.NET/GeneXus funcionando en producción mientras diseñaba y entregaba su reemplazo en tiempo real (Angular, C#, SignalR, streaming en vivo) función por función. Cerré la brecha de seguridad subyacente escribiendo un architecture decision record que reemplazó las consultas directas entre bases de datos hacia el ERP legacy por un límite de API gobernado y roles de base de datos de mínimo privilegio.",
          tags: [
            "VB.NET",
            "Legacy Modernization",
            "C#",
            "Angular",
            "SignalR",
            "Architecture Decision Records",
          ],
          caseStudySlug: "legacy-erp-modernization",
        },
      ],
    },
    caseStudies: {
      backLink: "← Volver a proyectos",
      items: {
        "platform-edge": {
          title: "Edge y orquestación de plataforma self-hosted",
          summary:
            "Cómo diseñé y operé la capa de enrutamiento, streaming y observabilidad detrás de toda la plataforma de operaciones de Amor Eterno — sin depender de una nube pública.",
          sections: [
            {
              heading: "El problema",
              body: "Para 2025, las operaciones de Amor Eterno habían crecido hasta convertirse en una familia de aplicaciones separadas — un centro de control en Angular, una sala de monitoreo en Svelte, un sitio público de señalización de eventos y dos apps Android — todas necesitando llegar de forma segura a un mismo backend compartido, sobre TLS, sin que cada app reinventara el enrutamiento, los certificados o el despliegue. El streaming de cámaras y eventos en vivo agregó un requisito completamente distinto: reproducción HLS/WebRTC de baja latencia que un simple proxy reverso no podía resolver por sí solo.",
            },
            {
              heading: "La arquitectura",
              body: "Caddy está en el borde, terminando TLS y enrutando cada dominio público (suite.amoreternohn.com, live.amoreternohn.com, entre otros) al servicio de backend correcto. Detrás, manifiestos y overlays de k3s ejecutan los despliegues de la API en producción y desarrollo, mientras un stack de Docker Compose ejecuta MediaMTX para la ingesta de cámaras/NVR y reproducción HLS/WebRTC, junto con PostgreSQL y Redis para los servicios que los necesitan.",
            },
            {
              heading: "Observabilidad y operación",
              body: "Un stack de Prometheus, Grafana y cAdvisor monitorea la salud de los contenedores y el uso de recursos en toda la plataforma, respaldado por backups programados del estado de k3s y verificaciones de salud de canales RTSP. Los despliegues están automatizados de extremo a extremo: workflows de GitHub Actions envían builds de desarrollo y producción directo a k3s, con pipelines separados para el código de la API y las migraciones de base de datos con EF Core, para que un release nunca dependa de un paso manual en un servidor que tengo que recordar.",
            },
            {
              heading: "Por qué importa",
              body: "Cada aplicación de la familia AE Suite — interna y pública — depende de que este edge funcione correctamente. Diseñarlo y operarlo en solitario significó que cada cambio de enrutamiento, renovación de certificado y pipeline de despliegue tuviera un solo responsable de punta a punta, desde el Caddyfile hasta el overlay de k3s y el dashboard de Grafana que me dice si en verdad está funcionando.",
            },
          ],
          diagram: "platform-architecture",
        },
        "legacy-erp-modernization": {
          title: "Modernización de ERP legacy",
          summary:
            "Cerrar una brecha de seguridad entre bases de datos mientras se entrega la plataforma en tiempo real que reemplaza a un ERP de una década, módulo por módulo.",
          sections: [
            {
              heading: "El problema",
              body: "Las operaciones principales de Amor Eterno — ventas, recibos, agenda de salas de velación — corrieron por más de una década sobre un ERP VB.NET/GeneXus construido alrededor de una base de datos de terceros (FUNAMOR) cuyo código fuente la empresa no posee. A medida que crecía el backend de la nueva plataforma, este consultaba directamente esa base de datos legacy con permisos amplios de SELECT sobre múltiples tablas — el login de la aplicación podía leer mucho más de lo que cualquier función individual requería, cada cambio de esquema del otro lado arriesgaba romper la nueva plataforma sin aviso, y no existía una interfaz auditable entre ambos sistemas.",
            },
            {
              heading: "La decisión",
              body: "Documenté el problema y la solución como un architecture decision record formal: reemplazar el SQL directo entre bases de datos con un límite gobernado. En lugar de que la API accediera a las tablas internas del sistema legacy, los roles de base de datos se limitaron a mínimo privilegio, y una interfaz controlada — vistas y stored procedures en vez de acceso directo a tablas — se convirtió en el único camino a través del límite. Un segundo ADR definió los roles y permisos específicos que cada identidad puede tener.",
            },
            {
              heading: "La construcción en paralelo",
              body: "Nada de esto ocurrió en el vacío ni con margen para downtime — el sistema legacy en VB.NET siguió operando ventas, cobros y agenda de salas de velación en producción durante todo el proceso. Su reemplazo en tiempo real (frontend en Angular, backend en C#, SignalR para actualizaciones en vivo, MediaMTX para streaming) se diseñó y entregó función por función, de modo que cada capacidad — monitores, salas de velación, recibos — se migraba solo una vez que su contraparte moderna estaba probada.",
            },
            {
              heading: "Por qué importa",
              body: "Esto no fue un refresco de interfaz. Fue cerrar un riesgo real de seguridad y acoplamiento en un sistema de producción activo mientras se diseñaba y entregaba simultáneamente su reemplazo — el tipo de decisión que debe tomarse deliberadamente, documentarse para que el razonamiento sobreviva a la persona que la tomó, y ejecutarse sin romper el negocio al que sirve.",
            },
          ],
        },
      },
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
