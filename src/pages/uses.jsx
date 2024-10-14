import { NextSeo } from 'next-seo'
import siteMeta from '@/data/siteMeta'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <NextSeo
        title="Uses - Lucas Draichi"
        description={siteMeta.description}
        canonical="https://draichiboard.com/uses"
        openGraph={{
          url: 'https://draichiboard.com/uses',
          images: [
            {
              url: `https://draichiboard.com/api/og?title=Uses&desc=Things I use every day to get my work done.`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'draichiboard.com',
        }}
      />
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="Nobody asked, but here are the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Hardware">
            <Tool title="13” MacBook Air, M1, 16GB RAM (2020)">
              I don&apos;t know how Apple makes such a tiny laptop so fast and
              responsive, no matter what load I put on it.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Software">
            <Tool title="Cursor">
              I use Cursor to write code. It&apos;s the best code editor
              I&apos;ve ever used.
            </Tool>
            <Tool title="Figma">
              I use Figma to design web and mobile apps. Also, it&apos;s great
              for mind maps and brainstorming.
            </Tool>
            <Tool title="Linear">
              I use Linear to manage my tasks and projects.
            </Tool>
            <Tool title="Obsidian">
              I use Obsidian to take notes and build my knowledge base.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
