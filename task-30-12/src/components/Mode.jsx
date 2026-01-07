function Mode({ currentMode, onSelect }) {
  return (
    <div style={modeWrapper}>
      <div style={modeContainer}>
        {["focus", "break"].map((m) => {//Iterate over modes
          const active = currentMode === m;//Check if mode is active

          return (
            <button
              key={m}
              onClick={() => onSelect(m)}
              style={{
                ...modeBtn,
                ...(active ? activeBtn : inactiveBtn)
              }}
            >
              {m === "focus" ? "FOCUS TIME" : "SHORT BREAK"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
// Styles for Mode component
const modeWrapper = {
  marginTop: "6px",
  marginBottom: "10px"
};

const modeContainer = {
  display: "flex",
  gap: "6px",
  padding: "6px",
  background: "#ffffff0a",
  borderRadius: "40px",
  backdropFilter: "blur(10px)",
  boxShadow: "inset 0 0 0 1px #ffffff0f"
};

const modeBtn = {
  minWidth: "130px",
  padding: "10px 18px",
  borderRadius: "30px",
  border: "none",
  fontSize: "12px",
  letterSpacing: "2px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.25s ease"
};

const activeBtn = {
  background: "#f5f7ff",
  color: "#0e112a",
  boxShadow: "0 10px 26px #f5f7ff59"
};

const inactiveBtn = {
  background: "transparent",
  color: "#9aa0d8"
};

export default Mode;
