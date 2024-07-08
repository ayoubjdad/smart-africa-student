import React from "react";
import Button from "../../components/button/Button";

export default function MetiersAlaUne() {
  return (
    <div style={{ backgroundColor: "#b6deef" }}>
      <div
        style={{
          display: "grid",
          gap: "40px",
          padding: "40px",
          width: "85%",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            gap: "24px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "Roboto Condensed",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: "0.9",
              letterSpacing: "-0.04rem",
            }}
          >
            Métiers à la une
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "14px",
            }}
          >
            We always strive to deliver the best products, service and
            experiences for all our customers.
            <br /> Our customers have rated us “Excellent” on Trustpilot.
            {/* Quel métier est fait pour moi ? je découvre les spécificités de
            chaque métier. */}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "24px",
          }}
        >
          <Article
            image="https://smartstudent.africa/wp-content/uploads/2024/06/Redacteur-en-assurances-.jpg"
            title="Rédacteur en assurances"
          />
          <Article
            image="https://smartstudent.africa/wp-content/uploads/2024/06/Redacteur-en-assurances-.jpg"
            title="Responsable des services généraux"
          />
          <Article
            image="https://smartstudent.africa/wp-content/uploads/2024/06/Redacteur-en-assurances-.jpg"
            title="Business Analyst"
          />
          <Article
            image="https://smartstudent.africa/wp-content/uploads/2024/06/Redacteur-en-assurances-.jpg"
            title="Gestionnaire de parc automobile"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            text="Découvrir plus de métiers"
            sx={{ backgroundColor: "transparent", border: "1px solid" }}
          />
        </div>
      </div>
    </div>
  );
}

const Article = ({ title, image }) => (
  <div
    style={{
      backgroundColor: "white",
      width: "100%",
      borderRadius: "12px",
      overflow: "hidden",
    }}
  >
    <img
      alt=""
      src={image}
      style={{ width: "100%", height: "200px", objectFit: "cover" }}
    />
    <div style={{ padding: "16px", display: "grid", gap: "16px" }}>
      <p style={{ fontWeight: 500 }}>{title}</p>
      {/* <p style={{ fontSize: "12px" }}>
        Rédacteur en assurancesRé dacteur en assurances Rédacteur en
        assurancesRé dacteur en assurances
      </p> */}
      <p
        style={{
          cursor: "pointer",
          fontSize: "12px",
          padding: "8px 16px",
          border: "1px solid",
          width: "fit-content",
          borderRadius: "60px",
        }}
      >
        Découvrir
      </p>
    </div>
  </div>
);
