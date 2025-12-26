"use client"
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation"
import { use } from "react";
export default function Home() {
  const pathname=usePathname();
  console.log("pathname",pathname);
  return (
    <div>
      <h1>Iam home page</h1>
      <div className="flex gap-4 m-6">
         <Link href="/" className={`shadow-xl p-2 text-4 border-amber-100
        border-[1px] rounded-xl ${pathname===`/` ? 'bg-amber-500 text-white' : ''}`}>  Home </Link>
        <Link href="/contact_us" className="shadow-xl p-2 text-4 border-amber-100
        border-[1px] rounded-xl"> contact us </Link>
        <Link href="/support" className="shadow-xl p-2 text-4 border-amber-100
        border-[1px] rounded-xl">  support </Link>
        <Link href="/to_do_2" className="shadow-xl p-2 text-4 border-amber-100
        border-[1px] rounded-xl">to_do_2</Link>
        <Link href="/to_do" className="shadow-xl p-2 text-4 border-amber-100
        border-[1px] rounded-xl">  todo </Link>
      </div>
    </div>
  );
}
