import React from "react";
import Button from "../../components/button/Button";

export default function SmartNews() {
  return (
    <div style={{}}>
      <div
        style={{
          display: "grid",
          gap: "24px",
          gridTemplateColumns: "1fr 2fr",
          padding: "80px 40px",
          width: "85%",
          margin: "0 auto",
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
            Smart News
          </div>
          <div style={{ fontSize: "14px" }}>
            Une bonne info, au bon moment, peut changer un parcours !
          </div>
          <Button
            text="Découvrir"
            sx={{
              marginTop: "24px",
              backgroundColor: "transparent",
              border: "1px solid",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "24px",
          }}
        >
          <Article
            image="https://smartstudent.africa/wp-content/uploads/2024/06/news-sas-7-3.jpg"
            title="L’ESITH lance deux nouvelles filières d’ingénieur"
          />
          <Article
            image="https://smartstudent.africa/wp-content/uploads/2024/05/news-sas-4-5.jpg"
            title="Le nombre d’étudiants gabonais au Maroc dépasse les 6.500"
          />
          <Article
            image="https://smartstudent.africa/wp-content/uploads/2024/05/news-visuel.jpg"
            title="L’UM6SS vous invite à des Journées Portes Ouvertes à Casablanca"
          />
          <Article
            image="https://smartstudent.africa/wp-content/uploads/2024/06/news-sas-7-3.jpg"
            title="L’ESITH lance deux nouvelles filières d’ingénieur"
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
  <div style={{ display: "flex" }}>
    <img
      alt=""
      src={image}
      style={{
        borderRadius: "12px",
        width: "60px",
        height: "60px",
        objectFit: "cover",
      }}
    />
    <div
      style={{
        padding: "0 16px",
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
