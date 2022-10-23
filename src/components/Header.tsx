import styles from '../styles/Header.module.css'

import todoLogo from '../assets/todo-logo.svg'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={todoLogo} alt="Logotipo da lista de tarefas" />
    </header>
  )
}