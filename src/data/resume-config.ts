// Copy resume-config.example.ts and customize it with your own information.
// See docs/CUSTOMIZATION.md for a detailed guide.
import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Tiago Labro',
    // Auto-detected: just drop your photo or profile image in public/images/ (any .jpg, .png, .webp)
    // You can also set a specific path here to override auto-detection:
    photo: '/images/photo.jpg',
    photoBackEmoji: '👩‍💻', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Fullstack Developer',
      fr: 'Développeur Fullstack',
    },
    subtitle: {
      en: '3 years of experience',
      fr: '3 ans d\'expérience',
    },
    location: 'Fleurines (60), France',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Tiago Labro — Développeur Full-Stack',
    description: 'Un CV interactif de Tiago Labro, un développeur full-stack.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'fr',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'DogeBloxy', href: 'https://github.com/DogeBloxy' },
    { type: 'linkedin', label: 'Tiago Labro', href: 'https://linkedin.com/in/tiago-labro-31479029b/' },
    { type: 'email', label: 'labrotiago@gmail.com' },
    { type: 'phone', label: '+33 7 70 00 05 99' },
    { type: 'location', label: 'Fleurines (60), France' },
    { type: 'website', label: 'Portfolio', href: 'https://tiago-labro-cv.netlify.app' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Intermediate', fr: 'Intermédiaire' }, details:'B2' },
      ],
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'HTML' },
        { name: 'JavaScript' },
        { name: 'Vue.js' },
        { name: 'CSS' },
      ],
    },
    {
      title: { en: 'Backend', fr: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'PHP' },
        { name: 'Express.js' },
        { name: 'Symfony'},
        { name: 'Docker' },
        { name: 'Python' },
        { name: 'Java' },
      ],
    },
    {
      title: { en: 'Others', fr: 'Autres' },
      type: 'badges',
      items: [
        { name: 'WordPress' },
        { name: 'Figma' },
        { name: 'Suite Adobe' },
        { name: 'Canva', color: '#603FE8' },
        { name: 'Blender', color: '#EA7600' },
      ],
    },
    {
      title: { en: 'Database', fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'phpMyAdmin', color: '#FF9800' },
        { name: 'MongoDB' },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'betafluides',
      company: { en: 'BetaFluides', fr: 'BetaFluides' },
      role: { en: 'Web Developer', fr: 'Développeur Web' },
      type: { en: 'Work-study', fr: 'Alternance' },
      period: { en: '2025 - Present', fr: '2025 - Présent' },
      description: {
        en: 'Web mockup design and integration on company websites.',
        fr: 'Développement de maquettes web et intégration sur les sites web de l\'entreprise.',
      },
      techs: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Docker', 'Figma'],
      isHighlighted: true,
      details: {
       context: {
          fr: 'Bureau d\'études du bâtiment. Intégré au sein de l\'équipe dans le cadre d\'une alternance d\'un an.',
          en: 'Engineering office. Joined the team as part of a one-year work-study contract.',
        },
        tasks: {
          fr: [
            'Développement de plusieurs maquettes web avec Figma',
            'Intégration des maquettes sur les sites web',
          ],
          en: [
            'Development of multiple web mockups with Figma',
            'Integration of mockups on company websites',
          ],
        },
        env: {
          en: 'HTML / CSS / JavaScript / WordPress / Docker / Figma',
          fr: 'HTML / CSS / JavaScript / WordPress / Docker / Figma',
        },
      },
    },
    {
      id: 'rezultat-consulting',
      company: { fr: 'REZULTAT CONSULTING', en: 'REZULTAT CONSULTING' },
      role: { fr: 'Développeur React', en: 'React Developer' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: 'Avr. 2025 – Juil. 2025', en: 'Apr. 2025 – Jul. 2025' },
      description: {
        fr: 'Création d\'un site d\'orientation en ligne avec intégration d\'intelligence artificielle.',
        en: 'Creation of an online guidance website with artificial intelligence integration.',
      },
      techs: ['React', 'Figma'],
      details: {
        context: {
          fr: 'Cabinet de conseil spécialisé dans le quotidien des entreprises. Stage de 3 mois au sein de l\'équipe de développement.',
          en: 'Consulting firm specialized in the daily life of companies.. 3-month internship within the development team.',
        },
        tasks: {
          fr: [
            'Création d\'un site d\'orientation en ligne',
            'Développement d\'une maquette web avec Figma',
            'Intégration d\'IA',
          ],
          en: [
            'Creation of an online guidance website',
            'Development of a web mockup with Figma',
            'AI integration',
          ],
        },
        env: {
          fr: 'React / Figma',
          en: 'React / Figma',
        },
      },
    },
    {
      id: 'agence-uranium',
      company: { fr: 'Agence Uranium', en: 'Agence Uranium' },
      role: { fr: 'Développeur CMS', en: 'CMS Developer' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: 'Avr. 2024 – Juin 2024', en: 'Apr. 2024 – Jun. 2024' },
      description: {
        fr: 'Création de sites web WordPress et gestion des réseaux sociaux pour la marque Cèdres & Rondins.',
        en: 'WordPress website creation and social media management for the Cèdres & Rondins brand.',
      },
      techs: ['WordPress', 'Figma', 'Suite Adobe'],
      details: {
        context: {
          fr: 'Agence digitale proposant des services de création web et de communication. Stage de 2 mois au contact de clients variés.',
          en: 'Digital agency offering web creation and communication services. 2-month internship working with various clients.',
        },
        tasks: {
          fr: [
            'Création de sites web en utilisant WordPress',
            'Gestion des réseaux sociaux, Instagram et Facebook, de la marque Cèdres & Rondins',
            'Créations de visuels',
          ],
          en: [
            'Website creation using WordPress',
            'Social media management (Instagram & Facebook) for the Cèdres & Rondins brand',
            'Visual content creation',
          ],
        },
        env: {
          fr: 'WordPress / Figma / Suite Adobe',
          en: 'WordPress / Figma / Suite Adobe',
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'bon-appetit',
      title: { en: 'Bon Appétit', fr: 'Bon Appétit' },
      description: {
        en: 'Showcase site for a restaurant made with HTML/CSS and JavaScript in groups of 4.',
        fr: 'Site vitrine pour un restaurant fait avec HTML/CSS et JavaScript en groupe de 4.',
      },
      techs: ['HTML','CSS', 'JavaScript'],
      url: 'https://dogebloxy.github.io/Bon-app-tit/site_bon_appetit.html',
      github: 'https://github.com/DogeBloxy/Bon-app-tit',
    },
    {
      id: 'allomovies',
      title: { en: 'Allo-Movies', fr: 'Allo-Movies' },
      description: {
        en: 'Website allowing to make its own classification of films by category in groups of 2.',
        fr: 'Site web permettant de faire son propre classement de films par catégorie en groupe de 2.',
      },
      techs: ['HTML', 'CSS', 'Vue.js'],
      url:'https://lavignechappazflorian.github.io/allomovies/',
      github: 'https://github.com/LavigneChappazFlorian/allomovies',
    },
    {
      id: 'shifumi',
      title: { en: 'Shifumi', fr: 'Shifumi' },
      description: {
        en: 'Small mini-game of Shifumi on the theme of Christmas in groups of 3.',
        fr: 'Petit mini-jeu de Shifumi sur le thème de Noël en groupe de 3.',
      },
      techs: ['HTML', 'CSS', 'JavaScript'],
      url:'https://lavignechappazflorian.github.io/shifumi-game/',
      github: 'https://github.com/LavigneChappazFlorian/shifumi-game',
    },
    {
      id: 'samusocialparis',
      title: { en: 'SamuSocialParis', fr: 'SamuSocialParis' },
      description: {
        en: 'Project for a competition named "Brief Créatifs" in the Digital category to create a static website in groups of 5.',
        fr: 'Projet d\'un concours nommé "Brief Créatifs" dans la catégorie Digital pour faire un site web statique en groupe de 5.',
      },
      techs: ['HTML', 'CSS', 'JavaScript'],
      url:'https://descorsiers.github.io/Brief_creatif_SAMUSOCIALPARIS/',
      github: 'https://github.com/Descorsiers/Brief_creatif_SAMUSOCIALPARIS',
    },
    {
      id: 'popcornflix',
      title: { en: 'PopCornFlix', fr: 'PopCornFlix' },
      description: {
        en: 'PopCornFlix is a film streaming web application that allows users to discover and explore a wide selection of films made in groups of 2.',
        fr: 'PopCornFlix est une application web de streaming de films qui permet aux utilisateurs de découvrir et d\'explorer une large sélection de films fait en groupe de 2.',
      },
      techs: ['React', 'JavaScript'],
      url:'https://popcornflix-project.netlify.app/',
      github: 'https://github.com/LavigneChappazFlorian/popcornflix',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { fr: 'La MANU, Compiègne', en: 'La MANU, Compiègne' },
      degree: { fr: 'Bachelor Métiers du Numérique', en: 'Bachelor in Digital Professions' },
      specialty: { fr: 'Spécialité Développement Web & IA', en: 'Speciality: Web Development & AI' },
      period: '2023 - 2026',
    },
    {
      school: { fr: 'Lycée Hugues Capet, Senlis', en: 'Lycée Hugues Capet, Senlis' },
      degree: { fr: 'Baccalauréat Général', en: 'French High School Diploma' },
      specialty: { fr: 'Mention Assez Bien', en: 'Grade: Good' },
      period: '2020 - 2023',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { fr: 'Jeux vidéos', en: 'Video Games' },
    },
    {
      title: { fr: 'Codage', en: 'Coding' },
    },
    {
      title: { fr: 'Musique', en: 'Music' },
    },
    {
      title: { fr: 'Voyage', en: 'Travel' },
    },
  ],

  // ===== PDF (optional) =====
  // Auto-detected: just drop your PDF files in public/cv/fr/ and public/cv/en/
  // The download button will appear automatically — no config needed!
  // Uncomment below only if you need to override the auto-detection:
  pdf: {
     label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    path: { en: '/cv/en/cv-alternance-tiago-labro.pdf', fr: '/cv/fr/cv-alternance-tiago-labro.pdf' },
  },

  // ===== THEME =====
  theme: {
    preset: 'warm',
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
    defaultMode: 'system',
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
