import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import { Inter } from "next/font/google";

import { IoLogoJavascript } from "react-icons/io5";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  const router = useRouter();

  return (
    <nav className={inter.className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px-8">
        <div className="flex items-end justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <p className="text-white text-xl font-semibold flex items-center gap-2">
                <IoLogoJavascript className="text-primary-900 text-3xl rounded-lg" />
                Prática JS
              </p>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-6 ml-4">
              <Link href="/">
                <p
                  className={`font-medium text-base ${
                    router.pathname === "/" ? "text-white" : "text-white/30"
                  }`}
                >
                  Home
                </p>
              </Link>
              <Link href="/project">
                <p
                  className={`font-medium text-base ${
                    router.pathname === "/project"
                      ? "text-white"
                      : "text-white/30"
                  }`}
                >
                  Projetos
                </p>
              </Link>
              <Link href="/about">
                <p
                  className={`font-medium text-base ${
                    router.pathname === "/about"
                      ? "text-white"
                      : "text-white/30"
                  }`}
                >
                  Sobre
                </p>
              </Link>
            </div>
          </div>

          <div className="mr-2 flex md:hidden">
            {" "}
            {/*Quando chegar em MD ele esconde o botão */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-white"
              onClick={handleMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              {/* Se for verdadeiro ele vai ficar com um ícone e se for falso ele fica com outro */}
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="backdrop-blur-lg h-screen flex items-center justify-center flex-col gap-6">
          <Link href="/">
            <p
              className={`font-medium text-base ${
                router.pathname === "/" ? "text-white" : "text-white/30"
              }`}
            >
              Home
            </p>
          </Link>
          <Link href="/">
            <p
              className={`font-medium text-base ${
                router.pathname === "/project" ? "text-white" : "text-white/30"
              }`}
            >
              Projetos
            </p>
          </Link>
          <Link href="/">
            <p
              className={`font-medium text-base ${
                router.pathname === "/about" ? "text-white" : "text-white/30"
              }`}
            >
              Sobre
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
