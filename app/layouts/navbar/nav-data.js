import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Linkedin',
    url: `https://www.linkedin.com/in/williams-peter-4b8bb4177/`,
    icon: 'linkedin',
  },
  {
    label: 'Medium',
    url: `https://medium.com/@ghostsmaw`,
    icon: 'medium',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
