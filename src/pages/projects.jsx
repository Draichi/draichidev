import { NextSeo } from 'next-seo'
import { Card } from '@/components/Card'
import { NuxtIcon, GitHubIcon } from '@/components/SocialIcons'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMeta from '@/data/siteMeta'

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

const projects = [
  {
    name: 'Formula 1 AI Analysis',
    description:
      'An open-source project that uses AI to predict the outcome of Formula 1 races and provide insights for racing teams. It leverages AI models and techniques like agentic workflows, RAG, large language models, and structured data regression.',
    link: {
      href: 'https://github.com/Draichi/fastf1-predictions',
      label: 'github.com',
    },
    logo: GitHubIcon,
  },
  {
    name: 'T-1000',
    description:
      'An algorithmic trading bot that uses deep reinforcement learning to learn trading strategies from historical crypto currency data. It autonomously adjusts and optimizes trading decisions in real-time.',
    link: {
      href: 'https://github.com/Draichi/T-1000',
      label: 'github.com',
    },
    logo: GitHubIcon,
  },
  {
    name: 'Nuxt.js Documentation',
    description:
      'Contributed to the open-source Nuxt.js project by working on the documentation for version 3. This work helped thousands of users better understand and utilize the Nuxt framework, improving the developer experience for the community.',
    link: {
      href: 'https://nuxt.com/docs',
      label: 'nuxt.com',
    },
    logo: NuxtIcon,
  },
]

export default function Projects() {
  const headline = "Open-source projects I've worked on."
  const intro =
    "I'm passionate about open-source development and leveraging cutting-edge technologies to solve complex problems. Here are some of the projects I've created or contributed to significantly."

  return (
    <>
      <NextSeo
        title="Projects - Lucas Draichi"
        description={siteMeta.description}
        canonical="https://draichiboard.com/projects"
        openGraph={{
          url: 'https://draichiboard.com/projects',
          images: [
            {
              url: `https://draichiboard.com/api/og?title=Projects&desc=${headline}`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'draichiboard.com',
        }}
      />
      <SimpleLayout title={headline} intro={intro}>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <project.logo className="h-8 w-8" />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
