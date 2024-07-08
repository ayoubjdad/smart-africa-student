import React from "react";
import Button from "../../components/button/Button";

export default function Chat() {
  return (
    <Button
      text="Chat GTP"
      sx={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        boxShadow: "0px 0px 20px rgb(0, 0, 0,0.2)",
      }}
    />
  );
}
