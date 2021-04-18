import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

const Question = ({ pagesQuestion }) => {
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

export default Question

export const getStaticPaths : GetStaticPaths = async () => {
  return {
    paths: [
      {params: {page: 'ahmadforhat'}},
      {params: {page: '1'}},
      {params: {page: '2'}}
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { page } = context.params
  const url = `https://api.github.com/users/${page}`

  const response = await fetch(url)
  const data = await response.json()

  return {
    props: {
      pagesQuestion: data,
    },
    revalidate: 10,
  }
}
