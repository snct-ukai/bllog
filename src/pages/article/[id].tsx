import type { GetStaticPaths, NextPage } from 'next'
import Head from '../../components/Head'
import styles from '../../styles/article.module.scss'
import { GetStaticProps } from 'next'
import getArticle, {PageProps} from '../../utils/get_article'
import { getPaths } from '../../utils/get_paths'
import { Text } from "../../components/Text"
import { useRouter } from 'next/router'

type PathParams = {
  id: string,
}

const Home = (props: PageProps) => {
  const router = useRouter();
  if(router.isFallback){
    return(
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <Head title={props.title}/>

      <main className={styles.main}>
        <div className={styles.title}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.article}>
          <Text text={props.article}/>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home

export const getStaticPaths: GetStaticPaths = async() => {
  const getpaths = await getPaths();

  const paths = getpaths.map(id => ({params:{id: id}}));

  return{
    paths: paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async(context) => {
  const { id } = context.params as PathParams;
  const getprops = await getArticle(id);
  return getprops.title?({
    props:{
      title: getprops.title,
      article: getprops.article
    },
    revalidate: 300,
  }):{
    redirect:{
      destination: "/404",
      permanent: false
    }
  }
}
