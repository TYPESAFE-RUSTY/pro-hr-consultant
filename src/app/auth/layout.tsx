import "@/styles/Auth/layout.css"

export default function layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="container bgcolor" id="auth-layout">
            {children}
        </section>
    )
}
