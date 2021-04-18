import React from 'react'
import Text from '../components/Text'
import Head from 'next/head'

interface HomeProps {
  org: any
}

const Home = ({ org } : HomeProps) => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <main>
        <Text>{org.description}</Text>
        <a href={org.blog}>Stie: {org.blog}</a>
      </main>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const url = "https://api.github.com/orgs/rocketseat"
  const getResponse = await fetch(url)
  const data = await getResponse.json()

  return {
    props: {
      org: data,
    }
  }
}
