import React, { useState } from "react";
import "../scss/Feature.scss";


export interface IFeature {
  title: string;
  description: string;
  image: string;
  left: boolean;
}

interface IRotation {
  x: number;
  y: number;
}

const Feature: React.FC<{ feature: IFeature }> = ({ feature }) => {
  const defaultRotation: IRotation = {
    x: feature.left ? 10 : 10,
    y: feature.left ? 10 : -10,
  };

  const [rotation, setRotation] = useState(defaultRotation);

  const handleMouseMove: React.MouseEventHandler<HTMLImageElement> = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateX = -y * 20;
    const rotateY = x * 20;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseOut = () => {
    setRotation(defaultRotation);
  };

  return (
    <div className="feature" style={{ flexDirection: feature.left ? "row-reverse" : "row" }}>
      <div className="feature-info">
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
      </div>
      <img
        draggable={false}
        src={feature.image}
        alt={feature.title}
        style={{
          transform: `perspective(500px) rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
};

export default Feature;
