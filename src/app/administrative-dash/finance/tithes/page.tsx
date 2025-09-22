"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ClerkHeader from "@/components/ui/headers/clerk-header";
import { BanknoteArrowUp, Group, BanknoteIcon, AlertCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function MembersPage() {
    const members = [
    {
      id: 1,
      fullName: "John Doe",
      phone: "0999999999",
      email: "john@example.com",
      gender: "Male",
      type: "Adult",
      cottage: "Cottage 1",
      guardian: "Jane Doe",
      group: "Choir",
      status: "Active",
    },
    {
      id: 2,
      fullName: "Mary Smith",
      phone: "0888888888",
      email: "mary@example.com",
      gender: "Female",
      type: "Youth",
      cottage: "Cottage 3",
      guardian: "John Smith",
      group: "Youth Group",
      status: "Active",
    },
    // Add more sample members here...
  ];

  // 2. Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // show 5 members per page

  // 3. Calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = members.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(members.length / itemsPerPage);

    return (
        <div className="flex-1 mb-10 p-1 space-y-6">
            <ClerkHeader/>


            <div className="bg-white overflow-x-auto hover:shadow-xl transition rounded-xl border-t-1 border-green-500 shadow p-6">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                        {[
                            "ID", "Full Name", "Contact", "Gender", "Member Type", "Cottage/Area", "Guardian", "Groups/Ministries", "Status", "Actions",
                        ].map((heading, i) => (
                            <th
                            key={i}
                            className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
                            >
                            {heading}
                            </th>
                        ))}
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-100">
                        {currentMembers.map((member) => (
                        <tr key={member.id} className="hover:bg-gray-50 transition">
                            <td className="px-6 py-4 text-sm text-gray-900">{member.id}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{member.fullName}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                            <div className="flex items-center gap-1">📞 {member.phone}</div>
                            <div className="flex items-center gap-1">📧 {member.email}</div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">{member.gender}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{member.type}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{member.cottage}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{member.guardian}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{member.group}</td>
                            <td className="px-6 py-4 text-sm">
                            <span
                                className={`px-3 py-1 inline-flex text-xs font-medium rounded-full ${
                                member.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                }`}
                            >
                                {member.status}
                            </span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                            <button className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Edit</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

           {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-600">
                Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, members.length)} of {members.length} entries
                </div>
                <div className="flex items-center gap-2">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-gray-600">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
                >
                    Next
                </button>
        </div>
        </div>
        </div>
        
    );
}