import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  MastodonIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/lucas-head.png'
import siteMeta from '@/data/siteMeta'
import { NextSeo } from 'next-seo'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About - Lucas Draichi"
        description="Lucas Draichi - Versatile software developer with experience in back-end, front-end, and data science"
        canonical="https://lucas.dev/about"
        openGraph={{
          url: 'https://lucas.dev/about',
          images: [
            {
              url: `https://og.lucas.dev/api/og?title=About&desc=Lucas Draichi - Versatile software developer`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'lucas.dev',
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Lucas Draichi"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi I&apos;m Lucas Draichi.
            </h1>
            <div className="prose mt-6 space-y-7 text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400">
              <p>
                I am a versatile software developer with experience spanning
                from 2014, starting in my first year of studying Computer
                Engineering. I&apos;ve been in the technology field since 2014.
                I love exploring different programming languages and working on
                innovative projects. Here are some highlights about me and my
                career:
              </p>
              <p>
                <b>Senior Front-End Engineer:</b> Led a team at Talentify to
                build a cutting-edge recruitment platform with over 3 million
                active users.
              </p>
              <p>
                <b>Full-Stack Experience:</b> Worked on various roles from
                backend development at 2Mundos to frontend engineering at
                Tagview and IBM.
              </p>
              <p>
                <b>AI Enthusiast:</b> Currently working as an AI Engineer,
                developing AI assistants and integrating AI technologies with
                front-end experiences.
              </p>
              <p>
                <b>Open Source Contributor:</b> Maintainer of Formula 1 AI
                Analysis, an open-source project leveraging AI for Formula 1
                racing analytics.
              </p>
              <p>
                <b>Continuous Learner:</b> Completed specializations in Deep
                Learning and constantly updating my skills in modern frameworks
                and technologies.
              </p>
              <p>
                I&apos;m passionate about creating efficient, scalable solutions
                and leveraging cutting-edge technologies to solve complex
                problems. I love collaborating with teams and contributing to
                innovative projects that push the boundaries of what&apos;s
                possible in tech.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href={siteMeta.author.twitter} icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink> */}
              <SocialLink
                href={siteMeta.author.linkedin}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={siteMeta.author.github}
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href={`mailto:lucasdraichi@gmail.com`}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                lucasdraichi@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
