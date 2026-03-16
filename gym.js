 function App() {
    const [task, setTask] = React.useState("");
    const [tasks, setTasks] = React.useState([]);

    function addTask() {
      if (task.trim() === "") return;
      setTasks([...tasks, task]);
      setTask("");
    }

    function removeTask(index) {
      setTasks(tasks.filter((_, i) => i !== index));
    }

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add</button>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((t, i) => (
            <li key={i} style={{ margin: "10px 0" }}>
              {t}
              <button onClick={() => removeTask(i)} style={{ marginLeft: "10px" }}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Render the app into the container
  const container = document.getElementById("todo-root");
  const root = ReactDOM.createRoot(container);
  root.render(<App />);