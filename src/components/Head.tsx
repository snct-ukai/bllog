import Head from "next/head"

const head = (props :{title?: string}) => {
  const title : string = props.title || "ブログ"
  return(
    <Head>
      <title>{title}</title>
      <meta name="description" content="This site is portfolio of Ukai Shota" />
      <meta name="viewport" content="width=device-width"/>
      <link rel="icon" href="/icon/icon.webp" />

      <meta httpEquiv="cache-control" content="max-age=31536000" />
    </Head>
  )
}

export default head;