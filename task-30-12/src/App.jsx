import { useEffect, useState } from "react";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import Mode from "./components/Mode";

function App() {
  const FOCUS_TIME = 25 * 60;
  const REST_TIME = 5 * 60;

  const [time, setTime] = useState(FOCUS_TIME);
  const [mode, setMode] = useState("focus");
  const [running, setRunning] = useState(false);
  const [flicker, setFlicker] = useState(null);

  useEffect(() => {
    let interval;

    if (running && time > 0) {
      interval = setInterval(() => {
        setTime(prev => prev - 1);
      }, 1000);
    }

    if (time === 0) {
      setRunning(false);

      if (mode === "focus") {
        alert("Break time!");
        setMode("rest");
        setTime(REST_TIME);
        setFlicker("rest");
      } else {
        alert("Focus time!");
        setMode("focus");
        setTime(FOCUS_TIME);
        setFlicker("focus");
      }
    }

    return () => clearInterval(interval);
  }, [running, time, mode]);

  

  

  

  function changeMode(newMode) {
    setRunning(false);
    setMode(newMode);
    setTime(newMode === "focus" ? FOCUS_TIME : REST_TIME);
    setFlicker(null);
  }

  return (
    <div style={appStyle}>
      <h1>Pomodoro Timer</h1>

      <Timer time={time} />

      <Mode
        currentMode={mode}
        flicker={flicker}
        onSelect={changeMode}
      />

      <Controls onStart={start} onStop={stop} onReset={reset} />
    </div>
  );
}

const appStyle = {
  textAlign: "center",
  padding: "40px",
  fontFamily: "Arial"
};

export default App;
