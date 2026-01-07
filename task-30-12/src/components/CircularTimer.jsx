import { useEffect, useState } from "react";

function CircularTimer({time,totalTime,mode,flicker}) {//Props from App.jsx
  const radius = 100;
  const stroke = 1; 
  const normalizedRadius = radius - stroke * 2;//Adjust for stroke width
  const circumference = normalizedRadius * 2 * Math.PI;//Circumference formula

  const progress = time / totalTime;//Calculate progress ratio
  const strokeDashoffset = circumference - progress * circumference;//Calculate stroke offset based on progress

  const min = Math.floor(time / 60);//Calculate minutes
  const sec = time % 60;//Calculate seconds

  const [glowOn, setGlowOn] = useState(true);//State for flicker glow effect

  useEffect(() => {
    if (!flicker) {//No flicker ensure glow is on
      setGlowOn(true);
      return;//Exit effect
    }

    const interval = setInterval(() => {//Toggle glow state every 300ms
      setGlowOn(prev => !prev);
    }, 300);

    return () => clearInterval(interval);//Cleanup interval on flicker change or unmount
  }, [flicker]);

  return (
    <div style={{ position: "relative", width: "220px", height: "220px" }}>
      <svg width="220" height="220">
        
        <circle
          stroke="#2f365f"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="110"
          cy="110"
        />

        <circle
          stroke="#ffffff"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          r={normalizedRadius}
          cx="110"
          cy="110"
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 1s linear",
            opacity: flicker ? (glowOn ? 1 : 0.3) : 1,
            filter:
              flicker && glowOn
                ? flicker === "focus"
                  ? "drop-shadow(0 0 10px #ffffffff)"
                  : "drop-shadow(0 0 12px #00ffccff)"
                : "none"
          }}
        />
      </svg>

      <div style={centerText}>
        <div style={{ fontSize: "46px", fontWeight: "bold" }}>
          {min}:{sec < 10 ? "0" + sec : sec}
        </div>
        <div style={{ fontSize: "12px", letterSpacing: "3px", opacity: 0.7 }}>
          {mode === "focus" ? "FOCUS" : "BREAK"}
        </div>
      </div>
    </div>
  );
}
// Styles for centered text inside the circular timer
const centerText = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "#eaeaff"
};

export default CircularTimer;
