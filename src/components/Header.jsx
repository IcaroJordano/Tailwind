import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";


export function Header() {
    return (
        <header className="w-full h-11  my-6  align-baseline justify-between flex ">
            <div className="w-10 h-10   bg-slate-50 ml-4 lg:ml-28 rounded-full"> .</div>
            <NavDesktop></NavDesktop>
            <NavMobile></NavMobile>
            <div className="w-12 lg:w-14 items-center justify-center flex bg-gray-500/10 rounded-3xl lg:mr-28 border border-neutral-600/20 mr-3" >.</div>
        </header>
    )
}