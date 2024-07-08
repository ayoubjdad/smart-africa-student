import React from "react";

export default function Button({ text, contained = false, sx }) {
  return (
    <span
      style={{
        cursor: "pointer",
        borderRadius: !contained && "60px",
        backgroundColor: !contained && "#ff8f6b",
        lineHeight: "0.7",
        padding: !contained && "16px 24px",
        width: "fit-content",
        ...sx,
      }}
    >
      {text}
    </span>
  );
}
