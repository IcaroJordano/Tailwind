import { CardNota } from "./CardNota";

export function Content() {
    return (
        <section className="flex  my-20" >
            <div className="w-7/12  pt-5 flex flex-col">
                <CardNota></CardNota>
                <CardNota></CardNota>
                <CardNota></CardNota>
            </div>
            <div className="w-5/12 bg-black">.</div>
        </section>
    )
}