import Navbar from "@/components/ui/navbar";

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
        </div>
    )
}