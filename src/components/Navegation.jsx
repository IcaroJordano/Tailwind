import { IoMdClose } from "react-icons/io";

export function Navegation({setAtivo,ativo}) {
    return (
        <div onClick={()=>{setAtivo(!ativo)}} className={`w-screen fixed transition-all duration-1000    ${ativo?"opacity-100":"opacity-0"} top-0 h-screen z-10 backdrop-blur-sm ${ativo?"block":"hidden"} dark:bg-transparent bg-zinc-950/90`}>
            <div className={`fixed bg-zinc-900 rounded-3xl border items-center z-20 transition ease-out duration-500 dark:bg-neutral-50 flex flex-col border-neutral-600/40 h-80 top-8 w-11/12 ml-4 ${ativo?"block":"hidden"}`}>
                <div className="text-gray-400/80  w-10/12 mt-10 dark:text-neutral-600 text-sm font-medium flex justify-between" >
                    Navigation <IoMdClose onClick={()=>{setAtivo(!ativo)}} className=" w-10 scale-150">.</IoMdClose>
                </div>
                <div className="w-10/12 flex flex-col text-neutral-200 dark:text-neutral-900">
                    <a className="border-b-white/10 dark:border-b-neutral-300/50 mt-4 pb-1 border-transparent border" href="">About</a>
                    <a className="border-b-white/10 dark:border-b-neutral-300/50 mt-4 pb-1 border-transparent border" href="">Articles</a>
                    <a className="border-b-white/10 dark:border-b-neutral-300/50 mt-4 pb-1 border-transparent border" href="">Projects</a>
                    <a className="border-b-white/10 dark:border-b-neutral-300/50 mt-4 pb-1 border-transparent border" href="">Speaking</a>
                    <a className=" mt-4 pb-1 " href="">Uses</a>
                </div>
            </div>
        </div>
    )
}