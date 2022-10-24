import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TaskList } from './components/TaskList'

import './styles/global.css'
import styles from './styles/App.module.css'

interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function createNewTask(taskTitle: string) {
    const newTask = { id: uuidv4(), title: taskTitle, isCompleted: false }

    setTasks([...tasks, newTask])
  }

  function toggleTheTaskIsCompleted(taskId: string) {
    const newTasks = tasks.map(({ id, title, isCompleted }) => {
      if (id === taskId) {
        return {
          id,
          title,
          isCompleted: !isCompleted
        }
      }

      return {
        id,
        title,
        isCompleted
      }
    })

    setTasks(newTasks)
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter(({ id }) => id !== taskId)

    setTasks(newTasks)
  }

  return (
    <>
      <Header />

      <main className={styles.content}>
        <NewTask createNewTask={createNewTask} />

        <TaskList
          tasks={tasks}
          toggleTheTaskIsCompleted={toggleTheTaskIsCompleted}
          deleteTask={deleteTask}
        />
      </main>
    </>
  )
}