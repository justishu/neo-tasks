function Controls({ Start, Stop, Reset }) {
    function Start() {
            setRunning(true);
            setFlicker(null);
        }
        function Stop() {
            setRunning(false);
        }
        function Reset() {
            setRunning(false);
            setTime(mode === "focus" ? FOCUS_TIME : REST_TIME);
            setFlicker(null);
        }
    return (
        

    < div >
        <button
            style={{ margin: "8px", padding: "10px", cursor: "pointer" }}
            onClick={Start}
        >
            START
        </button>

        <button
            style={{ margin: "8px", padding: "10px", cursor: "pointer" }}
            onClick={Reset}
        >
            RESET
        </button>

        <button
            style={{ margin: "8px", padding: "10px", cursor: "pointer" }}
            onClick={Stop}
        >
            STOP
        </button>
    </div >
  );
}

export default Controls;
