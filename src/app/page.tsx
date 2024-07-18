'use client';
import React from 'react';
import { BackgroundBeams } from '../components/ui/background-beams';
import { Input } from '@/components/ui/input';

export default function Page() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hello I am a Student, my name is
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          corporis aliquam, dolorem deleniti est, sint eligendi hic at ab magnam
          quidem rerum excepturi ipsa? Harum distinctio laborum voluptas eius
          sed.
        </p>
        <Input placeholder="Email" />
      </div>
      <BackgroundBeams />
    </div>
  );
}
