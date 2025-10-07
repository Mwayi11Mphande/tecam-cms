"use client"

import Image from "next/image"
import {
  Home,
  Users,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  BanknoteArrowDownIcon,
  BanknoteArrowUp,
  ChevronDown,
  Menu,
  BanknoteX,
} from "lucide-react"
import { useState } from "react";
import Link from "next/link";

export default function ClerkSidebar() {
  const [open, setOpen] = useState(true);
  const [reportsOpen, setReportsOpen] = useState(false);

  const handleNavClick = () => {// helper function: close sidebar only on mobile
    if (window.innerWidth < 768) { // Adjust the width as needed for your breakpoint
      setOpen(false);
    }
  };
  return (
    <>
    {/* Mobile Top Navbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-blue-600 text-white shadow">
        <button onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 h-screen bg-gradient-to-b from-[rgb(0,146,255)] to-[rgb(9,139,238)] 
      text-white shadow-2xl transform transition-transform duration-300 overflow-y-auto ${open ? "translate-x-0" : "-translate-x-full"}
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
            <li>
              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/clerk-dash/members"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                <Users className="h-5 w-5" />
                <span>Church Members</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                <Users className="h-5 w-5" />
                <span>Church Attendance</span>
              </Link>
            </li>

            <li>
              <button
                  onClick={() => setReportsOpen(!reportsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-700"
                >               
                  <span className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5" />
                    <span className={`${open ? "inline" : "hidden md:inline"}`}>
                      Sunday Collections
                    </span>
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${reportsOpen ? "rotate-180" : ""}`} />
                </button>
                <div 
                  className={`ml-6 mt-2 space-y-1 pl-2 border-l-2 border-blue-300 overflow-hidden transition-all duration-300 ${
                    reportsOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <Link href="/loan-officer/reports/loan-reports" onClick={handleNavClick} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600">
                    <BanknoteX className="h-4 w-4" />
                    <span className={`${open ? "inline" : "hidden md:inline"}`}>
                      Tithe
                    </span>
                  </Link>
                  <Link href="/loan-officer/reports/clients-reports" onClick={handleNavClick} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600">
                    <BanknoteArrowDownIcon className="h-4 w-4" />
                    <span className={`${open ? "inline" : "hidden md:inline"}`}>
                      Sunday Collection
                    </span>
                  </Link>
                  <Link href="/loan-officer/reports/clients-reports" onClick={handleNavClick} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600">
                    <BanknoteArrowDownIcon className="h-4 w-4" />
                    <span className={`${open ? "inline" : "hidden md:inline"}`}>
                      Church Donations
                    </span>
                  </Link>
                  <Link href="/loan-officer/reports/clients-reports" onClick={handleNavClick} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600">
                    <BanknoteArrowDownIcon className="h-4 w-4" />
                    <span className={`${open ? "inline" : "hidden md:inline"}`}>
                      Church Pledges
                    </span>
                  </Link>
                  <div className="flex items-center gap-3 px-4 py-2"></div>
                </div>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                <FileText className="h-5 w-5" />
                <span>Church Programs</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                <BanknoteArrowUp className="h-5 w-5" />
                <span>Manage Groups</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Reports</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                <Settings className="h-5 w-5" />
                <span>System Settings</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logout */}
        <div className="px-4 py-4 border-t border-white">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600 transition-all duration-200"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
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
