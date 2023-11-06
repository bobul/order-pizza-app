import Navbar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";

export default function RestaurantsLayout({
        children,
    }: {
        children: React.ReactNode
    }
) {
    return (
        <div className="bg-white">
            <Navbar />
            {children}
            <Toaster />
        </div>
    )
}