export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      {children}
    </div>
  )
}