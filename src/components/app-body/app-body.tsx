export default function AppBody({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative z-0 mt-0 min-h-screen p-0 md:min-h-[calc(100vh-var(--navbar-height))]">
      {children}
    </main>
  );
}
