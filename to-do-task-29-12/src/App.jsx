import TaskApp from "./components/TaskApp";

function App() {
  return(
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}> 
      <TaskApp style={{display: "flex", flexDirection: "column", alignItems: "center"}} />
    </div>
  );
}

export default App;
