import { ArrowIcon } from "@/assets/icons/ArrowIcon";
import { GoIcon } from "@/assets/icons/GoIcon";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-[#0D0F12] text-[#E3E6E8] gap-20">
      <h1 className="text-8xl font-extrabold">
        Learning <span className="text-sky-400">C</span>
      </h1>
      <main className="flex items-start justify-center w-full">
        <main className="flex flex-col w-full gap-16">
          <section className="flex flex-col gap-8 w-[70%] relative">
            <div className="flex gap-8 w-full justify-between">
              <h2 className="text-4xl">Declaración</h2>
              <Link
                href="/declaration"
                className="bg-[#FFFFFF11] text-[#999] hover:text-[#E3E6E8] p-2 rounded-md transition-colors hover:bg-[#FFFFFF15] "
              >
                <ArrowIcon />
              </Link>
            </div>
            <p className="text-2xl">
              <span className="text-red-400 relative">
                int
                <span className="absolute text-sm -bottom-5 left-0 w-[600px]">
                  Se usa para declarar un entero
                </span>
              </span>{" "}
              a;
            </p>
            <p className="text-2xl">
              <span className="text-green-400 relative">
                float
                <span className="absolute text-sm -bottom-5 left-0 w-[600px]">
                  Se usa para declarar un flotante
                </span>
              </span>{" "}
              b;
            </p>
          </section>
          <section className="flex flex-col gap-8 w-[70%] relative">
            <div className="flex gap-8 justify-between">
              <h2 className="text-4xl">Inicialización</h2>
              <Link
                href="/initialization"
                className="bg-[#FFFFFF11] text-[#999] hover:text-[#E3E6E8] p-2 rounded-md hover:bg-[#FFFFFF15] transition-colors"
              >
                <ArrowIcon />
              </Link>
            </div>
            <p className="text-2xl">
              <span className="text-red-400 relative">
                a
                <span className="absolute text-sm -bottom-5 left-0 w-[600px]">
                  Se usa para darle un valor a una variable de tipo entero
                </span>
              </span>{" "}
              = 20;
            </p>
            <p className="text-2xl">
              <span className="text-green-400 relative">
                b
                <span className="absolute text-sm -bottom-5 left-0 w-[600px]">
                  Se usa para darle un valor a una variable de tipo flotante
                </span>
              </span>{" "}
              = 7.5;
            </p>
          </section>
          <section className="flex flex-col gap-8 w-[70%] relative">
            <div className="flex gap-8 justify-between">
              <h2 className="text-4xl">Imprimir</h2>
              <Link
                href="/output"
                className="bg-[#FFFFFF11] text-[#999] hover:bg-[#FFFFFF15] hover:text-[#E3E6E8] p-2 rounded-md transition-colors"
              >
                <ArrowIcon />
              </Link>
            </div>
            <p className="text-2xl">
              <span className="text-sky-400 relative">
                printf
                <span className="absolute text-sm -bottom-5 left-0 w-[600px]">
                  imprimir
                </span>
              </span>
              (&#34;
              <span className="text-red-400 relative">
                El valor de a es
                <span className="absolute text-sm -bottom-5 -left-0">
                  texto
                </span>
              </span>{" "}
              <span className="text-yellow-400 relative">
                %d
                <span className="absolute text-sm -bottom-5 -left-0">tipo</span>
              </span>
              &#34;,{" "}
              <span className="text-green-400 relative">
                a
                <span className="absolute text-sm -bottom-5 -left-0">
                  variable
                </span>
              </span>
              );
            </p>
            <p className="text-2xl">
              <span className="text-sky-400 relative">
                printf
                <span className="absolute text-sm -bottom-5 left-0 w-[600px]">
                  imprimir
                </span>
              </span>{" "}
              (&#34;
              <span className="text-red-400 relative">
                El valor de b es
                <span className="absolute text-sm -bottom-5 -left-0">
                  texto
                </span>
              </span>{" "}
              <span className="text-yellow-400 relative">
                %f
                <span className="absolute text-sm -bottom-5 -left-0">tipo</span>
              </span>
              &#34;,{" "}
              <span className="text-green-400 relative">
                b
                <span className="absolute text-sm -bottom-5 -left-0">
                  variable
                </span>
              </span>
              );
            </p>
          </section>
        </main>
        <article className="flex flex-col items-end justify-start w-full gap-8 border-y-2 border-[#707070]">
          <div className="border-b-2 w-full border-[#707070] pb-8 pt-5">
            <Link href="/" className="group/blog">
              <div className="flex justify-between group-hover/blog:text-yellow-400 transition-colors">
                <h2 className="text-2xl">¿Cómo declarar un entero?</h2>
                <GoIcon />
              </div>
              <p className="text-xs">
                Programación, Recursos, Aprendizaje | Español
              </p>
            </Link>
          </div>
          <div className="border-b-2 w-full border-[#707070] pb-8 pt-5">
            <Link href="/" className="group/blog">
              <div className="flex justify-between group-hover/blog:text-yellow-400 transition-colors">
                <h2 className="text-2xl">¿Cómo inicializar un entero?</h2>
                <GoIcon />
              </div>
              <p className="text-xs">
                Programación, Recursos, Aprendizaje | Español
              </p>
            </Link>
          </div>
          <div className="border-b-2 w-full border-[#707070] pb-8 pt-5">
            <Link href="/" className="group/blog">
              <div className="flex justify-between group-hover/blog:text-yellow-400 transition-colors">
                <h2 className="text-2xl">¿Cómo imprimir un entero?</h2>
                <GoIcon />
              </div>
              <p className="text-xs">
                Programación, Recursos, Aprendizaje | Español
              </p>
            </Link>
          </div>
          <div className="border-b-2 w-full border-[#707070] pb-8 pt-5">
            <Link href="/" className="group/blog">
              <div className="flex justify-between group-hover/blog:text-yellow-400 transition-colors">
                <h2 className="text-2xl">¿Cómo mejorar mi lógica?</h2>
                <GoIcon />
              </div>
              <p className="text-xs">
                Programación, Recursos, Lógica | Español
              </p>
            </Link>
          </div>
          <div className="w-full pb-8 pt-5">
            <Link href="/" className="group/blog">
              <div className="flex justify-between group-hover/blog:text-yellow-400 transition-colors">
                <h2 className="text-2xl">¿Cómo ser un mejor programador?</h2>
                <GoIcon />
              </div>
              <p className="text-xs">
                Programación, Recursos, Motivación | Español
              </p>
            </Link>
          </div>
        </article>
      </main>
    </main>
  );
}
