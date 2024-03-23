import { useState } from "react";
import "./Createtask.css";
import toast from "react-hot-toast";
const Createtask = ({tasks,setTasks}) => {
  const randomNum = Math.floor(Math.random() * 100000);
  const [task, setTask] = useState({
    id: randomNum,
    name: "",
    status: "Todo",
  });
  const handleChange = (event) => {
    setTask((prev) => ({ ...prev, name: event.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const list = [...tasks, task];
    if (task.name.length < 3) return toast.error("Boos its less then 3 Character")
    if (task.name.length > 100) return toast.error("Boos its more then 100 Character")

    setTasks(list);
    localStorage.setItem("tasks", JSON.stringify(list));
    setTask({
      id: Math.floor(Math.random() * 100000),
      name: "", // Reset task name to empty string
      status: "Todo",
    });
    toast.success("Boss We add A New Task ");
  };
  

  return (
    <form onSubmit={handleSubmit} >
      <div className="input_elememt">
        <input
          type="text"
          className="taskInput"
          autoFocus
          placeholder="Boss Input the Task"
          onChange={handleChange}
          value={task.name}
        />
        <button className="Create_btn">Add Task</button>
      </div>
    </form>
  );
};

export default Createtask;
