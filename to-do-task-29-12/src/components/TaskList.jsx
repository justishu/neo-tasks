import TaskItem from "./TaskItem";
function TaskList({ tasks, Toggle, Delete }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          Toggle={Toggle}
          Delete={Delete}
        />
      ))}
    </div>
  );
}

export default TaskList;
