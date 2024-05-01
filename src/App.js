import "./App.css";
import React from "react";
import ArrowBetweenNodes from "./ArrowBetweenNodes";
// import ArrowBetweenNodes from "flow-chart-arrow";

function App() {
  const connections = [
    { startNodeId: "node1", endNodeId: "node2", direction: "horizontal" },
    { startNodeId: "node2", endNodeId: "node3", direction: "horizontal" },
    { startNodeId: "node3", endNodeId: "node4", direction: "vertical" },
    { startNodeId: "node4", endNodeId: "node5", direction: "horizontal" },
    { startNodeId: "node5", endNodeId: "node6", direction: "horizontal" },
    { startNodeId: "node6", endNodeId: "node7", direction: "vertical" },
    { startNodeId: "node7", endNodeId: "node8", direction: "horizontal" },
    { startNodeId: "node8", endNodeId: "node9", direction: "horizontal" },
  ];
  const renderArrows = () =>
    connections.map((connection) => (
      <ArrowBetweenNodes
        key={connection.startNodeId}
        startNodeId={connection.startNodeId}
        endNodeId={connection.endNodeId}
        direction={connection.direction}
      />
    ));

  return (
    <div className="container">
      <div className="row">
        <div className="node" id="node1">
          1
        </div>
        <div className="node" id="node2">
          2
        </div>
        <div className="node" id="node3">
          3
        </div>
      </div>
      <div className="row">
        <div className="node" id="node4">
          4
        </div>
        <div className="node" id="node5">
          5
        </div>
        <div className="node" id="node6">
          6
        </div>
      </div>
      <div className="row">
        <div className="node" id="node7">
          7
        </div>
        <div className="node" id="node8">
          8
        </div>
        <div className="node" id="node9">
          9
        </div>
      </div>
      {renderArrows()}
    </div>
  );
}

export default App;
