export default function AppBody({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen md:min-h-[calc(100vh-var(--navbar-height))] p-0 mt-0">
            {children}
        </main>
    );
}