import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from '../styles/NewTask.module.css'

interface INewTaskProps {
  createNewTask: (taskTitle: string) => void;
}

export function NewTask({ createNewTask }: INewTaskProps) {
  const [taskTitle, setTaskTitle] = useState('')

  function handleNewTaskTitleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    createNewTask(taskTitle)
    setTaskTitle('')
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.container}>
      <input
        value={taskTitle}
        onChange={handleNewTaskTitleChange}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />

      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}