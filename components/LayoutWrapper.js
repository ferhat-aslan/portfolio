import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'

import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ textClass, children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <img height={35} className="max-h-[35px]" src="./static/code-2.png" />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:hidden">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:flex">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="dot-parent flex p-1 font-medium text-gray-900 hover:opacity-75 dark:text-gray-100 sm:p-4"
                >
                  <span className="dot  mr-2 mt-[5px] h-[10px] min-h-[10px] w-[10px] min-w-[10px] rounded-full bg-black text-xl dark:bg-white"></span>{' '}
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
