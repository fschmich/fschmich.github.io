export const siteConfig = {
  name: "Fabian Schmich",
  title: "Senior Principal Scientist",
  description: "Fabian Schmich",
  accentColor: "#1d4ed8",
  social: {
    email: "f@fabianschmich.com",
    linkedin: "https://linkedin.com/in/fschmich",
    twitter: "https://x.com/fschmich",
    github: "https://github.com/fschmich",
  },
  aboutMe:
    "Computational Biology PhD with 15+ years of expertise in machine learning and 8+ years in pharmaceutical R\&D, I currently work as a Senior Principal Data Scientist and AI Capability Lead at Roche. In these roles, I lead global cross-functional teams to tackle complex biological and clinical challenges, working on cutting-edge projects like clinical digital twins and lab-in-the-loop generative design for gene therapy. My hands-on approach to project and portfolio work ensures the successful execution of complex, high-risk initiatives, leveraging my deep expertise in AI/ML and leadership to deliver impactful solutions. Responsible for overseeing PhD and Postdoc programmes, I co-founded a graduate school and currently establish an independent research group focused on AI for gene therapy design. As a lifelong learner with a can-do attitude, I am passionate about making a positive impact on patient lives.",
  skills: ["Machine Learning", "Statistics", "Drug Development", "Pytorch", "Tidyverse"],
  projects: [
    {
      name: "Weather Station",
      description:
        "I run a local weather station using a Davis Vantage Pro 2 with wind, rain, temperature and radiation sensors and a Raspberry Pi with weewx as backend. Utilizing a robust wireless weather station for data acquisition, information is transmitted to a dedicated local server. On the software side, I've implemented a comprehensive stack to handle everything from data collection and storage to live broadcasting and interactive visualizations. The entire platform is accessible as a Progressive Web App, making it easy to view current weather insights from any device.",
      link: "https://wetter-feilnbach.de",
      skills: ["Sensors", "Raspberry Pi", "Highcharts", "MQTT"],
    },
    {
      name: "Photography",
      description:
        "I'm passionate about photography, digital and analog. On this portfolio page, I present various photographic projects and individual pieces, inviting everyone to explore my approach to capturing the world. The portfolio is structured to allow easy navigation through different categories of my images, offering a glimpse into the diverse subjects and styles I enjoy photographing.",
      link: "http://fabianschmich.com",
      skills: ["Photography", "Canon", "Hasselblad"],
    },
  ],
  experience: [
    {
      company: "Roche Pharma Research and Early Development",
      title: "Senior Principal Scientist",
      dateRange: "Apr. 2024 - Present",
      bullets: [
        "Leading team on Digital Twins for clinical trials",
        "Building team for leveraging AI for rAAV gene therapy design following the lab-in-the-loop concept",
        "Responsible for developing AI strategy and building key capabilities",
        "Responsible for PhD- and PostDoc programmes in Data & Analytics"
      ],
    },
    {
      company: "Roche Pharma Research and Early Development",
      title: "Senior Scientist - Principal Scientist",
      dateRange: "Aug. 2016 - Mar. 2024",
      bullets: [
        "Conceptualized, developed and deployed deep learning based imaging models for lead optimization",
        "Developed deep learning models for tissue segmentation and object detection in digital pathology",
        "Co-founded a graduate school in collaboration with Helmholtz Munich, TUM and LMU",
        "Developed novel spatial statistics for measuring T cell engagement",
        "Filed six patents on machine learning for drug discovery and development and won Innovation and Science award"
      ],
    },
  ],
  education: [
    {
      school: "Swiss Federal Insitute of Technology (ETH)",
      degree: "PhD in Computational Biology",
      dateRange: "2012 - 2016",
      achievements: [
        "Thesis: Computational Studies in Genetic Perturbation Screening",
        "Graduate courses: Computational statistics, Machine Learning, Functional Genomics, Synthetic Biology, and more",
        "Advisers: Prof. Niko Beerenwinkel (ETH), Prof. Peter Bühlmann (ETH) and Prof. Wolfgang Huber (EMBL)",
      ],
    },
    {
      school: "Technical University Munich (TUM)",
      degree: "Diplom (M.Sc.) in Bioinformatics",
      dateRange: "2005 - 2011",
      achievements: [
        "Thesis: Computational Analysis of Breast Cancer Tissue using MALDI Mass Spectrometry Imaging",
        "Courses: Linear Algebra, Statistics, Structural Bioinformatics, Computer Science, Databases, Advanced Algorithms, Biochemistry, and more",
        "Graduated with high distinction: 1.2 (GPA 3.9)",
        "Advisers: Prof. Ralf Zimmer (LMU) and Prof. Janine Erler (ICR)",
      ],
    },
  ],
};
