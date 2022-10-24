import { ClipboardText, Trash } from 'phosphor-react'
import { useEffect } from 'react';

import styles from '../styles/TaskList.module.css'

interface ITask {
  title: string;
  isCompleted: boolean;
}

interface ITaskListProps {
  tasks: ITask[];
}

export function TaskList({ tasks }: ITaskListProps) {
  return (
    <div className={styles.container}>
      <div className={styles.listInfo}>
        <strong>
          Tarefas criadas
          <span>0</span>
        </strong>

        <strong>
          Concluídas
          <span>1 de 1</span>
        </strong>
      </div>

      {tasks.length > 0 ? (
        <ul className={styles.list}>
          {tasks.map(({ title, isCompleted }) => {
            return (
              <li
                key={title}
                className={`${styles.listItem} ${isCompleted ? styles.itemCompleted : ''}`}
              >
                <input
                  defaultChecked={isCompleted}
                  type="checkbox"
                />

                <p>{title}</p>

                <button type="button">
                  <Trash size={14} />
                </button>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className={styles.listWithoutItem}>
          <ClipboardText size={56} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </div>
  )
}