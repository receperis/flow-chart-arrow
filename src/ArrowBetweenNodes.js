import React, { useEffect, useState } from "react";

// type ArrowBetweenNodesProps = {
//     startNodeId: string;
//     endNodeId: string;
//     direction?: string;
// }

const ArrowBetweenNodes = ({ startNodeId, endNodeId, direction }) => {
  const [dimensions, setDimensions] =
    useState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  const [scrollPos, setScrollPos] =
    useState({
      scrollX: 0,
      scrollY: 0,
    });
  const [arrowPosition, setArrowPosition] = useState({});

  useEffect(() => {
    const containerNode = document.querySelector("body");

    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    const handleScroll = () => {
      setScrollPos({
        scrollX: containerNode?.scrollLeft,
        scrollY: containerNode?.scrollTop,
      });
    };

    window.addEventListener("resize", handleResize);
    containerNode?.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerNode?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const startNode = document.getElementById(startNodeId);
    const endNode = document.getElementById(endNodeId);

    const calculateArrowPosition = () => {
      if (startNode && endNode) {
        const startRect = startNode.getBoundingClientRect();
        const endRect = endNode.getBoundingClientRect();

        let startX;
        let startY;
        let endX;
        let endY;
        let horizontalArrowRightAngleEndY;
        let horizontalArrowFinalEndY;

        switch (direction) {
          case "horizontal":
            startX = startRect.right;
            startY = startRect.top + startRect.height / 2;

            endX = endRect.left;
            endY = endRect.top + endRect.height / 2;
            break;

          case "vertical":
            startX = startRect.left + startRect.width / 2;
            startY = startRect.bottom;

            endX = endRect.left + endRect.width / 2;
            endY = endRect.top;
            horizontalArrowFinalEndY = endY;

            horizontalArrowRightAngleEndY = (endY - startY) / 2;
            endY = endY - horizontalArrowRightAngleEndY;
            break;

          default:
            return null;
        }

        return { startX, startY, endX, endY, horizontalArrowFinalEndY };
      }

      return null;
    };

    setArrowPosition(calculateArrowPosition());
  }, [dimensions, direction, endNodeId, scrollPos, startNodeId]);

  if (!arrowPosition.startX) {
    return null;
  }

  const getSVGPath = () => {
    if (direction === "horizontal") {
      return `M ${arrowPosition.startX} ${arrowPosition.startY}
              L ${arrowPosition.endX} ${arrowPosition.endY}`;
    }
    if (direction === "vertical") {
      return `M ${arrowPosition.startX} ${arrowPosition.startY}
              L ${arrowPosition.startX} ${arrowPosition.endY}
              L ${arrowPosition.endX} ${arrowPosition.endY}
              L ${arrowPosition.endX} ${arrowPosition.horizontalArrowFinalEndY}`;
    }
    return "";
  };

  return (
    <svg
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 2,
      }}
      width="100%"
      height="100%"
    >
      <path
        d={getSVGPath()}
        style={{
          fill: "none",
          stroke: "#1E81B9",
          strokeWidth: 1.2,
          markerEnd: "url(#arrowHead)",
        }}
      />
      <defs>
        <marker
          id="arrowHead"
          markerWidth="9"
          markerHeight="10"
          refX="9"
          refY="5"
          orient="auto"
        >
          <path
            d="M 4 0 L 9 5 L 4 10"
            fill="none"
            style={{
              stroke: "#1E81B9",
              strokeWidth: 1,
            }}
          />
        </marker>
      </defs>
    </svg>
  );
};

export default ArrowBetweenNodes;
