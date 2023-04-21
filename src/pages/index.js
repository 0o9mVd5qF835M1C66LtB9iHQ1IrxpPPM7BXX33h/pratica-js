import { Header } from '@/components/Header'

const posts = [
  { title: 'Learning React', excerpt: 'Learning React Testing' },
  { title: 'React with Tailwind', excerpt: 'Learning React with Tailwind' }
]

export default function Home() {
  return (
    <div>
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <div key="title">
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8"></div>
        </div>
      </div>
    </div>
  )
}
