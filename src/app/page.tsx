import { ArrowIcon } from "@/assets/icons/ArrowIcon";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-[#0D0F12] text-[#E3E6E8] gap-20">
      <h1 className="text-8xl font-extrabold">
        Learning <span className="text-sky-400">C</span>
      </h1>
      <main className="flex flex-col w-full gap-16">
        <section className="flex flex-col gap-8 w-[36%] relative">
          <div className="flex gap-8 w-full justify-between">
            <h2 className="text-4xl">Declaración</h2>
            <button className="bg-[#FFFFFF11] text-[#999] hover:text-[#E3E6E8] p-2 rounded-md transition-colors hover:bg-[#FFFFFF15] ">
              <ArrowIcon />
            </button>
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
        <section className="flex flex-col gap-8 w-[36%] relative">
          <div className="flex gap-8 justify-between">
            <h2 className="text-4xl">Inicialización</h2>
            <button className="bg-[#FFFFFF11] text-[#999] hover:text-[#E3E6E8] p-2 rounded-md hover:bg-[#FFFFFF15]  transition-colors">
              <ArrowIcon />
            </button>
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
        <section className="flex flex-col gap-8 w-[36%] relative">
          <div className="flex gap-8 justify-between">
            <h2 className="text-4xl">Imprimir</h2>
            <button className="bg-[#FFFFFF11] text-[#999] hover:bg-[#FFFFFF15] hover:text-[#E3E6E8] p-2 rounded-md transition-colors">
              <ArrowIcon />
            </button>
          </div>
          <p className="text-2xl">
            <span className="text-sky-400 relative">
              printf
              <span className="absolute text-sm -bottom-5 left-0 w-[600px]">
                imprimir
              </span>
            </span>
            ("
            <span className="text-red-400 relative">
              El valor de a es
              <span className="absolute text-sm -bottom-5 -left-0">texto</span>
            </span>{" "}
            <span className="text-yellow-400 relative">
              %d
              <span className="absolute text-sm -bottom-5 -left-0">tipo</span>
            </span>
            ",{" "}
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
            ("
            <span className="text-red-400 relative">
              El valor de b es
              <span className="absolute text-sm -bottom-5 -left-0">texto</span>
            </span>{" "}
            <span className="text-yellow-400 relative">
              %f
              <span className="absolute text-sm -bottom-5 -left-0">tipo</span>
            </span>
            ",{" "}
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
    </main>
  );
}
