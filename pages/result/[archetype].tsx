import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

const Result = ({ archetypesInfo }) => {
  const { isFallback } = useRouter()

  if(isFallback) {
    return <p>...carregando</p>
  }

  return (
    <div>
      <h2>batata</h2>
    </div>
  )
}

export default Result

export const getStaticPaths : GetStaticPaths = async () => {
  return {
    paths: [
      {params: {archetype: 'ahmadforhat'}},
      {params: {archetype: 'criativo'}},
      {params: {archetype: 'magico'}}
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { archetype } = context.params
  const url = `https://api.github.com/users/${archetype}`

  const response = await fetch(url)
  const data = await response.json()

  return {
    props: {
      archetypesInfo: data,
    },
    revalidate: 10,
  }
}
