import { useState } from 'react'
import CardContainer from './components/task-board'
import './App.css'

interface Tasks {
  [user: string]: string[]
}

const initialTasks: Tasks = {
  Winnie: ['buy eggs', 'buy milk'],
  Brad: ['buy meat', 'buy vegi'],
  Bob: ['buy eggs', 'buy apples'],
  Thomas: ['buy ham', 'buy bananas'],
}

function App() {
  const [tasks, setTasks] = useState<Tasks>(initialTasks)

  const addTask = (user: string, task: string): void => {
    setTasks({ ...tasks, [user]: [...tasks[user], task] })
  }

  const moveTask = (
    user: string,
    task: string,
    direction: 'right' | 'left'
  ): void => {
    const userKeys = Object.keys(tasks)
    const indexOfUser = userKeys.indexOf(user)
    const targetIndex =
      direction === 'right' ? indexOfUser + 1 : indexOfUser - 1
    const targetUser = userKeys[targetIndex]

    if (targetUser) {
      const indexOfTask = tasks[user].indexOf(task)
      if (indexOfTask !== -1) {
        tasks[user].splice(indexOfTask, 1)
        tasks[targetUser].splice(indexOfTask, 0, task)
        setTasks({ ...tasks })
      }
    }
  }

  const moveRight = (user: string, task: string): void =>
    moveTask(user, task, 'right')
  const moveLeft = (user: string, task: string): void =>
    moveTask(user, task, 'left')

  return (
    <div className='app'>
      {Object.keys(tasks).map((user, index) => (
        <CardContainer
          key={user}
          userIndex={index}
          usersLength={Object.keys(tasks).length}
          user={user}
          tasks={tasks[user]}
          addTask={addTask}
          moveRight={moveRight}
          moveLeft={moveLeft}
        />
      ))}
    </div>
  )
}

export default App
