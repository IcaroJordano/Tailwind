import { useState } from "react";
import { NavDesktop } from "./NavDesktop";
import { Navegation } from "./Navegation";


export function Header() {
    let [ativo,setAtivo]=useState(false)
    return (
        <header className="w-full h-11  my-6  align-baseline justify-between flex ">
            <div className="w-10 h-10   bg-slate-50 ml-4 lg:ml-28 rounded-full"> .</div>
            <NavDesktop></NavDesktop>
            <button onClick={()=>{setAtivo(!ativo)}} className="w-24 rounded-full text-sm border border-neutral-600/20 text-white bg-gray-500/10 justify-center flex items-center  lg:hidden ml-32">
                Menu
                <div className="w-5 bg-gray-500/10 ml-3">.</div>
            </button>
            <Navegation setAtivo={setAtivo} ativo={ativo}></Navegation>
            <div className="w-12 lg:w-14 items-center justify-center flex bg-gray-500/10 rounded-3xl lg:mr-28 border border-neutral-600/20 mr-3" >.</div>
        </header>
    )
}