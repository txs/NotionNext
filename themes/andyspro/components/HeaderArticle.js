import Link from 'next/link'
import { useGlobal } from '@/lib/global'
import formatDate from '@/lib/formatDate'
import TagItemMini from './TagItemMini'
import CONFIG_ANDYSPRO from '../config_andyspro'
import { useEffect } from 'react'

export default function HeaderArticle ({ post }) {
  const headerImage = post?.page_cover ? `url("${post.page_cover}")` : `url("/${CONFIG_ANDYSPRO.HOME_BANNER_IMAGE}")`
  console.log(post);
  const { locale } = useGlobal()
  const date = formatDate(
    post?.date?.start_date || post.createdTime,
    locale.LOCALE
  )

  const scrollTrigger = () => {
    const scrollS = window.scrollY
    const nav = document.querySelector('#sticky-nav')

    if (scrollS < 300) {
      nav && nav.classList.replace('bg-white', 'bg-none')
      nav && nav.classList.replace('text-black', 'text-white')
    } else {
      nav && nav.classList.replace('bg-none', 'bg-white')
      nav && nav.classList.replace('text-white', 'text-black')
    }
  }
  useEffect(() => {
    scrollTrigger()
    window.addEventListener('scroll', scrollTrigger)
    return () => {
      window.removeEventListener('scroll', scrollTrigger)
    }
  })

  return (  
    <>
      <div
          id="header"
          className="w-full sm:bg-local md:bg-fixed relative md:flex-shrink-0 overflow-hidden bg-contain xl:bg-cover bg-top  bg-no-repeat animate__animated animate__fadeIn"
          style={{ height: '75vh', minHeight: '30vw', maxHeight:'56.25vw',  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0,0,0,0), rgba(0, 0, 0, 0.3) ),${headerImage}` }}
        ></div>
      <header className=" animate__animated bg-opacity-70 relative top-0 w-full h-12 px-10 flex justify-center items-start font-sans">
        <div className='mt-8'>
          {/* 文章Title */}
          <div className="font-bold text-xl dark:shadow-text flex justify-center text-gray-700 dark:text-white font-sans">
            {post.title}
          </div>
          <section className="flex-wrap dark:shadow-text flex text-sm justify-center mt-2 text-gray-500 dark:text-gray-400 font-light leading-8">
            <div className='dark:text-gray-200'>
              {post.category && <>
                <Link href={`/category/${post.category}`} passHref>
                <a className="cursor-pointer mr-2 dark:hover:text-white border-b dark:border-gray-500 border-dashed">
                  <i className="mr-1 fas fa-folder-open" />
                  {post.category}
                </a>
                </Link>
                <span className="mr-2">|</span>
              </>}

              {post.tagItems && <>
                <div className='md:flex-nowrap flex-wrap md:justify-start inline-block shadow-none'>
                  <div> {post.tagItems.map(tag => (<TagItemMini key={tag.name} tag={tag} />))}</div>
                </div>
              </>}
              

              {post.type[0] !== 'Page' && (
                <>
                  <Link
                    href={`/archive#${post?.date?.start_date?.substr(0, 7)}`}
                    passHref
                  >
                    <a className="pl-1 mr-2 cursor-pointer hover:underline border-b dark:border-gray-500 border-dashed">
                    <i className="far fa-calendar-alt mr-1"/> {date}
                    </a>
                  </Link>
                </>
              )}

              <div className="hidden busuanzi_container_page_pv font-light mr-2">
                <span className="mr-2">|</span>
                <span className="mr-2 busuanzi_value_page_pv" />
                次觀看
              </div>
            </div>
          </section>
        </div>
      </header>
    </>
  )
}
