import type React from 'react'
import { Sidebar } from './sidebar'
import { Header } from './header'

type LayoutProps = {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Header />

                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}