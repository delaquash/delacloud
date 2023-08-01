import menu from "@/menu/data";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const SideNavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
    const router = useRouter()
  return (
    <div className="w-[200px] bg-white h-screen sticky top-0
      z-10 shadow-md p-5">
      <div className="flex justify-center">
        <Image src="/cd_logo.png" alt="logo" className="cursor-pointer" 
            width={150} height={60}  onClick={()=>router.push('/')}
        />
      </div>
        <button 
          //  onClick={()=>window.upload_file.showModal()}
          className="flex gap-2 items-center text-[13px]
          bg-black p-2 text-white rounded-md px-3
          hover:scale-105 transition-all mt-5 w-full justify-center"
        >
          Add New File
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button
          className="flex gap-2 items-center text-[13px]
          bg-black w-full p-2 justify-center text-white rounded-md px-3
          hover:scale-105 transition-all mt-1"
          // onClick={()=>window.my_modal_3.showModal()}
        >
          Create Folder
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      <div className="mt-7">
        {menu.list.map((item, index)=> (
            // <>
            <h2
            key={index}
            onClick={()=>setActiveIndex(index)}
            className={`flex gap-2 items-center
            p-2 mt-3 text-gray-500 rounded-md cursor-pointer
            hover:bg-black hover:text-white
            ${activeIndex == index ? 'bg-black text-white'
                : null}
            `}>
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={item.logo} />
                </svg>
              {item.name}
              </h2>
            ))}
      </div>
        <dialog id="my_modal_3" className="modal">
            {/* <CreateFolderModal/> */}
        </dialog>
        <dialog id="upload_file" className="modal">
            {/* <UploadFileModal  */}
             {/* closeModal={()=>window.upload_file.close()}/> */}
        </dialog>
    </div>
  )
}

export default SideNavBar