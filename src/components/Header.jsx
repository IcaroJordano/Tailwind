export function Header() {
    return (
        <header className="w-full h-11  my-6  align-baseline justify-between flex ">
            <div className="w-10 h-10   bg-slate-50  ml-28 rounded-full"> .</div>
            <nav className="w-24 align-bottom justify-around flex bg-zinc-800 rounded-full sm:w-4/12 " >
                <a className="text-slate-100 text-sm text-center my-auto " href="">About</a>
                <a className="text-slate-100 text-sm text-center my-auto " href="">Artices</a>
                <a className="text-slate-100 text-sm text-center my-auto " href="">Projects</a>
                <a className="text-slate-100 text-sm text-center my-auto " href="">Speaking</a>
                <a className="text-slate-100 text-sm text-center my-auto " href="">Uses</a> 
            </nav>
            <div className="w-14 bg-slate-400 rounded-3xl mr-28" ></div>
        </header>
    )
}