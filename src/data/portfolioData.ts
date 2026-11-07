import { Project, Experience, SkillCategory, Achievement, StatItem } from '../types';

export const personalInfo = {
  name: 'DEBANKUR PAUL',
  title: 'Full-Stack Developer & AI/ML Researcher',
  tagline: 'I build systems that ship — from FastAPI backends to Docker deployments',
  college: 'Dhemaji Engineering College',
  degree: 'B.Tech in Computer Science & Engineering',
  year: '2nd Year Undergraduate',
  cgpa: '8.14',
  email: 'debankurpaul618@gmail.com',
  github: 'https://github.com/DebankurPaul',
  linkedin: 'https://www.linkedin.com/in/debankur-paul',
  resumeUrl: '#resume-modal',
  bio: `Second-year Computer Science and Engineering undergraduate at Dhemaji Engineering College with an 8.14 CGPA, driven by building resilient full-stack systems and production-grade machine learning pipelines. Having conducted government-funded AI research at NIT Silchar and NLP database engineering at NIT Kurukshetra, I bridge theoretical depth with end-to-end engineering rigor. From writing high-throughput FastAPI services to containerizing distributed architectures with Docker, I focus on shipping high-impact software that solves tangible problems.`,
  shortBio: `B.Tech CSE student (CGPA 8.14) with dual NIT research internships and national hackathon recognition. Focused on building scalable FastAPI backends, containerized cloud applications, and applied deep learning pipelines.`,
  availableFor: 'Available for Software Engineering Internships (Summer 2025 / 2026)',
  location: 'Assam, India'
};

export const statsData: StatItem[] = [
  {
    value: '2',
    label: 'Research Internships',
    sublabel: 'NIT Silchar & NIT Kurukshetra'
  },
  {
    value: '3',
    label: 'Shipped Projects',
    sublabel: 'Production Web & ML Systems'
  },
  {
    value: '8.14',
    label: 'CGPA',
    sublabel: 'Dhemaji Engineering College'
  },
  {
    value: 'Top Tier',
    label: 'National Semifinalist',
    sublabel: 'DRISTI NE Hackathon 2026'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    description: 'Core procedural, object-oriented, and scripting languages',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'C', highlight: false },
      { name: 'C++', highlight: true },
      { name: 'JavaScript', highlight: true },
      { name: 'Java', highlight: false }
    ]
  },
  {
    category: 'Web & Backend',
    description: 'Modern asynchronous APIs, microservices, containerization & web runtimes',
    skills: [
      { name: 'FastAPI', highlight: true },
      { name: 'React.js', highlight: true },
      { name: 'Vite', highlight: false },
      { name: 'nginx', highlight: false },
      { name: 'Docker', highlight: true },
      { name: 'Docker Compose', highlight: true }
    ]
  },
  {
    category: 'Machine Learning',
    description: 'Deep neural networks, tabular gradient boosting & predictive modeling',
    skills: [
      { name: 'PyTorch', highlight: true },
      { name: 'TensorFlow', highlight: false },
      { name: 'Scikit-learn', highlight: true },
      { name: 'XGBoost', highlight: true }
    ]
  },
  {
    category: 'Data & Geospatial',
    description: 'High-throughput numerical processing & multidimensional GIS data pipelines',
    skills: [
      { name: 'Pandas', highlight: true },
      { name: 'NumPy', highlight: true },
      { name: 'GeoPandas', highlight: true },
      { name: 'Rasterio', highlight: false }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'url-threat-analyzer',
    title: 'URL Threat Analyzer',
    subtitle: 'Cybersecurity Intelligence & Malicious URL Scanner',
    description: 'High-performance web security platform providing instant URL threat scoring and domain vulnerability intelligence through concurrent multi-engine scanning.',
    category: 'Full-Stack',
    featured: true,
    tags: ['FastAPI', 'Docker', 'React', 'VirusTotal API', 'Render'],
    bullets: [
      'Architected an asynchronous FastAPI backend integrating VirusTotal API to scan, parse, and score URLs against 70+ threat intelligence engines with sub-second latency.',
      'Constructed a dynamic React frontend featuring real-time reputation meters, interactive security telemetry, threat classification chips, and persistent scan logs.',
      'Containerized the complete application with Docker and multi-stage Docker Compose, configuring isolated networking, reverse-proxying, and seamless continuous deployment to Render.',
      'Implemented robust client-side sanitization, strict URL validation routines, custom CORS headers, and resilient API rate-limit exponential backoff handling.'
    ],
    liveUrl: 'https://url-threat-analyzer-frontend.onrender.com',
    githubUrl: 'https://github.com/DebankurPaul/URL_Threat_Analyzer',
    metrics: '70+ Antivirus Engines Integrated'
  },
  {
    id: 'nexus-ai',
    title: 'Nexus-AI',
    subtitle: 'Explainable Geospatial Intelligence & Urban Predictive Modeling',
    description: 'AI-powered decision support platform bridging gradient boosted machine learning with spatial GIS analysis and SHAP-based model interpretability for urban analytics.',
    category: 'AI / ML',
    featured: true,
    badge: '🏆 National Semifinalist, DRISTI NE Hackathon 2026',
    tags: ['XGBoost', 'SHAP', 'FastAPI', 'PostGIS', 'Next.js', 'Mapbox'],
    bullets: [
      'Trained and optimized gradient boosted decision trees using XGBoost, coupling predictions with SHAP (SHapley Additive exPlanations) values for real-time, transparent feature attribution.',
      'Engineered high-throughput spatial querying pipelines integrating PostGIS and GeoPandas for spatial indexing, polygon intersections, and multi-band raster analysis.',
      'Crafted an interactive Next.js user interface backed by Mapbox GL vector layers, enabling dynamic multi-criteria heatmaps, boundary choropleths, and zone filtering.',
      'Selected as a National Semifinalist among hundreds of nationwide teams at the DRISTI NE Hackathon 2026 conducted at IIM Shillong.'
    ],
    githubUrl: 'https://github.com/Darketernaumbreon/Nexus_AI',
    metrics: 'National Semifinalist @ IIM Shillong'
  },
  {
    id: 'note-event-transcription',
    title: 'Note-Event Transcription from Indian Folk Music',
    subtitle: 'Deep Learning Acoustic Signal Processing for Low-Resource Cultural Audio',
    description: 'Novel deep convolutional-recurrent audio pipeline for automated acoustic onset detection and musical transcription of indigenous Indian folk traditions.',
    category: 'Research',
    featured: true,
    badge: '🔬 Govt-Funded Research',
    tags: ['PyTorch', 'Deep Learning', 'Signal Processing'],
    bullets: [
      'Designed and evaluated deep neural architectures (CRNNs) in PyTorch dedicated to transcribing microtonal inflections, pitch glides, and polyphonic folk acoustic signals.',
      'Implemented advanced audio DSP pipelines with Short-Time Fourier Transforms (STFT), harmonic-percussive source separation, and logarithmic mel-frequency filterbanks.',
      'Conducted under research funding from the Indian Knowledge Systems (IKS) Division, Ministry of Education, Govt. of India, overcoming extreme low-resource audio scarcity.',
      'Attained high temporal precision in acoustic onset detection, benchmarked across noisy, field-recorded Indian acoustic instruments.'
    ],
    githubUrl: 'https://github.com/DebankurPaul/Note-Event_Transcription_from_Indian_folk_music',
    metrics: 'Funded by IKS Division, MoE'
  }
];

export const experiencesData: Experience[] = [
  {
    id: 'nit-silchar',
    role: 'Research Intern',
    organization: 'National Institute of Technology, Silchar',
    location: 'Silchar, Assam, India',
    period: '2024 – 2025',
    funding: 'Funded by IKS Division, Ministry of Education, Govt. of India',
    supervisors: 'Supervisor: Dr. Anupam Biswas · Mentor: Dr. Biken Singh Moirangthem',
    description: 'Deep Learning Pipeline for Indian Folk Music Note-Event Transcription and Acoustic Signal Modeling.',
    bullets: [
      'Investigated deep learning models for acoustic note-event transcription tailored specifically to traditional Indian folk music and microtonal phrasing.',
      'Engineered signal preprocessing algorithms combining spectral flux, harmonic separation, and mel-frequency spectrogram feature engineering in Python & PyTorch.',
      'Collaborated directly under Dr. Anupam Biswas (Associate Professor, CSE) and Dr. Biken Singh Moirangthem on an initiative sanctioned by the Ministry of Education, Govt. of India.',
      'Produced benchmark evaluation datasets and pipeline scripts for low-resource indigenous audio archives.'
    ],
    skills: ['PyTorch', 'Audio Signal Processing', 'STFT', 'Deep Learning', 'Python', 'NumPy'],
    type: 'Research'
  },
  {
    id: 'nit-kurukshetra',
    role: 'Summer Intern',
    organization: 'National Institute of Technology, Kurukshetra',
    location: 'Kurukshetra, Haryana, India',
    period: '2024',
    description: 'Multilingual Image-Caption Database Development (English + Assamese) for Cross-Lingual NLP & Vision-Language Modeling.',
    bullets: [
      'Engineered an authenticated multilingual image-caption database spanning paired English and Assamese corpora for cross-modal language representation.',
      'Implemented automated text normalization, tokenization, and quality validation pipelines for low-resource Indic language NLP tasks.',
      'Constructed benchmark pairs to evaluate multilingual multimodal vision-language architectures and transformer-based captioning models.',
      'Documented schema architecture and distributed datasets to accelerate academic research on northeastern Indian languages.'
    ],
    skills: ['NLP', 'Multilingual Corpora', 'Python', 'Data Engineering', 'Assamese NLP', 'Dataset Design'],
    type: 'Internship'
  }
];

export const achievementsData: Achievement[] = [
  {
    id: 'oracle-ai',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle Corporation',
    year: '2025',
    description: 'Validated foundational mastery of artificial intelligence, machine learning concepts, OCI Generative AI services, deep neural networks, and ethical AI deployment on Oracle Cloud.',
    badgeText: 'Verified Cloud Credential',
    type: 'Certification'
  },
  {
    id: 'dristi-hackathon',
    title: 'National Semifinalist — DRISTI NE Hackathon 2026',
    issuer: 'IIM Shillong & DRISTI Foundation',
    year: '2026',
    description: 'Ranked in the top national tier across colleges across India for "Nexus-AI", an explainable geospatial machine learning platform addressing regional infrastructure challenges.',
    badgeText: '🏆 National Semifinalist',
    type: 'Hackathon'
  }
];
