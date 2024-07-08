import React from "react";
import Button from "../../components/button/Button";
export default function MainSlide() {
  return (
    <div
      style={{
        width: "85%",
        margin: "20px auto 0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          borderRadius: "16px",
          backgroundColor: "#b26b7d",
          height: "70vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            backgroundColor: "#ff8f6b",
            padding: "80px",
            height: "-webkit-fill-available",
          }}
        >
          <div
            style={{
              fontFamily: "Roboto Condensed",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: "0.9",
              letterSpacing: "-0.04rem",
            }}
          >
            Switch & Save Money on Your Boiler Cover
          </div>
          <span>
            Comprehensive boiler & home emergency breakdown cover with unlimited
            repairs and regular maintenance. Plus, upgrade to sustainable home
            energy solutions when you’re ready.
          </span>
          <div style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
            <Button text="Etablissement" sx={{ backgroundColor: "#b94a66" }} />
            <Button text="Métier" sx={{ backgroundColor: "#b94a66" }} />
            <Button text="Conseil" sx={{ backgroundColor: "#b94a66" }} />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt=""
            src="https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
}
