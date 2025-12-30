import { useEffect } from "react";
import "./Modal.css";

function Modal({ onClose }) {

  useEffect(() => {
    function escKey(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", escKey);
    return () => window.removeEventListener("keydown", escKey);
  }, [onClose]);

  return (
    <div className="modal">
      <div className="modalbox">
        <img
          src="https://www.apple.com/v/apple-vision-pro/j/images/overview/design/drawer/dual_knit_band__cuhpalc1t9ea_large_2x.jpg"
          alt="modal"
        />
        <button className="close" onClick={onClose}>x</button>
      </div>
    </div>
  );
}

export default Modal;
