import { useState,useEffect } from "react";
import Createtask from "./copmonent/Createtask/Createtask";
import ListTasks from "./copmonent/ListTasks/ListTasks";
import  { Toaster } from 'react-hot-toast';
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const App = () => {
const [tasks,setTasks]=useState([]);    //?  task is the element of tasks 

console.log("tasks" ,tasks);
useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks) {
    setTasks(storedTasks);
  }
}, []);
  return (
    <DndProvider backend={HTML5Backend}>
    <Toaster />
     <div>
      <Createtask tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </div>
    </DndProvider>
   
  );
};

export default App;