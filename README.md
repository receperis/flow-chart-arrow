
# Arrow

`flow-chart-arrow` is a simple React component designed to draw arrows between two HTML elements, indicating a directional relationship. This component is particularly useful in scenarios where you need to visually represent connections between nodes, such as in flow diagrams or organizational charts.

## Installation

You can install flow-chart-arrow via npm:

```
npm install flow-chart-arrow
```

## Usage

To use flow-chart-arrow in your React application, import it and include it in your JSX markup, providing the necessary props:

```jsx
import React from "react";
import Arrow from "flow-chart-arrow";

const MyComponent = () => {
  return (
    <div>
      <div id="startNode">Start Node</div>
      <div id="endNode">End Node</div>
      <Arrow
        startNodeId="startNode"
        endNodeId="endNode"
        direction="horizontal"
      />
    </div>
  );
};

export default MyComponent;
```
![image](https://github.com/receperis/flow-chart-arrow/assets/66521672/fceb5895-e3fe-4fad-a824-e28461583cdb)

## Props

- `startNodeId` (string, required): The ID of the HTML element representing the starting point of the arrow.
- `endNodeId` (string, required): The ID of the HTML element representing the ending point of the arrow.
- `direction` (string, required): The direction of the arrow. Can be either "horizontal" or "vertical".

## Features

- **Dynamic Positioning**: Arrow adjusts its position dynamically based on window resize and scroll events, ensuring accurate representation even when the page layout changes.
- **Marker End**: The arrowhead is automatically added to the end of the arrow, enhancing visual clarity.

## Notes

- This component assumes that the provided start and end nodes are present in the DOM. Ensure that the IDs provided correspond to valid HTML elements.
- For optimal performance, avoid excessive re-renders of Arrow by optimizing the parent component's rendering logic.

## License

Arrow is licensed under the MIT License. Feel free to use, modify, and distribute it as per your requirements.
