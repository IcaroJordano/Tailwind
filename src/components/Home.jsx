import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Home() {
    return (
        <section className=" h-3/6 ">
            <h1 className=" ml-4 lg:ml-24 mt-40 lg:mt-36 text-3xl lg:text-5xl font-bold leading-snug lg:leading-tight w-11/12 lg:w-7/12  text-white dark:text-neutral-800" >Software designer, founder, and amateur astronaut.</h1>
            <p className="ml-4 lg:ml-24 mt-7 lg:mt-6 w-12/12 lg:w-7/12 text-gray-400 dark:text-neutral-600 text-base leading-relaxed lg:leading-7 ">I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>
            <div className="w-5/12 lg:w-2/12 ml-5 lg:ml-24 mt-5 h-6 flex  justify-between">
                <FaXTwitter className="text-neutral-300/80 scale-150 dark:text-neutral-600 w-1/6 rounded-lg " ></FaXTwitter>
                <FaInstagram className="scale-150 text-neutral-300/80 dark:text-neutral-600 w-1/6 rounded-lg" ></FaInstagram>
                <FaGithub className="scale-150 text-neutral-300/80 dark:text-neutral-600 w-1/6 rounded-lg" >.</FaGithub>
                <FaLinkedin className="scale-150 text-neutral-300/80 dark:text-neutral-600 w-1/6 rounded-lg" ></FaLinkedin>
            </div>
        </section>
    )
}