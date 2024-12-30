/// <reference types="vite/client" />

import {
  CallFlow,
  CallFlowMargin,
  CanonicalProviders,
} from "@canonicalai/voice";
import { useState } from "react";

import "./App.css";

const apiKey = import.meta.env.VITE_CANONICAL_API_KEY ?? "";

function App() {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  return (
    <CanonicalProviders apiKey={apiKey}>
      <div className="app-container">
        <div className="spacer" /> {/* Top row */}
        <div className="date-picker-container">
          <div className="date-picker-controls">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              aria-label="Start date"
              className="date-input"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              aria-label="End date"
              className="date-input"
            />
          </div>

          <CallFlow
            className="canonical-callflow"
            assistantId="YOUR_ASSISTANT_ID_HERE"
            marginLeft={CallFlowMargin.Left}
            marginRight={CallFlowMargin.Right}
            startDate={startDate && endDate ? startDate : undefined}
            endDate={endDate && startDate ? endDate : undefined}
            width={1000}
            height={400}
            showSkeleton={true}
            animateAppear={true}
          />
        </div>
        <div className="spacer" /> {/* Bottom row */}
      </div>
    </CanonicalProviders>
  );
}

export default App;
