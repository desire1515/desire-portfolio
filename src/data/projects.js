export const projects = [
  {
    id: 'propertychain',
    title: 'PropertyChain',
    category: 'Blockchain',
    additionalCategories: ['Web Development'],
    description:
      'An independently developed prototype in progress: a blockchain-enabled rental-management Progressive Web Application focused on property-rental workflows in Malawi.',
    problem:
      'Organize rental-management workflows and support more transparent property records for the rental ecosystem.',
    features: [
      'Rental-management workflows for property owners and renters',
      'Blockchain-enabled property and transaction records',
      'Progressive Web Application experience',
    ],
    technologies: ['React', 'Firebase', 'Solidity', 'Web3'],
    status: 'Prototype / In Development',
    image: 'images/propertychain.png',
    github: null,
    demo: null,
    docs: null,
    featured: true,
    collaborative: false,
  },
  {
    id: 'pcsirm',
    title: 'PCSIRM',
    category: 'Cybersecurity',
    additionalCategories: [],
    description:
      'An independently developed cybersecurity incident-response and monitoring prototype focused on event monitoring, detection rules, incident management, and evidence tracking.',
    problem:
      'Help security teams centralize security-event monitoring, incident handling, and evidence tracking.',
    features: [
      'Security event monitoring',
      'Detection rules',
      'Incident management',
      'Evidence tracking',
    ],
    technologies: ['Python', 'Flask', 'SQLite', 'JavaScript'],
    status: 'Prototype / In Development',
    image: 'images/pcsirm-security-dashboard.png',
    screenshots: [
      { label: 'Security Dashboard', image: 'images/pcsirm-security-dashboard.png' },
      { label: 'Security Events', image: 'images/pcsirm-security-events.png' },
      { label: 'Incident Management', image: 'images/pcsirm-incident-management.png' },
      { label: 'Detection Rules', image: 'images/pcsirm-detection-rules.png' },
      { label: 'Monitoring Sources', image: 'images/pcsirm-monitoring-sources.png' },
    ],
    github: 'https://github.com/desire1515/propertychain-security-incident-monitor',
    demo: null,
    docs: null,
    featured: true,
    collaborative: false,
  },
  {
    id: 'nyumba-za-rent',
    title: 'Nyumba za Rent',
    category: 'Software Development',
    additionalCategories: [],
    description:
      'A collaborative team project: a rental-management application designed to support workflows for landlords, tenants, and administrators.',
    problem:
      'Support landlords, tenants, and administrators who need shared rental-management workflows.',
    features: [
      'Rental-management workflows for landlords and tenants',
      'Administrative tools',
      'Collaborative project development',
    ],
    technologies: ['Python', 'Flask', 'MySQL', 'JavaScript'],
    status: 'Collaborative Project',
    image: null,
    github: 'https://github.com/nyumba-za-arent/nyumba-za-rent',
    demo: null,
    docs: null,
    featured: true,
    collaborative: true,
  },
  {
    id: 'atm-sentinel',
    title: 'ATM Sentinel',
    category: 'AI & Machine Learning',
    additionalCategories: [],
    description:
      'An individual academic research project exploring machine-learning approaches to identifying unusual ATM transaction patterns.',
    problem:
      'Explore methods for flagging unusual ATM transactions that may warrant review.',
    features: [
      'ATM transaction anomaly-detection research',
      'Exploration of Isolation Forest and K-Means approaches',
    ],
    technologies: ['Python', 'Machine Learning', 'Isolation Forest', 'K-Means'],
    status: 'Research / Academic Project',
    image: 'images/atm-sentinel.png',
    github: 'https://github.com/desire1515/ATM-Sentinel',
    demo: null,
    docs: null,
    featured: false,
    collaborative: false,
  },
  {
    id: 'medical-assistant',
    title: 'Intelligent Medical Information Assistant',
    category: 'AI & Machine Learning',
    additionalCategories: ['Web Development'],
    description:
      'An individual academic project: a rule-based expert system that provides general health-information guidance with emergency safety considerations. It is not a substitute for professional medical advice.',
    problem:
      'Make medical information guidance easier to navigate while keeping emergency safety considerations in view.',
    features: [
      'Rule-based expert-system guidance',
      'Medical information lookup',
      'Emergency safety considerations',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Expert Systems'],
    status: 'Academic Project',
    image: null,
    github: 'https://github.com/desire1515/medical-info-assistant',
    demo: null,
    docs: null,
    featured: false,
    collaborative: false,
  },
  {
    id: 'wireless-security',
    title: 'Wireless Network Security Assessment',
    category: 'Cybersecurity',
    additionalCategories: [],
    description:
      'An individual academic security assessment of wireless-network configurations, focused on encryption and access controls in a controlled environment.',
    problem:
      'Evaluate wireless-network configurations for weaknesses in encryption and access controls.',
    features: [
      'Wireless-network configuration assessment',
      'Encryption review',
      'Access-control review',
      'Controlled assessment scope',
    ],
    technologies: ['Networking', 'Wireshark', 'Wireless Security'],
    status: 'Security Assessment / Academic Project',
    image: null,
    github: 'https://github.com/desire1515/wireless-network-security-assessment',
    demo: null,
    docs: null,
    featured: false,
    collaborative: false,
  },
  {
    id: 'studybuddy',
    title: 'StudyBuddy',
    category: 'Software Development',
    additionalCategories: [],
    description:
      'A student productivity web application for organizing study schedules, tracking study sessions, and building consistent study habits.',
    problem:
      'Help students plan classes and study sessions, manage reminders, and monitor their progress.',
    features: [
      'Class and study timetables',
      'Pomodoro study timer and session tracking',
      'Tasks, reminders, streaks, and weekly goals',
      'Analytics for daily study time, weekly progress, and subject breakdown',
      'Email/password authentication and local data caching',
    ],
    technologies: ['React', 'Vite', 'Firebase', 'Recharts', 'PWA', 'Capacitor'],
    status: 'Implementation Available',
    image: 'images/studybuddy-login.png',
    screenshots: [
      { label: 'Login Page', image: 'images/studybuddy-login.png' },
      { label: 'Registration Page', image: 'images/studybuddy-registration.png' },
    ],
    github: 'https://github.com/desire1515/studybuddy',
    demo: null,
    docs: null,
    featured: false,
    collaborative: false,
  },
];

export function getProjectCategories(project) {
  const additionalCategories = Array.isArray(project.additionalCategories)
    ? project.additionalCategories
    : [];

  return [...new Set([project.category, ...additionalCategories].filter(
    (category) => typeof category === 'string' && category.trim(),
  ))];
}

export const projectCategories = [
  'All Projects',
  ...new Set(projects.flatMap(getProjectCategories).sort((a, b) => a.localeCompare(b))),
];
