import Head from 'next/head'

interface MetaProps {
  title: string
}

export default function Meta({ title: titleString }: MetaProps) {
  const titleDisplay = `${titleString} - iCath`
  return (
    <Head>
      <title>{titleDisplay}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <meta name="description" content="i-Cath an online educational tool for cardiac catheterization learning" />
      <meta property="og:image" content="/images/ogimage.jpg" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
