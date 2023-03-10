import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookTable() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  function onSubmit(e) {
    e.preventDefault();
    alert(`You have reserved a table with name: ${name} on: ${date}`);
  }

  return (
    <section className="book-table">
      <h3>Book a table</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          required
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <DatePicker
          required
          className="day-field"
          selected={date}
          onChange={(date) => setDate(date)}
        />
        <DatePicker
          required
          className="time-field"
          selected={time}
          onChange={(time) => setTime(time)}
          showTimeSelect
          showTimeSelectOnly
          dateFormat="h:mm aa"
        />
        <button className="primary-btn">Book Now</button>
      </form>
    </section>
  );
}
