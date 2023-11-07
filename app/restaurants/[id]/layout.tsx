import Navbar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";

export default function RestaurantsLayout({
        children,
    }: {
        children: React.ReactNode
    }
) {
    return (
        <div>
            <Navbar />
            {children}
            <Toaster />
        </div>
    )
}