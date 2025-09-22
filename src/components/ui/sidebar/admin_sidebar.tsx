"use client"

import Image from "next/image"
import {
  Home,
  Users,
  FileText,
  DollarSign,
  BarChart3,
  Settings,
  LogOut,
  ChevronDown,
  Calendar,
  Shield,
  Menu,
  UserCog,
  Database,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function AdminSidebar() {
  const [open, setOpen] = useState(true)
  const [membersOpen, setMembersOpen] = useState(false)
  const [financeOpen, setFinanceOpen] = useState(false)
  const [eventsOpen, setEventsOpen] = useState(false)
  const [usersOpen, setUsersOpen] = useState(false)

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      setOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-blue-600 text-white shadow">
        <button onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 h-screen bg-gradient-to-b from-[rgb(0,146,255)] to-[rgb(9,139,238)] 
      text-white shadow-2xl transform transition-transform duration-300 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-200 ${open ? "translate-x-0" : "-translate-x-full"}
       md:translate-x-0`}
        >
        {/* Header */}
        <div className="flex flex-col items-center gap-3 px-6 py-6 border-b border-blue-400">
          <div className="p-2 rounded-lg">
            <Image
              src="/company_logo.jpg"
              width={150}
              height={90}
              alt="company logo"
              className="object-contain"
            />
          </div>
          <h1 className="text-xl font-bold tracking-wide hidden md:block">
            SL CCAP CMS
          </h1>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-3">
            {/* Dashboard */}
            <li>
              <Link
                href="/administrative-dash"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
                onClick={handleNavClick}
              >
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>

            {/* Member Management */}
            <li>
              <button
                onClick={() => setMembersOpen(!membersOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-700"
              >
                <span className="flex items-center gap-3">
                  <Users className="h-5 w-5" />
                  <span>Members</span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${membersOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`ml-6 mt-2 space-y-1 pl-2 border-l-2 border-blue-300 overflow-hidden transition-all duration-300 ${
                  membersOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <Link href="/administrative-dash/church-members/members" className="block px-4 py-2 rounded-lg hover:bg-blue-600">All Members</Link>
                <Link href="/administrative-dash/church-members/attendance" className="block px-4 py-2 rounded-lg hover:bg-blue-600">Attendance</Link>
                <Link href="/administrative-dash/church-members/group-ministries" className="block px-4 py-2 rounded-lg hover:bg-blue-600">Groups & Ministries</Link>
              </div>
            </li>

            {/* Finance Management */}
            <li>
              <button
                onClick={() => setFinanceOpen(!financeOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-700"
              >
                <span className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5" />
                  <span>Finance</span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${financeOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`ml-6 mt-2 space-y-1 pl-2 border-l-2 border-blue-300 overflow-hidden transition-all duration-300 ${
                  financeOpen ? "max-h-48" : "max-h-0"
                }`}
              >
                <Link href="/administrative-dash/finance/tithes" className="block px-4 py-2 rounded-lg hover:bg-blue-600">Tithes</Link>
                <Link href="/administrative-dash/finance/offerings" className="block px-4 py-2 rounded-lg hover:bg-blue-600">Offerings</Link>
                <Link href="/administrative-dash/finance/donations" className="block px-4 py-2 rounded-lg hover:bg-blue-600">Donations</Link>
                <Link href="/administrative-dash/finance/pledges" className="block px-4 py-2 rounded-lg hover:bg-blue-600">Pledges</Link>
                <Link href="/administrative-dash/finance/expenses" className="block px-4 py-2 rounded-lg hover:bg-blue-600">Expenses</Link>
              </div>
            </li>

            {/* Programs & Events */}
            <li>
              <button
                onClick={() => setEventsOpen(!eventsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-700"
              >
                <span className="flex items-center gap-3">
                  <Calendar className="h-5 w-5" />
                  <span>Events</span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${eventsOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`ml-6 mt-2 space-y-1 pl-2 border-l-2 border-blue-300 overflow-hidden transition-all duration-300 ${
                  eventsOpen ? "max-h-32" : "max-h-0"
                }`}
              >
                <Link href="administrative-dashn/church-bookings" className="block px-4 py-2 rounded-lg hover:bg-blue-600">All Events</Link>
                <Link href="/administrative-dashevents/attendance" className="block px-4 py-2 rounded-lg hover:bg-blue-600">Event Attendance</Link>
              </div>
            </li>

            {/* User Management */}
            <li>
              <button
                onClick={() => setUsersOpen(!usersOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-700"
              >
                <span className="flex items-center gap-3">
                  <UserCog className="h-5 w-5" />
                  <span>Users</span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${usersOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`ml-6 mt-2 space-y-1 pl-2 border-l-2 border-blue-300 overflow-hidden transition-all duration-300 ${
                  usersOpen ? "max-h-32" : "max-h-0"
                }`}
              >
                <Link href="/administrative-dash/manage-users" className="block px-4 py-2 rounded-lg hover:bg-blue-600">Manage Users</Link>
                <Link href="/administrative-dash/roles-permission" className="block px-4 py-2 rounded-lg hover:bg-blue-600">Roles & Permissions</Link>
              </div>
            </li>

            {/* Reports */}
            <li>
              <Link
                href="/administrative-dash/reports"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Reports</span>
              </Link>
            </li>

            {/* Settings */}
            <li>
              <button
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                <Settings className="h-5 w-5" />
                <span>System Settings</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Logout */}
        <div className="px-4 py-4 border-t border-white">
          <a
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600 transition-all duration-200"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </a>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
