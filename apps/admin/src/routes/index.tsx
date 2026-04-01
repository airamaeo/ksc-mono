import { createFileRoute } from '@tanstack/react-router'
import {SidebarLayout} from "../components/layout/sidebar-layout.tsx";
import {Heading} from "../components/layout/heading.tsx";

function StatCard({
    title,
    value,
    description
} : {
    title: string
    value: string
    description: string
}) {
    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-zinc-500">{title}</p>
            <p className="mt-3 text-3xl font-semibold text-zinc-950">{value}</p>
            <p className="mt-2 text-sm text-zinc-500">{description}</p>
        </div>
    )
}

function DashboardPage() {
  return (
      <SidebarLayout title="Title">
          <div className="space-y-8">
              <section>
                  <Heading level={1}>Dashboard</Heading>
                  <p className="mt-2 text-sm text-zinc-600">
                      Welcome to KSC Admin Panel Dashboard
                  </p>
              </section>
          </div>

          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                  title="Total Products"
                  value="128"
                  description="Products currently in the catalogue"
              />
              <StatCard
                  title="Total Brands"
                  value="24"
                  description="Brands available in the admin"
              />
              <StatCard
                  title="Total Categories"
                  value="16"
                  description="Categories set up across the store"
              />
              <StatCard
                  title="Draft Products"
                  value="9"
                  description="Products waiting to be published"
              />
          </section>

      </SidebarLayout>
  )
}

export const Route = createFileRoute('/')({
  component: DashboardPage,
})
