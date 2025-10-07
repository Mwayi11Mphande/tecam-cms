"use client"

import Image from "next/image"
import {
  Home,
  FileText,
  DollarSign,
  BarChart3,
  Settings,
  LogOut,
  BanknoteArrowDownIcon,
  BanknoteArrowUp,
  ChevronDown,
  BanknoteX,
  TrendingUp,
  Menu,
} from "lucide-react"
import { useState } from "react";
import Link from "next/link";

export default function TreasurerSidebar() {
  const [open, setOpen] = useState(true);
  const [financeOpen, setFinanceOpen] = useState(false);

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
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

            {/* Finance Section */}
            <li>
              <button
                onClick={() => setFinanceOpen(!financeOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-700"
              >               
                <span className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5" />
                  <span className={`${open ? "inline" : "hidden md:inline"}`}>
                    Manage Finances
                  </span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${financeOpen ? "rotate-180" : ""}`} />
              </button>
              <div 
                className={`ml-6 mt-2 space-y-1 pl-2 border-l-2 border-blue-300 overflow-hidden transition-all duration-300 ${
                  financeOpen ? "max-h-60" : "max-h-0"
                }`}
              >
                <Link href="/treasurer/tithes" onClick={handleNavClick} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600">
                  <BanknoteX className="h-4 w-4" />
                  <span>Tithes</span>
                </Link>
                <Link href="/treasurer/offerings" onClick={handleNavClick} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600">
                  <BanknoteArrowDownIcon className="h-4 w-4" />
                  <span>Offerings</span>
                </Link>
                <Link href="/treasurer/donations" onClick={handleNavClick} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600">
                  <BanknoteArrowUp className="h-4 w-4" />
                  <span>Donations</span>
                </Link>
                <Link href="/treasurer/pledges" onClick={handleNavClick} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>Pledges</span>
                </Link>
                <Link href="/treasurer/expenses" onClick={handleNavClick} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600">
                  <FileText className="h-4 w-4" />
                  <span>Expenses</span>
                </Link>
              </div>
            </li>

            {/* Reports */}
            <li>
              <a
                href="/treasurer/reports"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Financial Reports</span>
              </a>
            </li>

            {/* Settings */}
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
