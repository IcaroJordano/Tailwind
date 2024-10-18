import { useEffect, useState } from "react"
import { GoSun } from "react-icons/go";
import { GoMoon } from "react-icons/go";

export function ButtonDarkMode() {
    const Html=document.querySelector('#Html')
    const [ativo,setAtivo]=useState(false)
    useEffect(()=>{
        if(ativo){
            Html.classList.add("dark")
        }
        else{
            Html.classList.remove("dark")
        }
    },[ativo])
    function ativar() {
        setAtivo(!ativo)
    }
    return(
    <div onClick={ativar} className="w-12 lg:w-14 items-center justify-center flex dark:bg-neutral-50  dark:border-neutral-300/50 dark:border bg-zinc-800 rounded-3xl lg:mr-56 border border-neutral-600/20 mr-3" >
        <GoSun className={`scale-125 ${ativo?"hidden":'block'} text-teal-400`}></GoSun>
        <GoMoon className={`scale-150 ${ativo?"block":'hidden'} text-teal-400`}></GoMoon>
    </div>
    )
}