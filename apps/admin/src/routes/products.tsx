import { createFileRoute } from '@tanstack/react-router'
import {SidebarLayout} from "../components/layout/sidebar-layout.tsx";

export type Product = {
    id: string
    name: string
    description: string
    sku: string
    price: number
    stockQuantity: number
    category: string
    brand?: string
    status: 'active' | 'draft' | 'archived'
    createdAt: string
    updatedAt: string
}

const mockProducts: Product[] = [
    {
        id: 'prod_001',
        name: 'Protein Powder',
        description: 'High quality whey protein',
        sku: 'SUP-PRO-001',
        price: 29.99,
        stockQuantity: 120,
        category: 'Supplements',
        brand: 'KSC',
        status: 'active',
        createdAt: '2026-04-01',
        updatedAt: '2026-04-05',
    },
    {
        id: 'prod_002',
        name: 'Night Cream',
        description: 'Daily night cream',
        sku: 'CR-NI-002',
        price: 19.99,
        stockQuantity: 15,
        category: 'Skincare',
        brand: 'KSC',
        status: 'active',
        createdAt: '2026-04-02',
        updatedAt: '2026-04-06',
    },
]

function ProductsPage() {
    return (
        <SidebarLayout title="Products">
            <div className="p-4 space-y-4">

                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500">
                            List of products
                        </p>
                    </div>

                    <button className="bg-black text-white px-4 py-2 rounded-lg">
                        + Add Product
                    </button>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl shadow overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="p-3">ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">SKU</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Stock</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Updated</th>
                            <th className="p-3">Actions</th>
                        </tr>
                        </thead>

                        <tbody>
                        {mockProducts.map((product) => (
                            <tr key={product.id} className="border-t">
                                <td className="p-3">{product.id}</td>
                                <td className="p-3 font-medium">{product.name}</td>
                                <td className="p-3">{product.sku}</td>
                                <td className="p-3">€{product.price}</td>
                                <td className="p-3">
                                    {product.stockQuantity < 20 ? (
                                        <span className="text-red-500 font-medium">
                                            {product.stockQuantity} (Low)
                                        </span>
                                    ) : (
                                        product.stockQuantity
                                    )}
                                </td>
                                <td className="p-3">
                                  <span className="px-2 py-1 rounded-full text-xs bg-gray-200">
                                    {product.status}
                                  </span>
                                </td>
                                <td className="p-3">{product.updatedAt}</td>
                                <td className="p-3 space-x-2">
                                    <button className="text-blue-600">Edit</button>
                                    <button className="text-red-600">Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </div>

            </div>
        </SidebarLayout>
    )
}

export const Route = createFileRoute('/products')({
    component: ProductsPage,
})