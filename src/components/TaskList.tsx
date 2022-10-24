import { ClipboardText, Trash } from 'phosphor-react'

import styles from '../styles/TaskList.module.css'

interface ITask {
  id: string;
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
          {tasks.map(({ id, title, isCompleted }) => {
            return (
              <li
                key={id}
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