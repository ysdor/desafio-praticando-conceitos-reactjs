import { PlusCircle } from 'phosphor-react'

import styles from '../styles/NewTask.module.css'

export function NewTask() {
  return (
    <form className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa" />

      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}