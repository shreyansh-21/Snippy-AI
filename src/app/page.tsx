import { Button } from "@/components/ui/button";
import Link from "next/link";
import Spline from '@splinetool/react-spline/next';
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();//array of objects hai
  return (
    <div>
      <h1 className="font-bold text-5xl">Home</h1>
      {/* Method 1: Container with overflow hidden to crop watermark */}
      <div className="relative overflow-hidden h-95 w-full">
        <div className="absolute inset-0 -bottom-15">
          <Spline scene="https://prod.spline.design/i0W2W9FWUxNNuEHv/scene.splinecode"/>
        </div>
      </div>


      <div className="flex items-center justify-between my-7">
        <h1 className="text-2xl font-bold">Snippets</h1>
        <Link href={"/snippet/new"}> 
          <Button className="w-sm font-bold font-stretch-expanded shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-90">
            New
          </Button> 
        </Link>
      </div>

      {
        snippets.map((snippet:any)=>(
          <div key={snippet.id} className="flex items-center justify-between p-4 my-2 bg-gray-100 rounded-lg shadow-md">
            <h1 className="font-medium">{snippet.title}</h1>
            <Link href={`/snippet/${snippet.id}`} ><Button className="transition delay-150 duration-300 ease-in-out hover:scale-90">View</Button></Link>
          </div>
        ))
      }
    </div>
  );
}
