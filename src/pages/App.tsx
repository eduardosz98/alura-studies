import { useEffect, useState } from 'react';
import { Cronometro } from '../components/Cronometro';
import FormExample from '../components/Form'
import List from '../components/List'
import { ITask } from '../types/task';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id
    })));
  }

  function endTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(oldTasks =>
        oldTasks.map(task => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            }
          }
          return task;
        }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <FormExample setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask} />
      <Cronometro endTask={endTask} selected={selected} />
    </div>
  )
}

interface Repo {
  id: string,
  name: string,
}

function AppApi() {
  useEffect(() => {
    async function loadRepos() {
      const response = await fetch("https://api.github.com/users/eduardosz98/repos");
      const repos = await response.json();

      setRepo(repos);
    }
    loadRepos();
  }, []);
  const [repos, setRepo] = useState<Repo[]>([]);

  return (
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  )
}

export default AppApi