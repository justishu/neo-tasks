function Timer({ time }) {
  let min = Math.floor(time / 60);
  let sec = time % 60;

  if (sec < 10) {
    sec = "0" + sec;
  }

  return (
    <h2 style={{ fontSize: "48px", margin: "20px 0", fontFamily: "monospace" }}>
      {min}:{sec}
    </h2>
  );
}

export default Timer;
