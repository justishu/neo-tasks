function Timer({time}) {
  const min=Math.floor(time/60);
  const sec=time%60;

  return(
    <h2 style={{fontSize:"48px",margin:"20px 0",fontFamily:"monospace"}}>
      {min}:{sec<10?("0"+sec):sec}
    </h2>
  );
}

export default Timer;