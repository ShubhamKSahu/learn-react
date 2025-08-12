import React from "react";
import type { Car } from "../../type";

export default function PreviewList({ carinfo }: {carinfo: Car}) {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={carinfo.image} alt={carinfo.carname} width="250" />
      <h2>{carinfo.carname}</h2>
      <p>{carinfo.price}</p>
      <p>{carinfo.description}</p>
    </div>
  );
}
