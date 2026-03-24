import { Link } from '@tanstack/react-router'

export function Sidebar() {
    return (
        <aside className="w-64 border-r border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <nav className="flex flex-col gap-2">
                <Link
                    to='/'
                    className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                    Dashboard
                </Link>

                <Link
                    to='/products'
                    className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                    Products
                </Link>
            </nav>
        </aside>
    )
}