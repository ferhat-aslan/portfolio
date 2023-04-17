import { PageSEO } from '@/components/SEO'
import linksData from '@/data/linksData'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'

export default function Links() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <h1 className="text-3xl font-extrabold leading-9  tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Favourite Links
        </h1>
        <section className="flex flex-row flex-wrap items-center justify-center gap-5 pt-5">
          {linksData.map((link) => (
            <Link
              href={link.href}
              target="blank"
              className="flex h-[250px] min-h-[250px] w-[250px] min-w-[250px] cursor-pointer flex-col items-start justify-start rounded-lg bg-indigo-500 transition hover:scale-90"
              key={link.title}
            >
              <img className="h-4/5  w-full rounded-t-lg object-cover" src={link.image} />
              <span className="w-full pt-2 text-center font-extrabold">{link.title}</span>
            </Link>
          ))}
        </section>
      </div>
    </>
  )
}
