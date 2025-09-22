import React from 'react'

export default function ClerkHeader() {
   return (
    <div className="sticky top-0 z-30 flex items-center justify-between  bg-white py-4 px-6  shadow-lg hover:shadow-xl transition rounded-xl border-t-1 border-[rgb(0,146,255)]">
      {/* Left: Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800"> Dashboard</h1>
        <p className="text-gray-500">Overview of  details and other information</p>

        
      </div>
        
      {/* Right: Notifications & User */}
      <div className="flex items-center gap-4">
       {/*search box*/}

       <div className="relative">
        <input
          type="text"
          placeholder="Search by name..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
       </div>
      </div>
    </div>
  )
}
