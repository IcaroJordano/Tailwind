export function Footer() {
    return (
        <footer className="border-t-slate-50/10 dark:border-t-slate-400/20 border-transparent border">
            <div className="m-10 items-center lg:ml-20 w-10/12 flex flex-col lg:flex-row justify-between  ">
                <div className=" w-9/12 lg:w-3/12  pb-5 justify-between flex font-semibold lg:font-normal dark:text-neutral-900 text-sm text-white">
                    <a className="hover:text-teal-500" href="">About</a>
                    <a className="hover:text-teal-500" href="">Projects</a>
                    <a className="hover:text-teal-500" href="">Speaking</a>
                    <a className="hover:text-teal-500" href="">Uses</a>
                </div>
                <h2 className="text-sm text-gray-400/90"> © 2024 Spencer Sharp. All rights reserved.</h2>
            </div>

        </footer>
    )
}