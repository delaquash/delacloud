import { FolderListData } from '@/types';
import Image from 'next/image';
import React from 'react';


const FolderItem = ({name, id}:FolderListData) => {
  return (
    <div className='w-full flex flex-col border-[1px] p-5 bg-white cursor-pointer
       rounded-lg  justify-center items-center h-[120px] hover:scale-105 hover:shadow-md' >
      <Image 
        src="/folder.png"
        alt='folder'
        width={40}
        height={40}
      />
    
    <h2 className='line-clamp-2 text-center'>{name}</h2>
    </div>
  )
}

export default FolderItem