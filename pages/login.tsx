import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const login = () => {
    const router = useRouter();
    const { data: session } = useSession()
    useEffect(()=> {
        if(!session){
            router.push("/")
        }
    })
  return (
    <div className="flex justify-center items-center mt-[50%]">
        <button className="bg-blue-400 p-2 rounded-xl px-3 text-white" onClick={()=>signIn()}>
            Login with Google
        </button>
    </div>
  )
}

export default login;