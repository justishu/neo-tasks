import {useEffect,useState} from "react";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import Mode from "./components/Mode";

function App(){
  const focusTime=25*60;
  const breakTime=5*60;

  const [time,setTime]=useState(focusTime);
  const [mode,setMode]=useState("focus");
  const [running,setRunning]=useState(false);

  const [flicker,setFlicker]=useState(null);
  const [flickerColor, setFlickerColor] = useState("black");

  useEffect(() => {
    if (!running){
      return;
    }
    if (time === 0) {
      setRunning(false);
      if (mode === "focus"){
        setMode("break");
        setTime(breakTime);
        setFlicker("break");
      }else{
        setMode("focus");
        setTime(focusTime);
        setFlicker("focus");
      }
      return;
    }

    const interval=setInterval(() => {
      setTime(prev=>prev-1);
    }, 1000);

    return () => clearInterval(interval);
  },[running, time, mode, focusTime, breakTime]);

  useEffect(()=>{
    if (!flicker){
      return;
    }

    const colors =["green","red","blue"];
    let index = 0;

    const flickerTimer = setInterval(()=> {
      setFlickerColor(colors[index % colors.length]);
      index++;
    },300);

    return()=>{
      clearInterval(flickerTimer);
      setFlickerColor("black");
    };
  }, [flicker]);

  const start = () => {
    setRunning(true);
  };

  const stop = () => {
    setRunning(false);
  };

  const reset = () => {
    setRunning(false);
    setTime(mode === "focus" ? focusTime : breakTime);
    setFlicker(null);
  };

  const changeMode = (newMode) => {
    setRunning(false);
    setMode(newMode);
    setTime(newMode === "focus" ? focusTime : breakTime);
    setFlicker(null);
  };

  return (
    <div style={outerboxStyle}>
      <div style={innerboxStyle}>
        <Timer time={time} />

        <Mode currentMode={mode} flicker={flicker} flickerColor={flickerColor} onSelect={changeMode} />

        <Controls Start={start} Stop={stop} Reset={reset} />
      </div>
    </div>
  );
}

const outerboxStyle = {
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const innerboxStyle = {
  border: "2px solid gray",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
};

export default App;
