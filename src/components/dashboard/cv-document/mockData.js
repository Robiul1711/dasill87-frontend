export const defaultCvData = {
  personal: {
    firstName: "Andrew",
    lastName: "Smith",
    position: "UI/UX Designer",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
  },
  contact: {
    email: "andrewsmith@gmail.com",
    location: "Swindon, England, United Kingdom",
    phone: "+001 0184201 7593",
    countryCode: "+1",
    portfolio: "https://andrewsmith.design",
    username: "andrewsmith",
    website: "www.yoursite.com",
  },
  language: "English",
  bio: "A dedicated data professional with a robust foundation in analytical thinking and business informatics, I excel at transforming intricate datasets into meaningful, strategy-driven insights. Passionate about digital innovation, I bring hands-on expertise in data analysis, reporting, and the development of impactful solutions. My collaborative spirit enables me to build bridges across teams, driving the adoption of cutting-edge tools and empowering data-driven decision-making. Energized by dynamic environments, I am committed to streamlining processes, fostering innovation, and delivering measurable contributions within the ever-evolving digital realm.",
  experiences: [
    {
      id: "exp-1",
      position: "Senior UI/UX Designer",
      company: "InnovateTech Global",
      location: "Zurich, Switzerland",
      type: "On-site",
      startDate: "01/2022",
      endDate: "Present",
      current: true,
      description:
        "Led product design initiatives across cross-functional agile teams. Developed scalable design systems and improved user retention by 28% through iterative usability testing.",
    },
    {
      id: "exp-2",
      position: "Product Designer",
      company: "Apex Digital Solutions",
      location: "London, UK",
      type: "Hybrid",
      startDate: "06/2019",
      endDate: "12/2021",
      current: false,
      description:
        "Crafted engaging web & mobile applications from concept wireframes to production-ready design tokens. Collaborated closely with front-end engineers.",
    },
    {
      id: "exp-3",
      position: "Junior Visual Designer",
      company: "Studio Creativa",
      location: "Bristol, UK",
      type: "Remote",
      startDate: "08/2017",
      endDate: "05/2019",
      current: false,
      description:
        "Designed marketing assets, brand identities, and high-fidelity prototypes for international enterprise clients.",
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Professional UI UX Designer",
      institution: "Creative IT Institute",
      startDate: "09/2018",
      endDate: "06/2020",
      current: false,
      description:
        "Mastered user research methodologies, interactive prototyping, Figma design systems, accessibility guidelines (WCAG), and responsive digital product development.",
    },
    {
      id: "edu-2",
      degree: "B.Sc. in Computer Science & Interaction",
      institution: "University of London",
      startDate: "09/2014",
      endDate: "06/2018",
      current: false,
      description:
        "Graduated with First Class Honours. Focused on human-computer interaction, cognitive psychology in design, web technologies, and computational logic.",
    },
  ],
  skills: [
    { id: "sk-1", name: "Data Analysis", level: "Proficient" },
    { id: "sk-2", name: "UI/UX Design", level: "Proficient" },
    { id: "sk-3", name: "Figma & Prototyping", level: "Proficient" },
    { id: "sk-4", name: "User Research", level: "Proficient" },
    { id: "sk-5", name: "Design Systems", level: "Proficient" },
    { id: "sk-6", name: "Wireframing", level: "Proficient" },
    { id: "sk-7", name: "Interaction Design", level: "Proficient" },
    { id: "sk-8", name: "Agile Workflow", level: "Proficient" },
  ],
  softwareSkills: [
    { name: "Figma / FigJam", progress: 95 },
    { name: "Adobe XD & Photoshop", progress: 85 },
    { name: "React & HTML/CSS", progress: 80 },
    { name: "Design Systems & Tokens", progress: 90 },
  ],
  languages: [
    { id: "lang-1", name: "English", level: "C1" },
    { id: "lang-2", name: "Spanish", level: "B2" },
    { id: "lang-3", name: "German", level: "A2" },
  ],
  hobbies: ["Gardening", "Reading", "Watching Movie", "Photography", "Cycling"],
  selectedTemplate: "watercolor",
};

export const templateList = [
  {
    id: "watercolor",
    title: "Watercolor Modern",
    subtitle: "Artistic, expressive layout with soft pastel watercolor gradients",
    image: "/templates/template_watercolor.jpg",
    accentColor: "#F59E0B",
  },
  {
    id: "modern-red",
    title: "Executive Bordeaux",
    subtitle: "Bold wine-red header banner with clean corporate structure",
    image: "/templates/template_modern_red.jpg",
    accentColor: "#800020",
  },
  {
    id: "creative-blue",
    title: "Tech Wave Indigo",
    subtitle: "Dynamic curved header with modern engineering timeline",
    image: "/templates/template_creative_blue.jpg",
    accentColor: "#1D4ED8",
  },
  {
    id: "executive",
    title: "Modern Executive",
    subtitle: "Crisp contemporary styling tailored for senior leadership",
    image: "/templates/template_executive.jpg",
    accentColor: "#0F172A",
  },
  {
    id: "minimal",
    title: "Clean Minimalist",
    subtitle: "Understated elegance with ample whitespace and sleek typography",
    image: "/templates/template_minimal.jpg",
    accentColor: "#334155",
  },
];

export const defaultCoverLetterData = {
  personal: {
    firstName: "Mike",
    lastName: "Smith",
    position: "Mobile Developer",
    address: "00 Main Street Avenue, Country, City, 00000",
  },
  contact: {
    email: "email@freepik.com",
    phone: "+00 123 456 789",
    username: "@username",
    location: "Swindon, England, United Kingdom",
    portfolio: "https://mikesmith.dev",
  },
  recipient: {
    company: "Business Company",
    address: "00 Main Street Avenue\nCountry, City\n00000",
    salutation: "Dear Manager,",
  },
  letterDate: "01.01.26",
  language: "English",
  bodyText: `A constellation consists of visible stars that form a perceived outline or pattern, usually representing an animal, a person or mythological creature, or an inanimate object.

The origins of the first constellations date back to prehistoric times. Their purpose was to tell stories of their beliefs, experiences. The recognition of constellations has changed over time. They varied in size or shape, others became popular and then were forgotten, and some were limited to a single culture.

In the 20th century, a committee of the International Astronomical Union took it upon itself to accurately delineate the 88 constellations. It included 48 ancient constellations enumerated by the Greek astronomer Ptolemy, plus 40 new constellations.

The star charts represent the position of the stars as we see them from Earth; however, the stars in each constellation may not be close to each other, as some we perceive to be brighter because they are close to the Earth, while others are brighter because they are huge stars.

Regards, Mike.`,
  selectedTemplate: "classic-blue",
};

export const coverLetterTemplateList = [
  {
    id: "classic-blue",
    title: "Classic Royal Blue",
    subtitle: "Clean typography with bold corporate blue header and signature block",
    image: "/templates/template_creative_blue.jpg",
    accentColor: "#2563EB",
  },
  {
    id: "minimal-modern",
    title: "Modern Minimalist",
    subtitle: "Sleek and understated layout with focused readability",
    image: "/templates/template_minimal.jpg",
    accentColor: "#1E293B",
  },
  {
    id: "executive-wine",
    title: "Executive Bordeaux",
    subtitle: "Distinguished cover letter tailored for management applications",
    image: "/templates/template_modern_red.jpg",
    accentColor: "#800020",
  },
  {
    id: "watercolor-art",
    title: "Artistic Watercolor",
    subtitle: "Vibrant creative flair matching the watercolor CV design",
    image: "/templates/template_watercolor.jpg",
    accentColor: "#F59E0B",
  },
  {
    id: "corporate-slate",
    title: "Corporate Slate",
    subtitle: "Structured traditional layout suitable for all industries",
    image: "/templates/template_executive.jpg",
    accentColor: "#475569",
  },
];

