import BlogPostListPage from './components/BlogPostListPage'
import Header from './components/Header'
import CONFIG_ANDYSPRO from './config_andyspro'
import LayoutBase from './LayoutBase'

export const LayoutIndex = (props) => {
  return <LayoutBase {...props} headerSlot={CONFIG_ANDYSPRO.HOME_BANNER_ENABLE && <Header/>}>
      <BlogPostListPage {...props}/>
  </LayoutBase>
}
