"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ClerkHeader from "@/components/ui/headers/clerk-header"
import { AlertCircle, BanknoteArrowUp, BanknoteIcon, Group } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="bg-gray-100">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 mb-10 p-1 space-y-6">
        {/* Header */}
        <ClerkHeader />

            {/* Key Metrics Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 p">
                <Card className="shadow-lg hover:shadow-xl transition rounded-xl border-t-4 border-blue-500">
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                    <BanknoteArrowUp className="w-5 h-5 text-blue-500" />
                    Total Tithe 
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold text-gray-900">MK10000</p>
                    <p className="text-sm text-gray-500"> total loans</p>
                </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition rounded-xl border-t-4 border-green-500">
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                    <Group className="w-5 h-5 text-green-500" />
                    Church Members
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold text-gray-900">12,000</p>
                    <p className="text-sm text-gray-500">Both mens and women and youth</p>
                </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition rounded-xl border-t-4 border-purple-500">
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                    <BanknoteIcon className="w-5 h-5 text-purple-500" />
                    Church Employees 
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold text-gray-900">15 </p>
                    <p className="text-sm text-gray-500">Workers</p>
                </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition rounded-xl border-t-4 border-red-500">
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    Cottages
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold text-gray-900">6</p>
                    <p className="text-sm text-gray-500">Cottages</p>
                </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
                <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                    <span>New client registered: Alice Johnson</span>
                    <span className="text-gray-400 text-sm">2h ago</span>
                </li>
                <li className="py-2 flex justify-between">
                    <span>Loan approved: John Doe</span>
                    <span className="text-gray-400 text-sm">3h ago</span>
                </li>
                <li className="py-2 flex justify-between">
                    <span>Payment received: Mary Smith</span>
                    <span className="text-gray-400 text-sm">5h ago</span>
                </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
