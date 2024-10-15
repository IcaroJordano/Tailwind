export function Email() {
    return (
        <div className=" w-10/12  rounded-2xl pl-5 pt-5 border-solid border border-neutral-600/50">
            <h2 className="flex text-slate-100 text-sm"><div className="w-7 mr-3 bg-neutral-600" >.</div> Stay up to date</h2>
            <p className="my-4 text-gray-400/90 text-sm w-5/6" >Get notified when I publish something new, and unsubscribe at any time.</p>
            <form className="flex flex-row h-10 my-5 " action="">
                <input className="w-72 bg-zinc-600/10 text-white/100   mr-5 pl-3 text-sm rounded-lg border-solid border border-neutral-600 " type="email" placeholder="Email address"  />
                <input className="w-12 decoration-white text-slate-50 text-sm bg-gray-400/40 rounded-md cursor-pointer" type="submit" value="Join" />
            </form>
        </div>
    )
}