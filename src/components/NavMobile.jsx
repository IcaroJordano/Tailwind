import { useState } from "react";
import { Navegation } from "./Navegation";
import { IoIosArrowDown } from "react-icons/io";

export function NavMobile() {
    let [ativo, setAtivo] = useState(false)
    return (
        <>
            <button onClick={() => { setAtivo(!ativo) }} className="w-24 dark:bg-neutral-50 dark:text-neutral-900 font-semibold rounded-full text-sm border border-neutral-600/20 text-white bg-zinc-800 justify-center flex items-center  lg:hidden ml-32">
                Menu
                <IoIosArrowDown className="w-5  ml-3">.</IoIosArrowDown>
            </button>
            <Navegation setAtivo={setAtivo} ativo={ativo}></Navegation></>
    )
}