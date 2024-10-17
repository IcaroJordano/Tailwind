import { CardWork } from "./CardWork";

export function Work() {
    return (
        <div className=" w-11/12 lg:w-10/12 pb-10 mt-10 border-solid rounded-2xl border dark:border-neutral-300/50 border-neutral-600/50">
            <h2 className="flex text-slate-100 dark:text-neutral-800 font-bold text-sm m-6"><div className="w-7 mr-3 bg-neutral-600" >.</div> Work</h2>
            <CardWork></CardWork>
            <CardWork></CardWork>
            <CardWork></CardWork>
            <CardWork></CardWork>
            <a className="px-28 lg:px-36 py-3 text-sm text-white dark:text-neutral-900 font-medium dark:bg-neutral-200/50 rounded-md ml-6 lg:ml-7 bg-neutral-600/10" href="">Download CV</a>
        </div>
    )
}