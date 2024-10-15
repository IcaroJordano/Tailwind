export function Footer() {
    return (
        <footer className="border-t-slate-50/10 border-transparent border">
            <div className="m-10 ml-20 w-10/12 flex justify-between  ">
                <div className="w-3/12  pb-5 justify-between flex text-sm text-white">
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