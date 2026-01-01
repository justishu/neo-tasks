function Mode({ flicker, onSelect }) {

  let focusOpacity = 1;
  let breakOpacity = 1;

  if (flicker === "focus") {
    focusOpacity = 0.4;
  }

  if (flicker === "break") {
    breakOpacity = 0.4;
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "10px"
    }}>
      <button
        style={{
          fontWeight: "bold",
          background: "none",
          border: "none",
          cursor: "pointer",
          opacity: focusOpacity
        }}
        onClick={() => onSelect("focus")}
      >
        FOCUS
      </button>

      <span> | </span>

      <button
        style={{
          fontWeight: "bold",
          background: "none",
          border: "none",
          cursor: "pointer",
          opacity: breakOpacity
        }}
        onClick={() => onSelect("break")}
      >
        BREAK
      </button>
    </div>
  );
}

export default Mode;
