import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Spline from '@splinetool/react-spline/next';
export default function Home() {
  return (
    <div>
      <div>
      <Spline scene="https://prod.spline.design/i0W2W9FWUxNNuEHv/scene.splinecode"/>
      </div>
      <h1 className="font-bold text-5xl">Home</h1>
      <div className="flex items-center justify-between my-7">
        <h1 className="text-2xl">Snippets</h1>
        <Link href={"/snippet/new"}> <Button className="w-sm font-bold font-stretch-expanded shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120">New</Button> </Link>
      </div>
    </div>
  );
}
