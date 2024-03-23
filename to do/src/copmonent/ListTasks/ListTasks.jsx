import Section from "../section/Section";
import "./Listtask.css"
const ListTasks = ({ tasks, setTasks }) => {

  const statues = ["Todo", "Inprogress", "Completed"];

  
    return (
      <div className="Fainal_section">  <div className="sectiuon_statues" >
        {statues.map((status, index) => (
          <Section key={index} status={status}   counter={tasks.filter(task => task.status === status).length} />
        ))}
      <div className="section Todo">
          {tasks
            .filter((task) => task.status === "Todo")
            .map((task) => (
              <div key={task.id} className="task">
                <p className="TaskCard" >{task.name}</p>
              </div>
            ))}
        </div>
      </div>
      </div>
    
    );
  };
  
export default ListTasks;
