// components/Graph.js
import { useEffect, useRef, useState } from "react";
import Cytoscape from "cytoscape";
import io from "socket.io-client";

const Graph = () => {
  const cyRef = useRef(null);
  const [data, setData] = useState({ elements: [] });

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("message", (newData) => {
      setData(newData);
    });

    const cy = Cytoscape({
      container: cyRef.current,
      elements: data.elements,
      style: [
        {
          selector: "node",
          style: {
            "background-color": "#0074D9",
            label: "data(name)"
          }
        },
        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "#FF4136",
            "target-arrow-color": "#FF4136",
            "target-arrow-shape": "triangle"
          }
        }
      ],
      layout: { name: "grid", rows: 1 },
      zoomingEnabled: true,
      userZoomingEnabled: true,
      panningEnabled: true,
      userPanningEnabled: true
    });

    return () => cy.destroy();
  }, [data]);

  return <div ref={cyRef} style={{ width: "100%", height: "500px" }} />;
};

export default Graph;
