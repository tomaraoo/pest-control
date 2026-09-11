import React, { useEffect, useMemo, useState } from 'react'
import { CalendarCheck, ChevronLeft, ChevronRight, LoaderCircle } from 'lucide-react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

const API_URL = import.meta.env.VITE_API_URL

const BOOKING_TIMES = [
    '08:00',
    '09:00',
    '10:00',
]

function formatTime(time) {
    const [hours, minutes] = time.split(':').map(Number)
    const date = new Date(2000, 0, 1, hours, minutes)

    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
    })
}

function Booking() {
    const today = new Date()
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())

    const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
    const [bookings, setBookings] = useState({})
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'bookings'),
            (snapshot) => {
                const data = {}

                snapshot.docs.forEach((document) => {
                    data[document.id] = {
                        id: document.id,
                        ...document.data(),
                    }
                })

                setBookings(data)
                setLoading(false)
                setError('')
            },
            (error) => {
                console.error('Firestore booking error:', error)
                setBookings({})
                setLoading(false)
                setError('Unable to load booking availability.')
            }
        )

        return unsubscribe
    }, [])

    useEffect(() => {
        if (selectedDate && bookings[selectedDate]) {
            setSelectedDate(null)
            setSelectedTime(null)
        }
    }, [bookings, selectedDate])

    const monthName = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    })

    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const isCurrentMonth = year === today.getFullYear() && month === today.getMonth()

    const calendarDays = useMemo(() => {
        const emptyDays = Array.from({ length: firstDayOfMonth }, () => null)
        const days = Array.from({ length: daysInMonth }, (_, index) => index + 1)

        return [...emptyDays, ...days]
    }, [firstDayOfMonth, daysInMonth])

    function getDateKey(day) {
        return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    }

    function handleDateSelect(day) {
        const dateKey = getDateKey(day)
        const date = new Date(year, month, day)

        if (date < todayStart || bookings[dateKey]) return

        setSelectedDate(dateKey)
        setSelectedTime(null)
    }

    function previousMonth() {
        if (isCurrentMonth) return

        setSelectedDate(null)
        setSelectedTime(null)
        setCurrentDate(new Date(year, month - 1, 1))
    }

    function nextMonth() {
        setSelectedDate(null)
        setSelectedTime(null)
        setCurrentDate(new Date(year, month + 1, 1))
    }

    function handleBooking() {
        if (!selectedDate || !selectedTime || !API_URL) return

        if (bookings[selectedDate]) {
            setSelectedDate(null)
            setSelectedTime(null)
            return
        }

        const params = new URLSearchParams({
            action: 'reserve',
            date: selectedDate,
            time: selectedTime,
        })

        // window.location.href = `${API_URL}?${params.toString()}`
        const url = `${API_URL}?${params.toString()}`
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    const canBook = selectedDate && selectedTime && !bookings[selectedDate]

    const formattedSelectedDate = selectedDate
        ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        })
        : null

    return (
        <section id="booking" className="py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
                        Book a Service
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                        Check Availability & Book
                    </h2>

                    <p className="secondary-font mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 lg:text-base">
                        Select an available date and choose the time you will be ready for our team.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-[1.6fr_1fr]">
                    <div className="p-6 sm:p-8 lg:p-10">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900">
                                    {monthName}
                                </h3>

                                <p className="secondary-font mt-1 text-xs text-slate-500">
                                    Select an available date
                                </p>
                            </div>

                            <div className="flex gap-2">
                                <button type="button" onClick={previousMonth} disabled={isCurrentMonth} className="flex size-9 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-30">
                                    <ChevronLeft className="size-4" />
                                </button>

                                <button type="button" onClick={nextMonth} className="flex size-9 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700">
                                    <ChevronRight className="size-4" />
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                                <p className="secondary-font text-xs text-red-700">
                                    {error}
                                </p>
                            </div>
                        )}

                        <div className="mt-8 grid grid-cols-7 text-center">
                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                                <span key={day} className="text-xs font-medium text-slate-500">
                                    {day}
                                </span>
                            ))}
                        </div>

                        {loading ? (
                            <div className="flex min-h-[260px] items-center justify-center">
                                <LoaderCircle className="size-6 animate-spin text-yellow-600" />
                            </div>
                        ) : (
                            <div className="mt-4 grid grid-cols-7 gap-2">
                                {calendarDays.map((day, index) => {
                                    if (!day) return <div key={`empty-${index}`} />

                                    const dateKey = getDateKey(day)
                                    const date = new Date(year, month, day)
                                    const isPast = date < todayStart
                                    const isBooked = Boolean(bookings[dateKey])
                                    const available = !isPast && !isBooked
                                    const selected = selectedDate === dateKey

                                    return (
                                        <button
                                            key={dateKey}
                                            type="button"
                                            disabled={!available}
                                            onClick={() => handleDateSelect(day)}
                                            className={`flex h-10 items-center justify-center rounded-lg border text-sm transition ${selected ? 'border-yellow-500 bg-yellow-500 font-semibold text-white' : available ? 'cursor-pointer border-slate-200 bg-white text-slate-700 hover:border-yellow-400 hover:bg-yellow-50' : 'cursor-not-allowed border-slate-100 bg-slate-50 text-slate-300'}`}
                                        >
                                            {day}
                                        </button>
                                    )
                                })}
                            </div>
                        )}

                        <div className="secondary-font mt-8 flex gap-5 text-xs text-slate-500">
                            <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-yellow-500" />
                                Available
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-slate-200" />
                                Booked
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-200 bg-slate-50/70 p-6 sm:p-8 lg:border-t-0 lg:border-l">
                        <div className="flex items-start gap-3">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                                <CalendarCheck className="size-5" />
                            </div>

                            <div>
                                <h3 className="font-semibold text-slate-900">
                                    {formattedSelectedDate ?? 'Select a date'}
                                </h3>

                                <p className="secondary-font mt-1 text-xs text-slate-500">
                                    {selectedDate ? 'Select the time you will be ready' : 'Available times will appear here'}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">
                            {selectedDate ? (
                                BOOKING_TIMES.map((time) => {
                                    const selected = selectedTime === time

                                    return (
                                        <button key={time} type="button" onClick={() => setSelectedTime(time)} className={`w-full cursor-pointer rounded-lg border px-4 py-3 text-sm font-medium transition ${selected ? 'border-yellow-500 bg-yellow-100 text-yellow-800 ring-1 ring-yellow-500' : 'border-slate-200 bg-white text-slate-700 hover:border-yellow-400 hover:bg-yellow-50'}`}>
                                            {formatTime(time)}
                                        </button>
                                    )
                                })
                            ) : (
                                <div className="rounded-lg border border-dashed border-slate-200 p-8 text-center">
                                    <p className="secondary-font text-sm text-slate-400">
                                        Choose an available date from the calendar.
                                    </p>
                                </div>
                            )}
                        </div>

                        <button type="button" disabled={!canBook} onClick={handleBooking} className="mt-6 w-full cursor-pointer rounded-lg bg-yellow-500 px-5 py-3.5 font-semibold text-white transition hover:bg-yellow-600 disabled:cursor-not-allowed disabled:bg-slate-300">
                            Continue to Booking Form
                        </button>

                        <p className="secondary-font mt-3 text-center text-xs text-slate-400">
                            Only confirmed bookings make a date unavailable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Booking