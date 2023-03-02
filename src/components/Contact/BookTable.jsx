import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookTable() {
  const [date, setDate] = useState(new Date());

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <section className="book-table">
      <h3>Book a table</h3>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Email" />
        <DatePicker
          className="day-field"
          selected={date}
          onChange={(date) => setDate(date)}
        />
        <DatePicker
          className="time-field"
          selected={date}
          onChange={(date) => setDate(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          dateFormat="h:mm aa"
        />
        <button className="primary-btn" onClick={handleClick}>
          Book Now
        </button>
      </form>
    </section>
  );
}
