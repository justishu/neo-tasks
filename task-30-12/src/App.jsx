import { useEffect, useState } from "react";
import CircularTimer from "./components/CircularTimer";
import Mode from "./components/Mode";
import Controls from "./components/Controls";


function App() {
  const [focusTime, setFocusTime] = useState(25 * 60);
  const [breakTime, setBreakTime] = useState(5 * 60);
  //Stores what user types ,Separate from focusTime Prevents UI bugs when editing
  const [focusInput, setFocusInput] = useState(25);
  const [breakInput, setBreakInput] = useState(5);
  //Holds the current running time Changes every second
  const [time, setTime] = useState(focusTime);
  const [mode, setMode] = useState("focus");
  const [running, setRunning] = useState(false);
  //focus or break for flicker effect
  const [flicker, setFlicker] = useState(null);
  //Timer effect
  useEffect(() => {
    if (!running) return;//Do nothing if not running
    //When time reaches 0 switch modes
    if (time === 0) {
      setRunning(false);//Auto stop on mode switch

      if (mode === "focus") {
        setMode("break");//Switch to break
        setTime(breakTime);//Set break time
        setFlicker("break");//Start flicker for break
      } else {
        setMode("focus");//Switch to focus
        setTime(focusTime);//Set focus time
        setFlicker("focus");//Start flicker for focus
      }
      return;//Exit to prevent negative time countdown
    }
    //Countdown timer
    const interval = setInterval(() => {
      setTime(prev => prev - 1);//Decrease time by 1 every second
    }, 1000);

    return () => clearInterval(interval);//Cleanup interval on stop 
  }, [running, time, mode, focusTime, breakTime]);//Dependencies for useEffect to watch have latest values

  const start = () => {//Start timer
    setRunning(true);//Set running to true
    setFlicker(null);//Stop flicker when start
  };

  const stop = () => setRunning(false);//Stop timer

  const reset = () => {//Reset timer
    setRunning(false);
    setTime(mode === "focus" ? focusTime : breakTime);//Reset to current mode time
    setFlicker(null);//Stop flicker on reset
  };

  const changeMode = (newMode) => {//Change between focus and break time
    setRunning(false);//Stop timer on mode change
    setMode(newMode);
    setTime(newMode === "focus" ? focusTime : breakTime);//Set time to selected mode time
    setFlicker(null);//Stop flicker on mode change
  };

  return (
    <div style={outerStyle}>
      <div style={innerStyle}>

        {/* Time inputs */}
        <div style={timeCard}> {/* Time input card */}
          <div style={timeField}> {/* Focus time field */}
            <label style={label}>FOCUS</label>
            <div style={inputWrap}>
              <input
                type="number"
                min="1"
                value={focusInput}
                disabled={running}
                onChange={(e) => {
                  const v = Number(e.target.value); //Get numeric value
                  setFocusInput(v); //Update input state
                  setFocusTime(v * 60);
                  if (!running && mode === "focus") { setTime(v * 60); }//Update timer if in focus mode and not running
                }}
                style={{
                  ...input,
                  ...numberInput,
                  opacity: running ? 0.5 : 1 //Dim input when running
                }}
              />
              <span style={unit}>min</span> 
            </div>
          </div>

          <div style={timeField}>
            <label style={label}>BREAK</label>
            <div style={inputWrap}>
              <input
                type="number"
                min="1"
                value={breakInput}
                disabled={running}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  setBreakInput(v);
                  setBreakTime(v * 60);
                  if (!running && mode === "break") setTime(v * 60);//Update timer if in break mode and not running
                }}
                style={{
                  ...input,
                  ...numberInput,
                  opacity: running ? 0.5 : 1
                }}
              />
              <span style={unit}>min</span>
            </div>
          </div>
        </div>

        <CircularTimer
          time={time}
          totalTime={mode === "focus" ? focusTime : breakTime} //Total time for current mode
          mode={mode}
          flicker={flicker}
        />

        <Mode currentMode={mode} onSelect={changeMode} />

        <Controls
          Start={start}
          Stop={stop}
          Reset={reset}
          running={running}
        />

      </div>
    </div>
  );
}

// Styles for outer and inner containers
const outerStyle = {
  position: "fixed",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "radial-gradient(circle at top, #1e2140, #0e112a)"
};

const innerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "22px",
  color: "#eaeaff"
};

// Styles for time input card and fields
const timeCard = {
  display: "flex",
  gap: "20px",
  padding: "16px 22px",
  background: "#151932",
  borderRadius: "18px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
};
// Styles for individual time input fields
const timeField = {
  display: "flex",
  flexDirection: "column",
  gap: "6px"
};

const label = {
  fontSize: "11px",
  letterSpacing: "2px",
  color: "#8f93c7"
};

const inputWrap = {
  display: "flex",
  alignItems: "center",
  background: "#0e112a",
  borderRadius: "12px",
  padding: "6px 10px"
};
// Styles for input elements
const input = {
  width: "50px",
  background: "transparent",
  border: "none",
  outline: "none",
  color: "#eaeaff",
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "center"
};

// Styles to make number input consistent across browsers
const numberInput = {
  appearance: "textfield",
  MozAppearance: "textfield",
  WebkitAppearance: "none"
};
// Styles for unit text next to input
const unit = {
  fontSize: "12px",
  opacity: 0.6,
  marginLeft: "4px"
};

export default App;
