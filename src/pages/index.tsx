import Head from '../components/Head'
import styles from '../styles/Home.module.scss'
import { GetStaticProps } from 'next'
import { articleLink, getLinks } from '../utils/get_links'
import Link from 'next/link'

type props = {
  titles : string[],
  paths : string[]
}

const Home = (props: props) => {
  const links : articleLink[] = []
  for(let i = 0; i < props.paths.length; i++){
    const link: articleLink = {title: props.titles[i], path: props.paths[i]}
    links.push(link);
  }

  return (
    <div className={styles.container}>
      <Head/>
      <main className={styles.main}>
        <div className={styles.pagetitle}>
          <h2>記事一覧</h2>
        </div>
        <div className={styles.articles}>
        {
          links.map(link => {
            return(
              <Link href={`/article/${link.path}`}>
                <a className={styles.link}>
                  <div className={styles.text}>
                    <p>{link.title}</p>
                  </div>
                </a>
              </Link>)
          })
        }
        </div>
      </main>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async() => {
  const links = await getLinks();
  console.log(links);

  return {
    props:{
      paths: links.map(value => {return value.path}),
      titles: links.map(value => {return value.title}),
    },
    revalidate: 300
  };
}