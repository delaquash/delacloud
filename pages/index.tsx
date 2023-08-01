import Image from 'next/image';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import FolderList from "@/components/Folder/FolderList";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session} = useSession()
    const router = useRouter();
    // useEffect(()=> {
    //     if(!session){
         
    //         router.push("/login")
    //     } else {
    //       console.log(session, "Session");
    //     }
    // }, [session])
  return (
    <div className='p-5 text-black'>
      <SearchBar />
      <FolderList />
    </div>
  )
}
