import React from "react";
import Button from "../../components/button/Button";

export default function MaDestination() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.hometree.co.uk/wp-content/uploads/2023/08/trace-bg-green.svg?v=0.2.7.7)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#023e09",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          display: "grid",
          alignItems: "center",
          gap: "24px",
          gridTemplateColumns: "1fr 2fr",
          padding: "80px 40px",
          width: "85%",
          margin: "80px auto",
          borderRadius: "16px",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "12px",
            height: "fit-content",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Roboto Condensed",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: "0.9",
              letterSpacing: "-0.04rem",
            }}
          >
            Je choisis ma destination
          </div>
          {/* <div style={{ fontSize: "14px" }}>
            Une bonne info, au bon moment, peut changer un parcours !
          </div>
          <Button
            text="Découvrir"
            sx={{
              marginTop: "24px",
              backgroundColor: "transparent",
              border: "1px solid",
            }}
          /> */}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "24px",
          }}
        >
          <Article
            image="https://smartstudent.africa/wp-content/uploads/2024/06/news-sas-7-3.jpg"
            title="Tunis"
          />
          <Article
            image="https://smartstudent.africa/wp-content/uploads/2024/05/news-sas-4-5.jpg"
            title="Fès"
          />
          <Article
            image="https://smartstudent.africa/wp-content/uploads/2024/05/news-visuel.jpg"
            title="Sfax"
          />
        </div>
        {/* 
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
        </div> */}
      </div>
    </div>
  );
}

const Article = ({ title, image }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <img
      alt=""
      src={image}
      style={{ borderRadius: "12px", height: "100px", objectFit: "cover" }}
    />
    <div
      style={{
        display: "grid",
        gap: "12px",
        height: "fit-content",
      }}
    >
      <p style={{ fontWeight: 500 }}>{title}</p>
      <p style={{ fontSize: "12px" }}>
        Rédacteur en assurancesRé dacteur en assurances Rédacteur en
        assurancesRé dacteur en assurances...
      </p>
      <Button
        text={
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            Lire l'article
            <i style={{ display: "flex" }} className="fi fi-rr-arrow-right" />
          </span>
        }
        sx={{ backgroundColor: "transparent", padding: 0, fontSize: "12px" }}
      />
    </div>
  </div>
);
