import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import TechStack from '@/components/techstack'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import myTechStack from '@/data/myTechStack'
const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1
            style={{ fontFamily: 'Alcatraz' }}
            className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
          >
            Ferhat Aslan
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {/* {siteMetadata.description} */}A Software Developer who is focused on{' '}
            <img
              className="inline-block"
              width={25}
              height={25}
              src="/static/images/world-wide-web.png"
            />
            <sup>Web</sup> and{' '}
            <img className="inline-block" width={25} height={25} src="/static/images/iot.png" />{' '}
            <sup>IoT</sup>
          </p>
        </div>
        <section className="mb-10 mt-2 w-full pt-2 text-center font-alcatraz text-2xl">
          My Tech Stach
        </section>
        <main className="grid w-full grid-cols-2 justify-items-center gap-5 border-none sm:grid-cols-4 md:grid-cols-6">
          {myTechStack.map((res) => (
            <TechStack src={res.src} text={res.title} />
          ))}
        </main>
        <section className="mb-10 mt-2 w-full pt-2 text-center font-alcatraz text-2xl">
          Experience
        </section>
      </div>
    </>
  )
}
