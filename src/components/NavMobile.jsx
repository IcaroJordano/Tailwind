import { useState } from "react";
import { Navegation } from "./Navegation";

export function NavMobile() {
    let [ativo, setAtivo] = useState(false)
    return (
        <>
            <button onClick={() => { setAtivo(!ativo) }} className="w-24 dark:bg-neutral-50 dark:text-neutral-900 font-semibold rounded-full text-sm border border-neutral-600/20 text-white bg-gray-500/10 justify-center flex items-center  lg:hidden ml-32">
                Menu
                <div className="w-5 bg-gray-500/10 ml-3">.</div>
            </button>
            <Navegation setAtivo={setAtivo} ativo={ativo}></Navegation></>
    )
}