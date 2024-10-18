import { useEffect, useState } from "react"

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
    <div onClick={ativar} className="w-12 lg:w-14 items-center justify-center flex dark:bg-neutral-50  dark:border-neutral-300/50 dark:border bg-zinc-800 rounded-3xl lg:mr-56 border border-neutral-600/20 mr-3" >.</div>
    )
}