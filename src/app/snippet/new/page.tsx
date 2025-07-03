import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import Spline from '@splinetool/react-spline/next';
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { Prisma } from '@prisma/client';

function CreateSnippetPage() {

    async function createsnipprt(formData: FormData) {
        'use server';
        const title = formData.get('title') as string;
        const code = formData.get('textarea') as string;

        if (!title || title.trim() === '') {
            throw new Error('Title is required.');
        }

        if (!code || code.trim() === '') {
            throw new Error('Code is required.');
        }

        const data: Prisma.SnippetCreateInput = {
            title: title.trim(),
            code: code.trim(),
        };

        await prisma.snippet.create({
            data: data,
        });

        redirect('/');
    }



    return (
        <div>
            <div className="relative overflow-hidden h-95 w-full">
                <div className="absolute inset-0 -bottom-15">
                    <Spline scene="https://prod.spline.design/i0W2W9FWUxNNuEHv/scene.splinecode" />
                </div>
            </div>
            {/* Form to create a new snippet */}
            <form action={createsnipprt}>
                <div className='p-6'>
                    <Label className='p-2 font-bold text-xl' >Title</Label>
                    <Input type='text' name='title' id='title' className='shadow-xl' required />
                </div>
                <div className='p-6'>
                    <Label className='p-2 font-bold text-xl'>Code</Label>
                    <Textarea name='textarea' id='textarea' className='shadow-xl' />
                </div>
                <div className='flex justify-center p-12'>
                    <Button type='submit' className='w-md font-bold font-stretch-expanded shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120'>Create</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateSnippetPage
