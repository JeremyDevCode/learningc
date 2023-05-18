import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-[#0D0F12] text-[#E3E6E8] gap-20">
      <h1 className="text-8xl font-extrabold">
        Learning <span className="text-sky-400">C</span>
      </h1>
      <section className="flex flex-col gap-8 w-full">
        <h2 className="text-4xl">Declaración</h2>
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
    </main>
  );
}
