
export function NavDesktop() {

    return(
        <nav className={`w-96 hidden lg:flex align-bottom text-slate-100 dark:text-slate-900 justify-around bg-zinc-800 dark:bg-neutral-50 rounded-full dark:border-neutral-300/50 dark:border`} >
                <a className=" text-sm text-center my-auto " href="">About</a>
                <a className=" text-sm text-center my-auto " href="">Artices</a>
                <a className=" text-sm text-center my-auto " href="">Projects</a>
                <a className=" text-sm text-center my-auto " href="">Speaking</a>
                <a className=" text-sm text-center my-auto " href="">Uses</a> 
        </nav>
    )
}