import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import Spline from '@splinetool/react-spline/next';

function page() {
    return (
        <div>
            <div className="relative overflow-hidden h-95 w-full">
                <div className="absolute inset-0 -bottom-12">
                    <Spline scene="https://prod.spline.design/i0W2W9FWUxNNuEHv/scene.splinecode" />
                </div>
            </div>
            <form>
                <div className='p-6'>
                    <Label className='p-2 font-bold text-xl' >Title</Label>
                    <Input type='text' name='title' id='title' className='shadow-xl' />
                </div>
                <div className='p-6'>
                    <Label className='p-2 font-bold text-xl'>Code</Label>
                    <Textarea name='textarea' id='textarea' className='shadow-xl' />
                </div>
                <div className='flex justify-center p-12'>
                    <Button type='submit' className='w-md font-bold font-stretch-expanded shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120'>New</Button>
                </div>
            </form>
        </div>
    )
}

export default page
