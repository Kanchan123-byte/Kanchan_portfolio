import { GitProfileConfig } from './types';

const config: GitProfileConfig = {
  github: {
    username: 'Kanchan123-byte',
    sortBy: 'stars',
    limit: 10,
    exclude: {
      forks: true,
    },
  },
  social: {
    linkedin: 'kanchanjha30',
    medium: 'kanchanbyte',
    email: 'kanchanjh96@gmail.com',
  },
  resume: {
    fileUrl: 'https://longhaired-silence-c5a.notion.site/CV-22673fb67608802e9e71d76ad1f9fb61',
  },
  skills: [
    'SQL',
    'Power BI',
    'Tableau',
    'Excel',
    'Python',
    'Pandas',
    'Google Analytics',
    'ETL Pipelines',
    'Google Cloud',
    'AWS',
    'Recruitment Analytics',
    'HR Reporting',
    'Stakeholder Management',
    'Data Storytelling',
    'DEI Hiring',
  ],
  experiences: [
    {
      company: 'Xcellent Talents XP GmbH',
      position: 'Senior Recruiter & Talent Sourcing Specialist',
      from: '2024',
      to: '2024',
      companyLink: '',
    },
    {
      company: 'Bosenet Systemhaus GmbH',
      position: 'Talent Sourcing Specialist',
      from: '2021',
      to: '2023',
      companyLink: '',
    },
    {
      company: 'Indus Integrated Information Management Ltd.',
      position: 'HR Executive',
      from: '2017',
      to: '2019',
      companyLink: '',
    },
  ],
  education: [
    {
      institution: 'University of Saarland, Germany',
      degree: 'MBA',
      from: '2019',
      to: '2021',
    },
  ],
  certifications: [
    {
      name: 'FrauenLoop – Data Analysis & Business Intelligence',
    },
    {
      name: 'HackerRank – SQL Intermediate Certification',
    },
    {
      name: 'Google Data Analytics Certificate – INCO Academy (In Progress)',
    },
    {
      name: 'DataCamp – SQL Associate Certification (In Progress)',
    },
    {
    name: 'View All Credly Badges',
    link: 'https://www.credly.com/users/kanchan-jha.ea4f2e46',
  },
  ],
  projects: [
    {
      title: 'People Analytics Dashboard',
      description: 'Built an interactive dashboard analyzing employee attrition and hiring trends using SQL, Tableau, and Excel.',
      link: 'https://longhaired-silence-c5a.notion.site',
    },
    {
      title: 'Gender Employment & Pay Disparities Analysis',
      description: 'Analyzed Eurostat labor market data with Power BI to visualize employment trends by gender.',
      link: 'https://longhaired-silence-c5a.notion.site',
    },
  ],
  themeConfig: {
    defaultTheme: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    hideAvatarRing: false,
    themeSwitchIcon: '🌙',
  },
};

export default config;
