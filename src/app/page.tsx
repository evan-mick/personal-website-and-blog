

import { redirect } from 'next/navigation';
import Image from 'next/image'
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Page() {
  
  //redirect('/dashboard');

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1>hi...</h1>
    </div>
  )
}
