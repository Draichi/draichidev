import logoTalentify from '@/images/logos/airbnb.svg'
import logo2Mundos from '@/images/logos/airbnb.svg'
import logoTagview from '@/images/logos/airbnb.svg'
import logoIBM from '@/images/logos/airbnb.svg'

const siteMeta = {
  title: 'Lucas Draichi',
  description:
    'Lucas Draichi is a versatile software developer with experience spanning from 2014, specializing in back-end, front-end, and data science sectors.',
  copyright: 'Lucas Draichi',
  author: {
    name: 'Lucas Draichi',
    email: 'lucasdraichi@gmail.com',
    github: 'https://github.com/lucasdraichi',
    linkedin: 'https://www.linkedin.com/in/lucas-draichi-646a39222/',
  },
  siteUrl: 'https://lucas.dev',
}

export const resume = [
  {
    company: 'Freelancer',
    title: 'AI Engineer',
    logo: logoTalentify, // Replace with actual AI logo
    start: '2024',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Talentify',
    title: 'Senior Front-End Engineer',
    logo: logoTalentify,
    start: '2019',
    end: '2024',
  },
  {
    company: 'Freelance',
    title: 'Front-End Developer',
    logo: logo2Mundos, // Replace with a generic freelance logo
    start: '2018',
    end: '2019',
  },
  {
    company: '2Mundos',
    title: 'Backend Engineer',
    logo: logo2Mundos,
    start: '2017',
    end: '2018',
  },
  {
    company: 'Tagview',
    title: 'Frontend Engineer',
    logo: logoTagview,
    start: '2015',
    end: '2016',
  },
  {
    company: 'IBM',
    title: 'Web Builder',
    logo: logoIBM,
    start: '2014',
    end: '2015',
  },
]

export const projects = [
  {
    name: 'Formula 1 AI Analysis',
    description:
      'An open-source project that uses AI to predict the outcome of Formula 1 races and provide insights for racing teams. It leverages AI models and techniques like agentic workflows, RAG, large language models, and structured data regression.',
    link: {
      href: 'https://github.com/lucasdraichi/formula1-ai-analysis',
      label: 'github.com',
    },
    logo: '/images/logos/f1-ai.png',
  },
  {
    name: 'T-1000',
    description:
      'An algorithmic trading bot that uses deep reinforcement learning to learn trading strategies from historical crypto currency data. It autonomously adjusts and optimizes trading decisions in real-time.',
    link: {
      href: 'https://github.com/lucasdraichi/t-1000',
      label: 'github.com',
    },
    logo: '/images/logos/t-1000.png',
  },
  {
    name: 'Nuxt.js Documentation',
    description:
      'Contributed to the open-source Nuxt.js project by working on the documentation for version 3. This work helped thousands of users better understand and utilize the Nuxt framework, improving the developer experience for the community.',
    link: { href: 'https://nuxt.com/docs', label: 'nuxt.com' },
    logo: '/images/logos/nuxt.png',
  },
]

export default siteMeta
