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
          <h1 className="font-alcatraz text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Ferhat Aslan
          </h1>
          <div className="terminal hidden min-h-[100px] w-full flex-col items-start justify-start rounded-lg bg-slate-800">
            <span className="relative flex h-8 w-full items-center justify-start rounded-t-lg bg-black opacity-90">
              <div className="ml-3 flex flex-row gap-x-2">
                <span className="h-3 w-3 rounded-full bg-[#f56565]"></span>
                <span className="h-3 w-3 rounded-full bg-[#ed8936]"></span>
                <span className="h-3 w-3 rounded-full bg-[#32cc77]"></span>
              </div>
              <div className="text-ceter absolute flex w-full  items-center justify-center">
                <span>terminal.js</span>
              </div>
            </span>
            <span className="flex h-full w-full flex-col items-start justify-start p-3">
              <div className="text-sm text-white opacity-90">ferhataslan@feslan ~ %</div>
            </span>
          </div>
          <p className="text-lg leading-7 text-gray-500  dark:text-gray-400">
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
        <main className="mt-3 flex w-full flex-col items-start justify-start gap-y-2 border-none">
          <article className="w-full">
            <h1 className="text-lg">Frontend Developer @Ollang Inc.</h1>
            <span className="text-xs  text-indigo-500">06/2022 - present</span>
            <div className="opacity-70">
              Angular,HTML,CSS,MongoDb, AWS, Node.Js, TailwindCSS, Bootstrap,GRAPQL, REST API I was
              part of the developer team that developed A few dashboards such as client, translator,
              and admin dashboard which is used for managing jobs, orders, revisions, document, and
              payments. We used Angular, MongoDB, Fuse theme, RxJs, TailwindCss, Bootstrap,Angular
              Material, Strapi CMS, ApexChart, Figma and Docker on the Front-end Side. On the
              Back-end side, We were used NestJs, Grapql, AWS S3, Loopback, Prisma, Redis, For good
              Code quality, we used some Linter packages such as husky, prettier. For the project
              management we applied Agile Scrum methodologies (Atlassian Jira)
            </div>
          </article>
          <article className="w-full">
            <h1 className="text-lg">Frontend Developer Bootcamp traineeship @Patika.Dev</h1>
            <span className="text-xs  text-indigo-500">02/2022 - 05/2022</span>
            <div className="opacity-70">
              Created a Ecommerce website and Admin Dashboard (Backend And Frontend). Client can add
              new products ,edit or delete products and manages orders. Customers can order products
              and manager adresses and payment methods. Technologies: Angular, GIT, HTML/CSS,
              Bootstrap, Nodejs, ExpressJs, Heroku, GITHUB Actions
            </div>
          </article>
        </main>
      </div>
    </>
  )
}
