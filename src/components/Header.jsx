import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";
import { useEffect, useState } from "react"

export function Header() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                setIsHidden(true); // Esconde o menu ao rolar para baixo
            } else {
                setIsHidden(false); // Mostra o menu ao rolar para cima
            }
            setLastScrollTop(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Limpa o eventListener
    }, [lastScrollTop]);
    return (
        <header className={`w-full h-11 z-50 transition-transform duration-300   fixed    align-baseline justify-between flex ${isHidden ? "-translate-y-full" : 'translate-y-5'}`}>
            <div className="w-10 h-10   bg-zinc-800 ml-4 lg:ml-28 rounded-full"> .</div>
            <NavDesktop></NavDesktop>
            <NavMobile></NavMobile>
            <div className="w-12 lg:w-14 items-center justify-center flex bg-zinc-800 rounded-3xl lg:mr-56 border border-neutral-600/20 mr-3" >.</div>
        </header>
    )
}