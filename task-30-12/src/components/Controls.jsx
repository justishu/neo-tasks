function Controls({ Start, Stop, Reset, running }) {
  return (
    <div style={controlsBox}>
      <button onClick={running ? Stop : Start} style={{ ...btn, ...startBtn }}>
        {running ? "PAUSE" : "START"}
      </button>

      <button onClick={Reset} style={{ ...btn, ...resetBtn }}>
        RESET
      </button>

      <button onClick={Stop} style={{ ...btn, ...stopBtn }}>
        STOP
      </button>
    </div>
  );
}
//Controls component
const controlsBox = {
  display: "flex",
  gap: "18px",
  marginTop: "18px"
};
//control buttons
const btn = {
  padding: "12px 26px",
  borderRadius: "28px",
  border: "none",
  fontWeight: 600,
  fontSize: "13px",
  letterSpacing: "2px",
  cursor: "pointer",
  transition: "transform 0.15s ease, box-shadow 0.15s ease",
  boxShadow: "0 8px 20px #00000059"
};
//start button
const startBtn = {
  background: "linear-gradient(135deg, #7fffd4, #4ddbbf)",
  color: "#0e112a"
};

//reset button 
const resetBtn = {
  background: "linear-gradient(135deg, #ffd166, #f4b400)",
  color: "#0e112a"
};
//stop button
const stopBtn = {
  background: "linear-gradient(135deg, #c7b7ff, #9f8cff)",
  color: "#0e112a"
};

export default Controls;