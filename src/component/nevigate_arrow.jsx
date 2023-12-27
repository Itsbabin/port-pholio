import React from "react";

export default function Navigate() {
  return (
    <>
      <div className="left">
        <svg
          viewBox="0 0 24 24"
          width="60"
          height="60"
          fill="none"
          stroke="#ffffff91"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          
          <line x1="3" y1="12" x2="10" y2="23" />
          <line x1="3" y1="12" x2="10" y2="1" />
        </svg>
      </div>
      <div className="right">
        <svg
          viewBox="0 0 24 24"
          width="60"
          height="60"
          fill="none"
          stroke="#ffffff91"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="10" y1="23" x2="21" y2="12" />
          <line x1="10" y1="1" x2="21" y2="12" />
        </svg>
      </div>
    </>
  );
}
