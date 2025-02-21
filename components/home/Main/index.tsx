import Menu from "@/components/home/Main/Menu";
import Welcome from "@/components/home/Main/Welcome";

export default function Main() {
    return (
        <main className="overflow-y-auto relative flex-1 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
            <Menu/>
            <Welcome/>
        </main>
    )
}