import React from "react";

export default function Notification() {
  return (
    <div
      style={{
        position: "absolute",
        top: 90,
        width: "100%",
        backgroundColor: "#e4e4e4",
      }}
    >
      <div
        style={{
          //   boxShadow: "0px 0px 20px rgb(0, 0, 0,0.2)",
          padding: "10px 40px",
          width: "85%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "14px",
        }}
      >
        <span>
          Nos bureaux à votre disposition à Casablanca, Libreville, Kinshasa,
          Abidjan, Brazzaville et Nouakchott.
        </span>
        <span>
          <i style={{ display: "flex" }} className="fi fi-rr-cross-small" />
        </span>
      </div>
    </div>
  );
}
