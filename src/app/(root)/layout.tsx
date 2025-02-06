

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <div className="mx-auto max-w-[1440px]">
                {children}
            </div>
        </main>
    );
}
