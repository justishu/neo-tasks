function Controls({Start,Stop,Reset}) {
  return (
    <div>
      <button style={{...btnStyle,backgroundColor:"green"}} onClick={Start}>START</button>

      <button style={{...btnStyle,backgroundColor:"orange"}} onClick={Reset}>RESET</button>

      <button style={{...btnStyle,backgroundColor:"red"}} onClick={Stop}>STOP</button>
    </div>
  );
}

export default Controls;
const btnStyle={height:"70px",width:"70px",margin:"8px", padding:"10px", borderRadius:"50%",border:"none",color:"white",fontWeight:"bold"};