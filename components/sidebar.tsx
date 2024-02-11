"use client"

import { cn } from "@/lib/utils";
import { LayoutDashboard, MessageSquare } from "lucide-react";
import { Montserrat } from "next/font/google"
import Link from "next/link"


const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

const routes = [
    {
        label: "Test message",
        href: "/dashboard",
        clolor: "text-sky-500"
    }
]


export default function Sidebar() {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-stone-950 text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className={cn("font-bold text-2xl", montserrat.className)}>
                        Tera Bhai
                    </div>
                </Link>
                <div>
                    {routes.map((route) => (
                        <Link href={route.href}
                            key={route.href}
                            className="text-sm group flex p-3 w-full 
                            justify-start font-medium cursor-pointer items-center
                            hover:text-white hover:bg-white/10 rounded-lg transition"
                        >
                            <div className="items-center flex flex-1 text-base">
                                {route.label}
                            </div>
                        </Link>
                    ))

                    }
                </div>
            </div>
        </div>
    )
}
