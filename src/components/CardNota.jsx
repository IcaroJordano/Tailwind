import { IoIosArrowForward } from "react-icons/io";


export function CardNota() {
    return (
        <a className=" lg:rounded-2xl W-10/12 lg:w-9/12 p-7 pl-5  lg:mx-24 lg:mb-10 hover:bg-neutral-800 dark:hover:bg-neutral-200/20 hover:bg-neutral-500/[.09] duration-400" href="">
            <h2 className="text-gray-400/50 dark:text-gray-400 text-base  lg:text-sm">| 5 de setembro de 2022</h2>
            <h3 className="text-white text-lg lg:text-base my-3 font-bold dark:text-neutral-800 ">Criando um sistema de design para um futuro multiplanetario</h3>
            <p className="mb-3 text-gray-400/90 dark:text-neutral-600 text-sm w-full  leading-relaxed" >A maioria das empresas tenta ficar à frente quando se trata de design visual, mas para a Planetaria precisávamos criar uma marca que ainda nos inspiraria daqui a 100 anos, quando a humanidade se espalhou por todo o nosso sistema solar.</p>
            <a className="text-teal-500 text-sm flex items-center" href="">Ler artigo <IoIosArrowForward className="ml-1"></IoIosArrowForward> </a>
        </a>
    )
}