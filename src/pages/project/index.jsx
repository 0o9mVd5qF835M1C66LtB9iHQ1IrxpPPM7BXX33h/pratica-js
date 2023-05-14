import { PostCard } from "@/components/PostCard";
import { PostWidget } from "@/components/PostWidget";

import { getPosts } from "@/services";

export default function Projects({ posts }) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px-8 mt-10l flex flex-col  mt-10">
        <h2 className="font-semibold text-4xl text-primary-900 text-left bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
          Projetos
        </h2>
        <p className="border-l-2 pl-2 mt-6 text-zinc-500">
          Sinta-se a vontade para escolher o melhor desafio que se encaixa com a
          sua busca para alcançar o próximo nível!
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
