import ModelSelect from "@/components/home/Main/ModelSelect";
import Example from "@/components/home/Main/Example";

export default function Welcome() {
    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-20">
            <ModelSelect/>
            <h1 className="mt-20 text-4xl font-bold">
                新型KINA大模型：KINA-1
            </h1>
            <h2 className="mt-4 text-xl">UNDER CONSTRUCTION</h2>
            <Example/>
        </div>
    )
}