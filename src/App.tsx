import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TaskList } from './components/TaskList'

import './styles/global.css'
import styles from './styles/App.module.css'

export function App() {
  return (
    <>
      <Header />

      <main className={styles.content}>
        <NewTask />
        <TaskList />
      </main>
    </>
  )
}