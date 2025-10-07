"use client"
import ClerkHeader from '@/components/ui/headers/clerk-header'
import React, { useState } from 'react'

// Types
type PropertyType = 'minibus' | 'garden' | 'hall' | 'kitchen' | 'sound-system' | 'chapel' | 'classroom'
type BookingStatus = 'available' | 'booked' | 'maintenance' | 'unavailable'

interface PropertyBooking {
  id: number
  propertyName: string
  propertyType: PropertyType
  bookedBy: string
  contactEmail: string
  contactPhone: string
  purpose: string
  bookingDate: string
  startTime: string
  endTime: string
  status: BookingStatus
  notes?: string
  createdAt: string
}

// Mock data
const initialBookings: PropertyBooking[] = [
  {
    id: 1,
    propertyName: 'Church Minibus - 15 Seater',
    propertyType: 'minibus',
    bookedBy: 'John Smith',
    contactEmail: 'john.smith@email.com',
    contactPhone: '+255 712 345 678',
    purpose: 'Youth group outing to retreat center',
    bookingDate: '2024-03-15',
    startTime: '08:00',
    endTime: '18:00',
    status: 'booked',
    notes: 'Need driver from church',
    createdAt: '2024-02-10'
  },
  {
    id: 2,
    propertyName: 'Events Garden',
    propertyType: 'garden',
    bookedBy: 'Sarah Johnson',
    contactEmail: 'sarah.j@email.com',
    contactPhone: '+255 713 456 789',
    purpose: 'Wedding reception ceremony',
    bookingDate: '2024-03-20',
    startTime: '14:00',
    endTime: '22:00',
    status: 'booked',
    notes: 'Approx 150 guests expected',
    createdAt: '2024-02-05'
  },
  {
    id: 3,
    propertyName: 'Fellowship Hall',
    propertyType: 'hall',
    bookedBy: 'Brother David',
    contactEmail: 'david@church.com',
    contactPhone: '+255 714 567 890',
    purpose: 'Bible study group meeting',
    bookingDate: '2024-03-12',
    startTime: '18:00',
    endTime: '20:00',
    status: 'booked',
    createdAt: '2024-02-08'
  },
  {
    id: 4,
    propertyName: 'Church Minibus - 15 Seater',
    propertyType: 'minibus',
    bookedBy: '',
    contactEmail: '',
    contactPhone: '',
    purpose: '',
    bookingDate: '2024-03-16',
    startTime: '',
    endTime: '',
    status: 'available',
    createdAt: '2024-01-20'
  },
  {
    id: 5,
    propertyName: 'Church Kitchen',
    propertyType: 'kitchen',
    bookedBy: 'Sister Mary',
    contactEmail: 'mary@church.com',
    contactPhone: '+255 715 678 901',
    purpose: 'Preparation for fundraising dinner',
    bookingDate: '2024-03-19',
    startTime: '10:00',
    endTime: '16:00',
    status: 'booked',
    notes: 'Need access to all kitchen equipment',
    createdAt: '2024-02-12'
  },
  {
    id: 6,
    propertyName: 'Sound System',
    propertyType: 'sound-system',
    bookedBy: 'Worship Team',
    contactEmail: 'worship@church.com',
    contactPhone: '+255 716 789 012',
    purpose: 'Sunday service',
    bookingDate: '2024-03-17',
    startTime: '07:00',
    endTime: '13:00',
    status: 'booked',
    createdAt: '2024-02-01'
  },
  {
    id: 7,
    propertyName: 'Events Garden',
    propertyType: 'garden',
    bookedBy: '',
    contactEmail: '',
    contactPhone: '',
    purpose: '',
    bookingDate: '2024-03-18',
    startTime: '',
    endTime: '',
    status: 'available',
    createdAt: '2024-01-25'
  },
  {
    id: 8,
    propertyName: 'Church Minibus - 15 Seater',
    propertyType: 'minibus',
    bookedBy: '',
    contactEmail: '',
    contactPhone: '',
    purpose: '',
    bookingDate: '2024-03-14',
    startTime: '',
    endTime: '',
    status: 'maintenance',
    notes: 'Routine service and maintenance',
    createdAt: '2024-02-14'
  }
]

export default function ChurchPropertiesPage() {
  const [bookings, setBookings] = useState<PropertyBooking[]>(initialBookings)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [newBooking, setNewBooking] = useState<Omit<PropertyBooking, 'id' | 'createdAt'>>({
    propertyName: '',
    propertyType: 'minibus',
    bookedBy: '',
    contactEmail: '',
    contactPhone: '',
    purpose: '',
    bookingDate: '',
    startTime: '',
    endTime: '',
    status: 'available',
    notes: ''
  })

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault()
    const booking: PropertyBooking = {
      id: bookings.length + 1,
      ...newBooking,
      createdAt: new Date().toISOString().split('T')[0]
    }
    setBookings([...bookings, booking])
    setNewBooking({
      propertyName: '',
      propertyType: 'minibus',
      bookedBy: '',
      contactEmail: '',
      contactPhone: '',
      purpose: '',
      bookingDate: '',
      startTime: '',
      endTime: '',
      status: 'available',
      notes: ''
    })
    setIsCreateModalOpen(false)
  }

  const getPropertyTypeColor = (type: PropertyType) => {
    const colors = {
      minibus: 'bg-blue-100 text-blue-800',
      garden: 'bg-green-100 text-green-800',
      hall: 'bg-purple-100 text-purple-800',
      kitchen: 'bg-orange-100 text-orange-800',
      'sound-system': 'bg-indigo-100 text-indigo-800',
      chapel: 'bg-red-100 text-red-800',
      classroom: 'bg-cyan-100 text-cyan-800'
    }
    return colors[type]
  }

  const getStatusColor = (status: BookingStatus) => {
    const colors = {
      available: 'bg-green-100 text-green-800',
      booked: 'bg-blue-100 text-blue-800',
      maintenance: 'bg-yellow-100 text-yellow-800',
      unavailable: 'bg-red-100 text-red-800'
    }
    return colors[status]
  }

  const formatPropertyType = (type: PropertyType) => {
    const names = {
      minibus: 'Minibus',
      garden: 'Garden',
      hall: 'Hall',
      kitchen: 'Kitchen',
      'sound-system': 'Sound System',
      chapel: 'Chapel',
      classroom: 'Classroom'
    }
    return names[type]
  }

  const propertyOptions = [
    { value: 'minibus', label: 'Church Minibus - 15 Seater' },
    { value: 'garden', label: 'Events Garden' },
    { value: 'hall', label: 'Fellowship Hall' },
    { value: 'kitchen', label: 'Church Kitchen' },
    { value: 'sound-system', label: 'Sound System' },
    { value: 'chapel', label: 'Small Chapel' },
    { value: 'classroom', label: 'Sunday School Classroom' }
  ]

  return (
    <div className="flex-1 mb-10 p-1 space-y-6">
      <ClerkHeader/>

      <div className="bg-white overflow-x-auto hover:shadow-xl transition rounded-xl border-t-4 border-green-500 shadow p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Church Properties</h1>
            <p className="text-gray-600">Manage bookings for church properties and facilities</p>
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition flex items-center gap-2"
          >
            <PlusIcon className="w-5 h-5" />
            New Booking
          </button>
        </div>

        {/* Properties Table */}
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booked By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{booking.propertyName}</div>
                    {booking.startTime && booking.endTime && (
                      <div className="text-sm text-gray-500">
                        {booking.startTime} - {booking.endTime}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPropertyTypeColor(booking.propertyType)}`}>
                      {formatPropertyType(booking.propertyType)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    {booking.bookedBy ? (
                      <div>
                        <div className="text-sm font-medium text-gray-900">{booking.bookedBy}</div>
                        <div className="text-sm text-gray-500">{booking.contactPhone}</div>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">Not booked</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs truncate">{booking.purpose || 'Available for booking'}</div>
                    {booking.notes && (
                      <div className="text-sm text-gray-500 truncate" title={booking.notes}>
                        {booking.notes}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {booking.status === 'available' ? (
                      <button 
                        onClick={() => {
                          setNewBooking({
                            ...newBooking,
                            propertyName: booking.propertyName,
                            propertyType: booking.propertyType,
                            bookingDate: booking.bookingDate
                          })
                          setIsCreateModalOpen(true)
                        }}
                        className="text-green-600 hover:text-green-900 mr-3"
                      >
                        Book
                      </button>
                    ) : (
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                    )}
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {bookings.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BuildingIcon className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No property bookings</h3>
            <p className="text-gray-500 mb-4">Get started by creating your first property booking.</p>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Create Booking
            </button>
          </div>
        )}
      </div>

      {/* Create Booking Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">New Property Booking</h2>
              <form onSubmit={handleCreateBooking} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property *</label>
                    <select
                      required
                      value={newBooking.propertyName}
                      onChange={(e) => {
                        const selectedProperty = propertyOptions.find(p => p.label === e.target.value)
                        setNewBooking({
                          ...newBooking, 
                          propertyName: e.target.value,
                          propertyType: selectedProperty?.value as PropertyType || 'minibus'
                        })
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select a property</option>
                      {propertyOptions.map((property) => (
                        <option key={property.value} value={property.label}>
                          {property.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                    <select
                      value={newBooking.propertyType}
                      onChange={(e) => setNewBooking({...newBooking, propertyType: e.target.value as PropertyType})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      disabled
                    >
                      {propertyOptions.map((property) => (
                        <option key={property.value} value={property.value}>
                          {formatPropertyType(property.value as PropertyType)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Booking Date *</label>
                    <input
                      type="date"
                      required
                      value={newBooking.bookingDate}
                      onChange={(e) => setNewBooking({...newBooking, bookingDate: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                      <input
                        type="time"
                        value={newBooking.startTime}
                        onChange={(e) => setNewBooking({...newBooking, startTime: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
                      <input
                        type="time"
                        value={newBooking.endTime}
                        onChange={(e) => setNewBooking({...newBooking, endTime: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Booked By *</label>
                    <input
                      type="text"
                      required
                      value={newBooking.bookedBy}
                      onChange={(e) => setNewBooking({...newBooking, bookedBy: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter name of person/organization"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      value={newBooking.status}
                      onChange={(e) => setNewBooking({...newBooking, status: e.target.value as BookingStatus})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="available">Available</option>
                      <option value="booked">Booked</option>
                      <option value="maintenance">Under Maintenance</option>
                      <option value="unavailable">Unavailable</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                    <input
                      type="email"
                      value={newBooking.contactEmail}
                      onChange={(e) => setNewBooking({...newBooking, contactEmail: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter contact email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
                    <input
                      type="tel"
                      value={newBooking.contactPhone}
                      onChange={(e) => setNewBooking({...newBooking, contactPhone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter contact phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Purpose *</label>
                  <input
                    type="text"
                    required
                    value={newBooking.purpose}
                    onChange={(e) => setNewBooking({...newBooking, purpose: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter purpose of booking"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                  <textarea
                    value={newBooking.notes}
                    onChange={(e) => setNewBooking({...newBooking, notes: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter any additional notes or special requirements"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsCreateModalOpen(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Create Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Icon components
function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  )
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )
}