import { Trash } from 'phosphor-react'
import styles from '../styles/TaskList.module.css'

export function TaskList() {
  return (
    <div className={styles.container}>
      <div className={styles.listInfo}>
        <strong>Tarefas criadas <span>2</span></strong>
        <strong>Concluídas <span>1 de 2</span></strong>
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <input type="checkbox" />
          
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

          <button type="button"><Trash size={14} /></button>
        </li>

        <li className={`${styles.listItem} ${styles.itemCompleted}`}>
          <input type="checkbox" checked/>
          
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

          <button type="button"><Trash size={14} /></button>
        </li>
      </ul>
    </div>
  )
}