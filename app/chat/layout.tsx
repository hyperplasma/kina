export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-yellow-400 p-10">{children}</div>
    )
}
