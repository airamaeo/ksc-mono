type HeaderProps = {
    title?: string
}

export function Header({ title = 'Dashboard' }: HeaderProps) {
    return (
        <header className="border-b border-zinc-200 bg-white px-6 py-4">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-zinc-900">{title}</h1>

                <div className="text-sm text-zinc-500">KSC Admin</div>
            </div>
        </header>
    )
}