import React, { useState } from 'react';
import { useRouter } from "next/router";
import { FolderListData } from "@/types";
import FolderItem from './FolderItem';


const FolderList = () => {
    const router = useRouter()
      const folderList: FolderListData[]=[
      {
          id:1,
          name:'Folder 1 to Test Big Text'
      },
      {
          id:2,
          name:'Folder 2'
      },
      {
          id:3,
          name:'Folder 3'
      },
      {
          id:4,
          name:'Folder 4'
      },
      {
          id:5,
          name:'Folder 4'
      },
  ]
  return (
    <div
      className="p-5 mt-5 
    bg-white rounded-lg"
    >
    {/* {isBig?   */}
    <h2
        className="text-17px] 
        font-bold 
        items-center"
      >
        Recent Folders
        <span
          className="float-right
        text-blue-400 font-normal
        text-[13px]"
        >
          View All
        </span>
      </h2>
       {/* :null} */}
      {/* {isBig?    */}
      <div
        className="grid grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5 mt-3
        gap-4 m-3"
      >
        {folderList.map((item, index) => (
          <div 
            key={index} 
        // onClick={() => onFolderClick(index, item)}
          >
        <FolderItem 
            id={item.id} 
            name={item.name}
        />
          
          </div>
        ))}
      </div>
      {/* : */}
      <div
      className=" 
      "
    >
      {folderList.map((item, index) => (
        <div key={index} 
        // onClick={() => onFolderClick(index, item)}
        >
      {/* <FolderItemSmall folder={item} /> */}
        
        </div>
      ))}
    </div>
      {/* } */}
    </div>
  );
}

export default FolderList