import { BackIcon } from "@/assets/icons/BackIcon";
import { Loading } from "@/components/Loading";
import Link from "next/link";

export default function Output() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#0D0F12] text-[#E3E6E8] gap-20">
      <h1 className="text-8xl font-extrabold relative">
        <Link href="/" className="absolute -top-40 left-0">
          <BackIcon />
        </Link>
        Under Construction
      </h1>
      <Loading />
    </main>
  );
}
