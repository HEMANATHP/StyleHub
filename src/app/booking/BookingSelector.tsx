"use client";

import { useState } from "react";

export default function BookingSelector() {
  const [selectedSlot, setSelectedSlot] = useState("");

  return (
    <section>
      <h2>Available Slots</h2>

      <button onClick={() => setSelectedSlot("10:00 AM")}>
        10:00 AM
      </button>

      <button onClick={() => setSelectedSlot("11:00 AM")}>
        11:00 AM
      </button>

      <button onClick={() => setSelectedSlot("12:00 PM")}>
        12:00 PM
      </button>

      <p>Selected Slot: {selectedSlot || "None"}</p>
    </section>
  );
}