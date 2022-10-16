import React from "react";
import Highlight from "../CarHighlights/Highlights/Highlight";

interface props {
  carDetails: string[];
  title: string;
}

function CarFeatures({ carDetails, title }: props) {
  return (
    <div className="section-column centered margin_t5">
      <h3 className="section_title main_text_color transition_effect">{title}</h3>
      <div className="details_container">
        {carDetails.map((feature, index) => (
          <Highlight key={index} highlight={feature} />
        ))}
      </div>
    </div>
  );
}

export default CarFeatures;
