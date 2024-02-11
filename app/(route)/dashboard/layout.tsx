import Nav from "@/components/nav"
import Sidebar from "@/components/sidebar"

export default function DashboardPage({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:w-64 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-stone-900">
                <Sidebar />
            </div>
            <main className="md:pl-64">
                <div>
                    <Nav />
                    {children}
                </div>
            </main>
        </div>
    )
}
