import {
    ChevronLeft,
    ChevronRight,
    CalendarCheck,
    LoaderCircle,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;
const BOOKING_FORM_URL = import.meta.env.VITE_BOOKING_FORM_URL;

// temporary

const DEFAULT_TIME_SLOTS = [
    "08:00 AM - 10:00 AM",
    "10:30 AM - 12:30 PM",
    "01:00 PM - 03:00 PM",
    "03:30 PM - 05:30 PM",
];

function getDefaultAvailability(year, month) {
    const availability = {};

    const daysInMonth = new Date(year, month, 0).getDate();

    const today = new Date();
    today.setHours(0, 0, 0, 0);


    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        const dayOfWeek = date.getDay();

        if (date < today) {
            continue;
        }

        // Sunday = unavailable
        if (dayOfWeek === 0) {
            continue;
        }

        const dateKey = `${year}-${String(month).padStart(2, "0")}-${String(
            day
        ).padStart(2, "0")}`;


        if (day % 5 === 0) {
            availability[dateKey] = [
                DEFAULT_TIME_SLOTS[0],
                DEFAULT_TIME_SLOTS[2],
            ];
        } else if (day % 3 === 0) {
            availability[dateKey] = [
                DEFAULT_TIME_SLOTS[1],
                DEFAULT_TIME_SLOTS[3],
            ];
        } else {
            availability[dateKey] = [...DEFAULT_TIME_SLOTS];
        }
    }

    return availability;
}

export default function InstantBookingSection() {
    const today = new Date();

    const [currentDate, setCurrentDate] = useState(
        new Date(today.getFullYear(), today.getMonth(), 1)
    );

    const [availability, setAvailability] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const [loading, setLoading] = useState(true);
    const [usingDemoData, setUsingDemoData] = useState(false);
    const [error, setError] = useState("");

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // fetch availability
    useEffect(() => {
        async function fetchAvailability() {
            setLoading(true);
            setError("");
            setSelectedDate(null);
            setSelectedTime(null);

            // fallback
            if (!API_URL) {
                setAvailability(getDefaultAvailability(year, month + 1));
                setUsingDemoData(true);
                setLoading(false);

                return;
            }

            try {
                const response = await fetch(
                    `${API_URL}/calendar/availability?year=${year}&month=${month + 1}`
                );

                if (!response.ok) {
                    throw new Error("Unable to load calendar availability.");
                }

                const data = await response.json();

                setAvailability(data.availability ?? {});
                setUsingDemoData(false);
            } catch (error) {
                console.error("Calendar API error:", error);

                // fallbacks
                setAvailability(getDefaultAvailability(year, month + 1));
                setUsingDemoData(true);

                setError(
                    "Live availability is temporarily unavailable. Showing sample availability."
                );
            } finally {
                setLoading(false);
            }
        }

        fetchAvailability();
    }, [year, month]);

    // google calendar
    const monthName = currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const calendarDays = useMemo(() => {
        const emptyDays = Array.from(
            { length: firstDayOfMonth },
            () => null
        );

        const days = Array.from(
            { length: daysInMonth },
            (_, index) => index + 1
        );

        return [...emptyDays, ...days];
    }, [firstDayOfMonth, daysInMonth]);

    function getDateKey(day) {
        return `${year}-${String(month + 1).padStart(2, "0")}-${String(
            day
        ).padStart(2, "0")}`;
    }

    function handleDateSelect(day) {
        const dateKey = getDateKey(day);

        if (!availability[dateKey]?.length) {
            return;
        }

        setSelectedDate(dateKey);
        setSelectedTime(null);
    }

    function previousMonth() {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() - 1,
                1
            )
        );
    }

    function nextMonth() {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + 1,
                1
            )
        );
    }

    // google form
    function handleBooking() {
        if (!selectedDate || !selectedTime) {
            return;
        }

        // temp data - defaults
        if (!BOOKING_FORM_URL) {
            console.log({
                selectedDate,
                selectedTime,
            });

            alert(
                `Selected booking:\n${selectedDate}\n${selectedTime}`
            );

            return;
        }

        const dateEntry = import.meta.env.VITE_FORM_DATE_ENTRY;
        const timeEntry = import.meta.env.VITE_FORM_TIME_ENTRY;

        const params = new URLSearchParams();

        params.set("usp", "pp_url");

        if (dateEntry) {
            params.set(dateEntry, selectedDate);
        }

        if (timeEntry) {
            params.set(timeEntry, selectedTime);
        }

        window.open(
            `${BOOKING_FORM_URL}?${params.toString()}`,
            "_blank",
            "noopener,noreferrer"
        );
    }

    const selectedSlots = selectedDate
        ? availability[selectedDate] ?? []
        : [];

    const formattedSelectedDate = selectedDate
        ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
            }
        )
        : null;

    return (
        <section className="bg-green-50/40 px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
                        Book a Service
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                        Check Availability & Book
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 secondary-font lg:text-base">
                        Select an available date and time for your pest control
                        service. Complete the booking form and we'll confirm your
                        schedule.
                    </p>
                </div>

                {/* Booking Card */}
                <div className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-[1.6fr_1fr]">

                    {/* Calendar */}
                    <div className="p-6 sm:p-8 lg:p-10">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900">
                                    {monthName}
                                </h3>

                                <p className="mt-1 text-xs text-slate-500 secondary-font">
                                    Select an available date
                                </p>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={previousMonth}
                                    className="flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-green-400 hover:bg-green-50 hover:text-green-700"
                                >
                                    <ChevronLeft className="size-4" />
                                </button>

                                <button
                                    type="button"
                                    onClick={nextMonth}
                                    className="flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-green-400 hover:bg-green-50 hover:text-green-700"
                                >
                                    <ChevronRight className="size-4" />
                                </button>
                            </div>
                        </div>

                        {/* Demo notice */}
                        {usingDemoData && (
                            <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
                                <p className="text-xs text-amber-700 secondary-font">
                                    Sample availability is currently being displayed.
                                </p>
                            </div>
                        )}

                        {/* Weekdays */}
                        <div className="mt-8 grid grid-cols-7 text-center">
                            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                                (day) => (
                                    <span
                                        key={day}
                                        className="text-xs font-medium text-slate-500"
                                    >
                                        {day}
                                    </span>
                                )
                            )}
                        </div>

                        {/* Loading */}
                        {loading ? (
                            <div className="flex min-h-[260px] items-center justify-center">
                                <LoaderCircle className="size-6 animate-spin text-green-600" />
                            </div>
                        ) : (
                            <div className="mt-4 grid grid-cols-7 gap-2">
                                {calendarDays.map((day, index) => {
                                    if (!day) {
                                        return <div key={`empty-${index}`} />;
                                    }

                                    const dateKey = getDateKey(day);

                                    const available =
                                        availability[dateKey]?.length > 0;

                                    const selected =
                                        selectedDate === dateKey;

                                    return (
                                        <button
                                            key={dateKey}
                                            type="button"
                                            disabled={!available}
                                            onClick={() => handleDateSelect(day)}
                                            className={`
                        flex h-10 items-center justify-center
                        rounded-lg border text-sm transition

                        ${selected
                                                    ? "border-green-500 bg-green-500 font-semibold text-white"
                                                    : available
                                                        ? "border-slate-200 bg-white text-slate-700 hover:border-green-400 hover:bg-green-50"
                                                        : "cursor-not-allowed border-slate-100 bg-slate-50 text-slate-300"
                                                }
                      `}
                                        >
                                            {day}
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {/* Legend */}
                        <div className="mt-8 flex gap-5 text-xs text-slate-500 secondary-font">
                            <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-green-500" />
                                Available
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-slate-200" />
                                Unavailable
                            </div>
                        </div>
                    </div>

                    {/* Time Slots */}
                    <div className="border-t border-slate-200 bg-slate-50/70 p-6 sm:p-8 lg:border-l lg:border-t-0">
                        <div className="flex items-start gap-3">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                                <CalendarCheck className="size-5" />
                            </div>

                            <div>
                                <h3 className="font-semibold text-slate-900">
                                    {formattedSelectedDate ?? "Select a date"}
                                </h3>

                                <p className="mt-1 text-xs text-slate-500 secondary-font">
                                    {selectedDate
                                        ? "Select an available time slot"
                                        : "Available times will appear here"}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">
                            {selectedDate ? (
                                selectedSlots.map((time) => {
                                    const selected = selectedTime === time;

                                    return (
                                        <button
                                            key={time}
                                            type="button"
                                            onClick={() => setSelectedTime(time)}
                                            className={`
                        w-full rounded-lg border px-4 py-3
                        text-sm font-medium transition

                        ${selected
                                                    ? "border-green-500 bg-green-100 text-green-800 ring-1 ring-green-500"
                                                    : "border-slate-200 bg-white text-slate-700 hover:border-green-400 hover:bg-green-50"
                                                }
                      `}
                                        >
                                            {time}
                                        </button>
                                    );
                                })
                            ) : (
                                <div className="rounded-lg border border-dashed border-slate-200 p-8 text-center">
                                    <p className="text-sm text-slate-400 secondary-font">
                                        Choose an available date from the calendar.
                                    </p>
                                </div>
                            )}
                        </div>

                        <button
                            type="button"
                            disabled={!selectedDate || !selectedTime}
                            onClick={handleBooking}
                            className="mt-6 w-full rounded-lg bg-green-500 px-5 py-3.5 font-semibold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-slate-300"
                        >
                            Continue to Booking Form
                        </button>

                        <p className="mt-3 text-center text-xs text-slate-400 secondary-font">
                            Booking requests are subject to confirmation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}