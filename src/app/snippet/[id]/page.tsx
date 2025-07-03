import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
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
    <div>
      <h1>{snippet?.title}</h1>
      <Button className='font-bold font-stretch-expanded shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120'>Edit</Button>
      <Button className='font-bold font-stretch-expanded shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120'>Delete</Button>
    </div>
  )
}

export default SnippetDetailPage
