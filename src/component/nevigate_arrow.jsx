import React from "react";

export default function Navigate() {
  return (
    <>
      <div className="left">
        <svg
          viewBox="0 0 30 30"
          width="70"
          height="70"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          
          <line className="up"   x1="3" y1="16" x2="20" y2="23" />
          <line className="down" x1="3" y1="16" x2="20" y2="8" />
        </svg>
      </div>
      <div className="right">
        <svg
          viewBox="0 0 30 30"
          width="70"
          height="70"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line className="up"    x1="3" y1="23" x2="21" y2="12" />
          <line className="down"  x1="3" y1="1" x2="21" y2="12" />
        </svg>
      </div>
    </>
  );
}
