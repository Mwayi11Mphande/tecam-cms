"use client"

import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart, Pie, PieChart, Cell } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Calendar, Download, Users, DollarSign, Car, Calendar as CalendarIcon, Church } from "lucide-react"

// Attendance Data
const attendanceData = [
  { month: "Jan", regular: 320, visitors: 45, children: 80 },
  { month: "Feb", regular: 380, visitors: 52, children: 95 },
  { month: "Mar", regular: 420, visitors: 65, children: 110 },
  { month: "Apr", regular: 390, visitors: 58, children: 105 },
  { month: "May", regular: 450, visitors: 72, children: 125 },
  { month: "Jun", regular: 480, visitors: 85, children: 140 },
]

const attendanceConfig = {
  regular: {
    label: "Regular Members",
    color: "#2563eb",
  },
  visitors: {
    label: "Visitors",
    color: "#60a5fa",
  },
  children: {
    label: "Children",
    color: "#93c5fd",
  },
} satisfies ChartConfig

// Financial Data
const financialData = [
  { month: "Jan", tithes: 12500, offerings: 8500, donations: 3200 },
  { month: "Feb", tithes: 14200, offerings: 9200, donations: 2800 },
  { month: "Mar", tithes: 15800, offerings: 10500, donations: 4200 },
  { month: "Apr", tithes: 13800, offerings: 8800, donations: 3500 },
  { month: "May", tithes: 16700, offerings: 11200, donations: 5100 },
  { month: "Jun", tithes: 18200, offerings: 12500, donations: 4800 },
]

const financialConfig = {
  tithes: {
    label: "Tithes",
    color: "#059669",
  },
  offerings: {
    label: "Offerings",
    color: "#10b981",
  },
  donations: {
    label: "Donations",
    color: "#34d399",
  },
} satisfies ChartConfig

// Event Types Data
const eventTypeData = [
  { name: "Weddings", value: 12, color: "#ec4899" },
  { name: "Baptisms", value: 8, color: "#3b82f6" },
  { name: "Fundraisers", value: 6, color: "#8b5cf6" },
  { name: "Paper Sundays", value: 4, color: "#10b981" },
  { name: "Funerals", value: 3, color: "#6b7280" },
]

// Property Usage Data
const propertyUsageData = [
  { month: "Jan", minibus: 8, garden: 5, hall: 12, kitchen: 15 },
  { month: "Feb", minibus: 10, garden: 6, hall: 14, kitchen: 18 },
  { month: "Mar", minibus: 12, garden: 8, hall: 16, kitchen: 20 },
  { month: "Apr", minibus: 9, garden: 7, hall: 13, kitchen: 16 },
  { month: "May", minibus: 15, garden: 10, hall: 18, kitchen: 22 },
  { month: "Jun", minibus: 18, garden: 12, hall: 20, kitchen: 25 },
]

const propertyConfig = {
  minibus: {
    label: "Minibus",
    color: "#f59e0b",
  },
  garden: {
    label: "Garden",
    color: "#10b981",
  },
  hall: {
    label: "Hall",
    color: "#8b5cf6",
  },
  kitchen: {
    label: "Kitchen",
    color: "#ef4444",
  },
} satisfies ChartConfig

// Demographic Data
const demographicData = [
  { age: "0-12", count: 120, color: "#93c5fd" },
  { age: "13-17", count: 85, color: "#60a5fa" },
  { age: "18-35", count: 180, color: "#3b82f6" },
  { age: "36-50", count: 150, color: "#2563eb" },
  { age: "51-65", count: 90, color: "#1d4ed8" },
  { age: "65+", count: 60, color: "#1e40af" },
]

// Summary Cards Data
const summaryData = [
  {
    title: "Total Members",
    value: "685",
    change: "+12%",
    trend: "up",
    icon: Users,
    color: "blue"
  },
  {
    title: "Monthly Income",
    value: "$35,700",
    change: "+8%",
    trend: "up",
    icon: DollarSign,
    color: "green"
  },
  {
    title: "Property Bookings",
    value: "42",
    change: "+15%",
    trend: "up",
    icon: Car,
    color: "orange"
  },
  {
    title: "Upcoming Events",
    value: "8",
    change: "-2%",
    trend: "down",
    icon: CalendarIcon,
    color: "purple"
  }
]

export default function Reports() {
  return (
    <div className="flex-1 mb-10 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Church Analytics & Reports</h1>
          <p className="text-gray-600">Comprehensive overview of church activities and performance</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          <Download size={18} />
          <span>Export All Reports</span>
        </button>
      </div>

      {/* Date Range Selector */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center gap-4">
          <Calendar className="h-5 w-5 text-blue-500" />
          <span className="text-sm font-medium">Date Range:</span>
          <select className="border rounded-md px-3 py-1 text-sm">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Custom Range</option>
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{item.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{item.value}</p>
                <p className={`text-sm mt-1 ${
                  item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.change} from last month
                </p>
              </div>
              <div className={`p-3 rounded-full ${
                item.color === 'blue' ? 'bg-blue-100' :
                item.color === 'green' ? 'bg-green-100' :
                item.color === 'orange' ? 'bg-orange-100' : 'bg-purple-100'
              }`}>
                <item.icon className={`h-6 w-6 ${
                  item.color === 'blue' ? 'text-blue-600' :
                  item.color === 'green' ? 'text-green-600' :
                  item.color === 'orange' ? 'text-orange-600' : 'text-purple-600'
                }`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Attendance Trends */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Attendance Trends</h3>
            <Users className="h-5 w-5 text-blue-500" />
          </div>
          <ChartContainer config={attendanceConfig} className="h-[300px] w-full">
            <BarChart accessibilityLayer data={attendanceData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="regular" fill="var(--color-regular)" radius={4} />
              <Bar dataKey="visitors" fill="var(--color-visitors)" radius={4} />
              <Bar dataKey="children" fill="var(--color-children)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>

        {/* Financial Overview */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Financial Overview</h3>
            <DollarSign className="h-5 w-5 text-green-500" />
          </div>
          <ChartContainer config={financialConfig} className="h-[300px] w-full">
            <LineChart accessibilityLayer data={financialData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                dataKey="tithes" 
                stroke="var(--color-tithes)" 
                strokeWidth={2}
                dot={{ fill: "var(--color-tithes)", r: 4 }}
              />
              <Line 
                dataKey="offerings" 
                stroke="var(--color-offerings)" 
                strokeWidth={2}
                dot={{ fill: "var(--color-offerings)", r: 4 }}
              />
              <Line 
                dataKey="donations" 
                stroke="var(--color-donations)" 
                strokeWidth={2}
                dot={{ fill: "var(--color-donations)", r: 4 }}
              />
            </LineChart>
          </ChartContainer>
        </div>

        {/* Event Types Distribution */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Event Types Distribution</h3>
            <CalendarIcon className="h-5 w-5 text-purple-500" />
          </div>
          <div className="h-[300px] flex items-center justify-center">
            <PieChart width={300} height={300}>
              <ChartTooltip />
              <Pie
                data={eventTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {eventTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {eventTypeData.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-600">{item.name}</span>
                <span className="font-medium ml-auto">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Property Usage */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Property Usage</h3>
            <Car className="h-5 w-5 text-orange-500" />
          </div>
          <ChartContainer config={propertyConfig} className="h-[300px] w-full">
            <BarChart accessibilityLayer data={propertyUsageData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="minibus" fill="var(--color-minibus)" radius={4} />
              <Bar dataKey="garden" fill="var(--color-garden)" radius={4} />
              <Bar dataKey="hall" fill="var(--color-hall)" radius={4} />
              <Bar dataKey="kitchen" fill="var(--color-kitchen)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>

        {/* Demographic Breakdown */}
        <div className="bg-white rounded-lg shadow-lg p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Congregation Demographic</h3>
            <Church className="h-5 w-5 text-blue-500" />
          </div>
          <ChartContainer config={{}} className="h-[300px] w-full">
            <BarChart accessibilityLayer data={demographicData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="age"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip />
              <Bar dataKey="count" radius={4}>
                {demographicData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
      </div>

      {/* Additional Reports Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-left">
            <h4 className="font-medium text-gray-800">Member Growth Report</h4>
            <p className="text-sm text-gray-600 mt-1">New members and retention rates</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition text-left">
            <h4 className="font-medium text-gray-800">Financial Detailed Report</h4>
            <p className="text-sm text-gray-600 mt-1">Income vs expenses breakdown</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition text-left">
            <h4 className="font-medium text-gray-800">Event Attendance Report</h4>
            <p className="text-sm text-gray-600 mt-1">Participation across all events</p>
          </button>
        </div>
      </div>
    </div>
  )
}