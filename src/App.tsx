import style from './styles/App.module.scss';
import Form from './components/Form';
import List from './components/List';
import Timer from './components/Timer';
import { useState } from 'react';
import { ITask } from './types/task';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selectedTask, setSelectedTask] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelectedTask(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id,
      }))
    );
  }

  return (
    <div className={style.App}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer />
    </div>
  );
}

export default App;
