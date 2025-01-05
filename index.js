// pages/index.js
import React, { useEffect, useState } from "react";
import Graph from "../components/Graph";

const IndexPage = () => {
  const [graphData, setGraphData] = useState({
    elements: []
  });

  useEffect(() => {
    // Example of how data from the backend can be used
    setGraphData({
      elements: [
        { data: { id: "node-1", name: "Agent 1" } },
        { data: { id: "tool-1", name: "Tool A" } },
        { data: { source: "node-1", target: "tool-1", label: "uses" } }
      ]
    });
  }, []);

  return (
    <div>
      <h1>Interactive Attack Graph</h1>
      <Graph data={graphData} />
    </div>
  );
};

export default IndexPage;
