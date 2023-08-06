'use client'

// TO-DO: try to do redirect without a flash: https://theodorusclarence.com/blog/nextjs-redirect-no-flashing
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react';
import { UserContext } from './context';

export default function Home() {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user.state === 1) {
      router.push('/applicant');
    } else if (user.state === 2) {
      router.push('/lab');
    } else {
      router.push('/welcome');
    }
  })

  return <>App Dir Root</>

}