import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';
import { title } from 'process';
import React from 'react'

const SnippetDetailPage = async( {params}:{params:Promise<{id:string}>} ) => {
    const id  = parseInt((await params).id);
    const snippet = await prisma.snippet.findUnique({
        where: {
            id: id
        }
    });

    if(!snippet) {
        return <div className='p-4 text-align-centre text-red-500'>Snippet not found</div>}

return (
  <div className="p-8">
    {/* Heading */}
    <h1 className="text-3xl underline font-bold mb-6">{snippet?.title}</h1>

    {/* Row: Spline left, buttons right */}
    <div className="flex items-center justify-between">
      
      {/* Spline Model with watermark hidden */}
      <div className="relative w-1/3 h-64 overflow-hidden">
        <div className="absolute inset-0 bottom-[-56px]"> 
          {/* Negative bottom to push watermark out of view */}
          <Spline scene="https://prod.spline.design/i0W2W9FWUxNNuEHv/scene.splinecode" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link href={`/snippet/${snippet.id}/edit`}><Button className="font-bold shadow-lg transition hover:scale-95">Edit</Button></Link>
        <Button className="bg-red-500 font-bold shadow-lg transition hover:scale-95 hover:bg-red-300">Delete</Button>
      </div>
    </div>
         <div>
        <pre className='mt-4 p-4 bg-gray-100 rounded-3xl overflow-x-auto'>
          <code>{snippet.code}</code>
        </pre>
      </div>
  </div>
);

}

export default SnippetDetailPage
