import "./Plus.css";
import { useEffect } from "react";
function PlusButton({onOpen}) {
  useEffect(() => {
      function enterKey(e) {
        if (e.key === "Enter" || e.key === " ") {
          onOpen();
        }
      }

      window.addEventListener("keydown", enterKey);
      return () => window.removeEventListener("keydown", enterKey);
    }, [onOpen]);
  return (
    <div className="btnbox">
      <button className="btn" onClick={onOpen}>+</button>
    </div>
  );
}

export default PlusButton;