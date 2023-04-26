import { PostCard } from '@/components/PostCard'
import { Categories } from '@/components/Categories'
import { PostWidget } from '@/components/PostWidget'

import { getPosts } from '@/services'

export default function Projects({ posts }) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px-8 mt-10l flex flex-col items-center mt-10">
        <h2 className="font-bold text-transparent text-3xl lg:text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Publicados recentemente
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
      </div>

      {/* <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8 border">
          <PostWidget />
          <Categories />
        </div>
      </div> */}
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts }
  }
}
