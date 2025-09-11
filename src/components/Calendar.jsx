import React, { useState } from "react";
import "./styles/allStyles.css";

const Calendar = ({ events = [] }) => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    let days = [];
    for (let i = 0; i < firstDay; i++) {
        days.push(null);
    }
    for (let j = 1; j <= daysInMonth; j++) {
        days.push(j);
    }

    const handlePrev = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNext = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const monthName = new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" });

    return (
        <>
            <div className="flex flex-center gap-2 mb-4">
                <button className="btn" onClick={handlePrev}>Prev</button>
                <h2 className="text-2xl">{monthName} {currentYear}</h2>
                <button className="btn" onClick={handleNext}>Next</button>
            </div>
            <div className="grid grid-cols-7 gap-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
                    <div key={d} className="font-wg-bold">{d}</div>
                ))}
                {days.map((day, index) => (
                    <div key={index} className="border p-2 h-20">
                        {day && <span>{day}</span>}
                        {day && events
                            .filter(e => {
                                const eventDate = new Date(e.date);
                                return (
                                    eventDate.getDate() === day &&
                                    eventDate.getMonth() === currentMonth &&
                                    eventDate.getFullYear() === currentYear
                                );
                            })
                            .map(e => (
                                <div key={e.id} className="text-sm bg-blue-200 rounded mt-1 p-1">
                                    {e.title}
                                </div>
                            ))}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Calendar;