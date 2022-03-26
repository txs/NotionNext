import BLOG, { COMMENT_GISCUS_REPO, COMMENT_GISCUS_REPO_ID } from '@/blog.config'
import { useEffect, useState } from 'react'
import { Giscus } from '@giscus/react';

// import { theme } from '@/tailwind.config';

/**
 * 評論插件
 * @param mapping
 * @param term
 * @param layout
 * @returns {JSX.Element}
 * @constructor
 */
const GiscusComponent = ({ mapping, term, isDarkMode, layout }) => {
    const theme = isDarkMode ? 'dark': 'light'
    // let theme
    // const [theme, setTheme] = useState('light');
    // useEffect(() => {
    //     theme = isDarkMode ? 'dark': 'light'
    //     console.log(theme);
    //     // const theme = 'light'
    //     //   BLOG.APPEARANCE === 'auto'
    //     //     ? 'preferred-color-scheme'
    //     //     : BLOG.APPEARANCE === 'light'
    //     //       ? 'light'
    //     //       : 'dark'
    //     // console.log('theme:'+theme);
    //     // return () => {
    //     // }
    //     if(isDarkMode()===true){
    //         setTheme('light')
    //     }else{
    //         setTheme('dark')
    //     }
    //     console.log(theme); 
    //     console.log(isDarkMode); 
    // })

    // console.log(isDarkMode);
    console.log(term);
  
  return <Giscus
    repo={BLOG.COMMENT_GISCUS_REPO}
    repoId={BLOG.COMMENT_GISCUS_REPO_ID}
    category={BLOG.COMMENT_GISCUS_CATEGORY}
    categoryId={BLOG.COMMENT_GISCUS_CATEGORY_ID}
    mapping={mapping}
    term={term}
    reactionsEnabled={BLOG.COMMENT_GISCUS_REACTIONS_ENABLED}
    emitMetadata={BLOG.COMMENT_GISCUS_EMIT_METADATA}
    theme={theme}
    inputPosition={BLOG.COMMENT_GISCUS_INPUT_POSITION}
    lang={BLOG.COMMENT_GISCUS_LANG}
    loading={BLOG.COMMENT_GISCUS_LOADING}
    crossorigin={BLOG.COMMENT_GISCUS_CROSSORIGIN}
    />
}

export default GiscusComponent
