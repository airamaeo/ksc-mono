const navItems = [
    { label: 'Dashboard' },
    { label: 'Products' },
    { label: 'Brands' },
    { label: 'Categories' },
    { label: 'Settings' },
]

export function Sidebar() {
    return (
        <aside className="w-64 border-r border-zinc-200 bg-zinc-50 p-4">
            <div className="mb-6">
                <h2 className="text-lg font-bold text-zinc-900">KSC Admin</h2>
                <p className="text-sm text-zinc-500">Korean skincare admin panel</p>
            </div>

            <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
                    >
                        {item.label}
                    </div>
                ))}
            </nav>
        </aside>
    )
}