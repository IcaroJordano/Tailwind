export function NavDesktop() {
    return(
        <nav className="w-96 hidden lg:flex align-bottom justify-around bg-zinc-800 rounded-full" >
                <a className="text-slate-100 text-sm text-center my-auto " href="">About</a>
                <a className="text-slate-100 text-sm text-center my-auto " href="">Artices</a>
                <a className="text-slate-100 text-sm text-center my-auto " href="">Projects</a>
                <a className="text-slate-100 text-sm text-center my-auto " href="">Speaking</a>
                <a className="text-slate-100 text-sm text-center my-auto " href="">Uses</a> 
        </nav>
    )
}