import React, { useState, useRef } from "react";
import Xarrow from "react-xarrows";

const boxStyle = {
  position: "absolute",
  // zIndex: 1,
  background: "#ddd",
  borderRadius: "5px",
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  width: "100px",
  height: "30px",
};

const App = () => {
  const boxes = [
    { id: "feature1", x: 50, y: 20, highlighted: false },
    { id: "feature2", x: 100, y: 450, highlighted: false },
    { id: "feature3", x: 50, y: 80, highlighted: false },
    { id: "feature4", x: 250, y: 100, highlighted: true },
    { id: "feature5", x: 200, y: 380, highlighted: false },
    { id: "feature6", x: 80, y: 360, highlighted: false },
    { id: "feature7", x: 400, y: 160, highlighted: false },
  ];

  const lines = [
    {
      start: "feature1",
      end: "feature2",
      headSize: 2,
      passProps: { strokeWidth: 4 },
      color: "rgba(0,0,255,0.3)",
    },
    {
      start: "feature1",
      end: "feature4",
      headSize: 2,
      passProps: { strokeWidth: 4 },
      color: "red",
    },
    {
      start: "feature1",
      end: "feature5",
      headSize: 2,
      passProps: { strokeWidth: 4 },
      color: "rgba(0,0,255,0.3)",
    },
    {
      start: "feature1",
      end: "feature7",
      headSize: 2,
      passProps: { strokeWidth: 4 },
      color: "rgba(0,0,255,0.3)",
    },
  ];

  return (
    <React.Fragment>
      {boxes.map((box, i) => (
        <div
          id={box.id}
          style={{
            ...boxStyle,
            ...(box.highlighted ? { background: "red", zIndex: 1 } : {}),
            left: box.x,
            top: box.y,
          }}
        >
          {box.id}
        </div>
      ))}
      {lines.map((line, i) => (
        <Xarrow key={i} {...line} />
      ))}
    </React.Fragment>
  );
};

export default App;
