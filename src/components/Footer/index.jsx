import Link from "next/link";

export function Footer() {
  return (
    <footer class=" max-w-7xl mx-auto border-t-4 border-zinc-800 mt-10">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Prática JS. Todos direitos reservados.
        </span>
        <ul class="flex flex-wrap items-center mt-3 gap-5 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/project">Projetos</Link>
          </li>

          <li>
            <Link href="/about">Sobre</Link>
          </li>

          <li>
            <Link
              href="https://github.com/ViniciusOliver-stack/pratica-js"
              target="_blank"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
