"use client"
import ClerkHeader from '@/components/ui/headers/clerk-header'
import React, { useState } from 'react'

// Types
type EventType = 'wedding' | 'fundraising' | 'paper-sunday' | 'baptism' | 'funeral' | 'other'
type EventStatus = 'scheduled' | 'completed' | 'cancelled'

interface ChurchEvent {
  id: number
  title: string
  type: EventType
  date: string
  time: string
  location: string
  description: string
  organizer: string
  contact: string
  status: EventStatus
  attendees?: number
  createdAt: string
}

// Mock data
const initialEvents: ChurchEvent[] = [
  {
    id: 1,
    title: 'Johnson & Smith Wedding',
    type: 'wedding',
    date: '2024-03-15',
    time: '14:00',
    location: 'Main Sanctuary',
    description: 'Wedding ceremony for Mark Johnson and Sarah Smith',
    organizer: 'Pastor James',
    contact: 'pastor.james@church.com',
    status: 'scheduled',
    attendees: 150,
    createdAt: '2024-01-10'
  },
  {
    id: 2,
    title: 'Building Fund Fundraiser',
    type: 'fundraising',
    date: '2024-03-20',
    time: '18:00',
    location: 'Fellowship Hall',
    description: 'Annual fundraising dinner for church building maintenance',
    organizer: 'Sister Mary',
    contact: 'mary@church.com',
    status: 'scheduled',
    attendees: 200,
    createdAt: '2024-01-15'
  },
  {
    id: 3,
    title: 'Paper Sunday Collection',
    type: 'paper-sunday',
    date: '2024-03-10',
    time: '09:00',
    location: 'Church Parking Lot',
    description: 'Monthly paper recycling drive',
    organizer: 'Brother John',
    contact: 'john@church.com',
    status: 'completed',
    attendees: 50,
    createdAt: '2024-01-05'
  },
  {
    id: 4,
    title: 'Infant Baptism Ceremony',
    type: 'baptism',
    date: '2024-03-08',
    time: '11:00',
    location: 'Baptismal Font',
    description: 'Baptism ceremony for newborn children',
    organizer: 'Pastor James',
    contact: 'pastor.james@church.com',
    status: 'scheduled',
    attendees: 80,
    createdAt: '2024-01-20'
  }
]

export default function ChurchEventsPage() {
  const [events, setEvents] = useState<ChurchEvent[]>(initialEvents)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [newEvent, setNewEvent] = useState<Omit<ChurchEvent, 'id' | 'createdAt'>>({
    title: '',
    type: 'wedding',
    date: '',
    time: '',
    location: '',
    description: '',
    organizer: '',
    contact: '',
    status: 'scheduled',
    attendees: 0
  })

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault()
    const event: ChurchEvent = {
      id: events.length + 1,
      ...newEvent,
      createdAt: new Date().toISOString().split('T')[0]
    }
    setEvents([...events, event])
    setNewEvent({
      title: '',
      type: 'wedding',
      date: '',
      time: '',
      location: '',
      description: '',
      organizer: '',
      contact: '',
      status: 'scheduled',
      attendees: 0
    })
    setIsCreateModalOpen(false)
  }

  const getEventTypeColor = (type: EventType) => {
    const colors = {
      wedding: 'bg-pink-100 text-pink-800',
      fundraising: 'bg-purple-100 text-purple-800',
      'paper-sunday': 'bg-green-100 text-green-800',
      baptism: 'bg-blue-100 text-blue-800',
      funeral: 'bg-gray-100 text-gray-800',
      other: 'bg-yellow-100 text-yellow-800'
    }
    return colors[type]
  }

  const getStatusColor = (status: EventStatus) => {
    const colors = {
      scheduled: 'bg-green-100 text-green-800',
      completed: 'bg-blue-100 text-blue-800',
      cancelled: 'bg-red-100 text-red-800'
    }
    return colors[status]
  }

  const formatEventType = (type: EventType) => {
    const names = {
      wedding: 'Wedding',
      fundraising: 'Fundraising',
      'paper-sunday': 'Paper Sunday',
      baptism: 'Baptism',
      funeral: 'Funeral',
      other: 'Other'
    }
    return names[type]
  }

  return (
    <div className="flex-1 mb-10 p-1 space-y-6">
      <ClerkHeader/>

      <div className="bg-white overflow-x-auto hover:shadow-xl transition rounded-xl border-t-4 border-green-500 shadow p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Church Events</h1>
            <p className="text-gray-600">Manage church events, weddings, fundraisers, and activities</p>
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition flex items-center gap-2"
          >
            <PlusIcon className="w-5 h-5" />
            Add Event
          </button>
        </div>

        {/* Events Table */}
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organizer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {events.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{event.title}</div>
                      <div className="text-sm text-gray-500 line-clamp-2">{event.description}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getEventTypeColor(event.type)}`}>
                      {formatEventType(event.type)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{new Date(event.date).toLocaleDateString()}</div>
                    <div className="text-sm text-gray-500">{event.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {event.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{event.organizer}</div>
                    <div className="text-sm text-gray-500">{event.contact}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(event.status)}`}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {events.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <CalendarIcon className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events scheduled</h3>
            <p className="text-gray-500 mb-4">Get started by creating your first church event.</p>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Create Event
            </button>
          </div>
        )}
      </div>

      {/* Create Event Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Create New Event</h2>
              <form onSubmit={handleCreateEvent} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Event Title *</label>
                    <input
                      type="text"
                      required
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter event title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Event Type *</label>
                    <select
                      required
                      value={newEvent.type}
                      onChange={(e) => setNewEvent({...newEvent, type: e.target.value as EventType})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="wedding">Wedding</option>
                      <option value="fundraising">Fundraising</option>
                      <option value="paper-sunday">Paper Sunday</option>
                      <option value="baptism">Baptism</option>
                      <option value="funeral">Funeral</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                    <input
                      type="date"
                      required
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
                    <input
                      type="time"
                      required
                      value={newEvent.time}
                      onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                  <input
                    type="text"
                    required
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter event location"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter event description"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organizer *</label>
                    <input
                      type="text"
                      required
                      value={newEvent.organizer}
                      onChange={(e) => setNewEvent({...newEvent, organizer: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter organizer name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact *</label>
                    <input
                      type="email"
                      required
                      value={newEvent.contact}
                      onChange={(e) => setNewEvent({...newEvent, contact: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter contact email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      value={newEvent.status}
                      onChange={(e) => setNewEvent({...newEvent, status: e.target.value as EventStatus})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="scheduled">Scheduled</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expected Attendees</label>
                    <input
                      type="number"
                      value={newEvent.attendees}
                      onChange={(e) => setNewEvent({...newEvent, attendees: parseInt(e.target.value) || 0})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter number of attendees"
                    />
                  </div>
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
                    Create Event
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

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}