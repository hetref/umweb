import { useContext } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { CursorContext } from "../../context/CursorContextProvider";

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        pointerEvents: "none",
      }}
    >
      <svg
        width={80}
        height={80}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 1.5 : 1})`,
          stroke: cursor.active ? "black" : "white",
          strokeWidth: 2,
          fill: cursor.active ? "rgba(255,255,255,0)" : "black",
          transition: "transform .2s ease-in-out",
        }}
      >
        <circle cx="25" cy="25" r="8" />
      </svg>
    </div>
  );
};

export default Cursor;
