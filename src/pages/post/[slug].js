import React from 'react'

import { getPostDetails, getPosts } from '@/services'
import { PostDetail } from '@/components/PostDetail'

export default function PostDetails({ post }) {
  return (
    <div>
      <PostDetail post={post} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)

  return {
    props: { post: data }
  }
}
export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false
  }
}
