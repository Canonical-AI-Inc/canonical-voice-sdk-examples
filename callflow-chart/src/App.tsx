import { CallFlow, CallFlowMargin, CanonicalProviders } from "@canonical/voice";
import { useState } from "react";

import "./App.css";

const apiKey = process.env.REACT_APP_CANONICAL_API_KEY ?? "";

function App() {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  return (
    <CanonicalProviders apiKey={apiKey}>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr auto 1fr",
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "#f0f0f0",
        }}
      >
        <div style={{ width: "100%", backgroundColor: "#f0f0f0" }} />{" "}
        {/* Top row */}
        <div
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              aria-label="Start date"
              style={{
                padding: "8px 12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
                backgroundColor: "white",
                cursor: "pointer",
                outline: "none",
              }}
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              aria-label="End date"
              style={{
                padding: "8px 12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
                backgroundColor: "white",
                cursor: "pointer",
                outline: "none",
              }}
            />
          </div>

          <CallFlow
            className="canonical-callflow"
            assistantId="iFrame UploadTest"
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
        <div style={{ width: "100%", backgroundColor: "#f0f0f0" }} />{" "}
        {/* Bottom row */}
      </div>
    </CanonicalProviders>
  );
}

export default App;
