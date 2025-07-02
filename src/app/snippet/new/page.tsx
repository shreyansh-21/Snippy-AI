import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function page() {
  return (
    <form>
      <div className='p-6'>
        <Label className='p-2 font-bold text-xl' >Title</Label>
        <Input type='text' name='title' id='title' className='shadow-xl'/>
      </div>
      <div className='p-6'>
        <Label className='p-2 font-bold text-xl'>Code</Label>
        <Textarea name='textarea' id='textarea' className='shadow-xl'/>
      </div>
      <div className='flex justify-center p-12'>
      <Button type='submit' className='w-md font-bold font-stretch-expanded shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120'>New</Button>
      </div>
    </form>
  )
}

export default page
