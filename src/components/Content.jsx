import { CardNota } from "./CardNota";
import { Email } from "./Email";
import { Work } from "./Work";

export function Content() {
    return (
        <section className="flex flex-col lg:flex-row my-20" >
            <div className="w-full lg:w-7/12  pt-5 flex flex-col">
                <CardNota></CardNota>
                <CardNota></CardNota>
                <CardNota></CardNota>
            </div>
            <div className="w-full flex flex-col items-center lg:w-5/12 pt-5">
                <Email></Email>
                <Work></Work>
            </div>
        </section>
    )
}