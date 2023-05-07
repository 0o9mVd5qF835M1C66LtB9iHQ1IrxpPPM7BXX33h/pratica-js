import Link from "next/link";
import Image from "next/image";

import { CardProject } from "../Card";
import {
  IoRocketOutline,
  IoCloudDownloadOutline,
  IoShareSocialOutline,
  IoCodeOutline,
} from "react-icons/io5";

import { recentPosts } from "@/services";

import imageGroupCode from "../../../public/images/code_group.jpg";
import { PostCard } from "../PostCard";
import { useEffect, useState } from "react";

export function Header() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const data = await recentPosts();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px-8 mt-10">
      <div className="flex items-center gap-10 md:flex-col lg:flex-row lg:mt-24">
        <div>
          <h1 className="font-bold text-transparent text-3xl lg:text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
            Tenha ideias de projetos Front-end com projetos reais
          </h1>
          <p className="mt-10 font-medium text-lg text-neutral-300">
            Esta procurando algum projeto mas não sabe qual projeto fazer ou por
            onde começar para treinar suas habilidades de HTML, CSS, JavaScript
            e afins. Aqui você pode encontrar repositórios e projetos pronto
            para você se inspirar e começar desenvolver os seus próprios
            projetos.
          </p>
        </div>

        <Image
          src={imageGroupCode}
          alt="Imagem de um grupo de pessoas trabalhando na mesa"
          className="w-[34rem] rounded-md hidden lg:block"
        />
      </div>

      <div class="flex flex-col mt-28">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-4">
          <div class="flex items-start p-4 rounded-xl bg-zinc-800 shadow-lg border-t-4 border-primary-900">
            <div class="flex items-center justify-center h-12 w-12">
              <IoRocketOutline size={36} className="text-zinc-100" />
            </div>

            <div class="ml-4">
              <p class="mt-2 text-sm text-zinc-100">
                Aqui você pode encontrar uma coleção com os melhores projetos
                para lhe inspirar na hora da criação.
              </p>
            </div>
          </div>

          <div class="flex items-start p-4 rounded-xl bg-zinc-800 shadow-lg border-t-4 border-primary-900">
            <div class="flex items-center justify-center h-12 w-12 ">
              <IoCloudDownloadOutline size={36} className="text-zinc-100" />
            </div>

            <div class="ml-4">
              <p class="mt-2 text-sm text-zinc-100">
                Escolha o projeto que você sinta que será desafiador para possa
                evoluir para o próximo nível!
              </p>
            </div>
          </div>

          <div class="flex items-start p-4 rounded-xl bg-zinc-800 shadow-lg border-t-4 border-primary-900">
            <div class="flex items-center justify-center h-12 w-12">
              <IoCodeOutline size={36} className="text-zinc-100" />
            </div>

            <div class="ml-4">
              <p class="mt-2 text-sm text-zinc-100">
                Baixe os desafios com arquivos iniciais com tudo que é
                necessários para concluir o desafio.
              </p>
            </div>
          </div>

          <div class="flex items-start p-4 rounded-xl bg-zinc-800 shadow-lg border-t-4 border-primary-900">
            <div class="flex items-center justify-center h-12 w-12">
              <IoShareSocialOutline size={36} className="text-zinc-100" />
            </div>

            <div class="ml-4">
              <p class="mt-2 text-sm text-zinc-100">
                Publique o desafio nas redes sociais para que todos possam ver e
                da feedback sobre seu código!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="font-bold text-transparent text-3xl lg:text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Publicados recentemente
        </h2>

        <div className="w-full flex flex-col items-center mt-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {console.log(posts)}
            {posts.map((post) => (
              <CardProject
                url={post.featuredImage.url}
                title={post.title}
                description={post.excerpt}
                tags={post.tags}
                difficulty={post.categories[0].name}
                slug={post.slug}
                key={post.title}
              />
            ))}
            {/* <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject /> */}
          </div>

          <Link
            href="/project"
            className="px-4 py-2 rounded-full text-lg font-semibold text-white border-primary-900 border-2 mt-10 hover:bg-primary-900 hover:text-dark-900 transition-all duration-250"
          >
            Veja mais projetos
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await recentPosts()) || [];

  return {
    props: { posts },
  };
}
