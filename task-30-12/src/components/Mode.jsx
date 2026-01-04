function Mode({ currentMode, flicker, flickerColor, onSelect }) {
  return (
    <div style={{ marginBottom:"15px"}}>
      <button onClick={() => onSelect("focus")} style={{...modeStyle, color: flicker==="focus"? flickerColor:"black"}}>FOCUS</button>

      <span> | </span>

      <button onClick={() => onSelect("break")} style={{...modeStyle, color: flicker==="break"? flickerColor:"black"}}>BREAK</button>
    </div>
  );
}
const modeStyle={
          background:"none",
          border:"none",
          fontWeight:"bold",
        };
export default Mode;
