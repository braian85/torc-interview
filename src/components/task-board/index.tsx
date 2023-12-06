import React from 'react'
import Task from '../task'

interface TaskBoardProps {
  user: string
  tasks: string[]
  addTask: (user: string, task: string) => void
  userIndex: number
  usersLength: number
  moveLeft: (user: string, task: string) => void
  moveRight: (user: string, task: string) => void
}

const TaskBoard: React.FC<TaskBoardProps> = ({
  user,
  tasks,
  addTask,
  userIndex,
  usersLength,
  moveLeft,
  moveRight,
}) => {
  const handleAddTask = () => {
    const newTask = prompt('Add a task') || ''
    if (newTask) {
      addTask(user, newTask)
    }
  }

  return (
    <div className={`task-board task-board-${userIndex}`}>
      <h2>{user}</h2>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          user={user}
          userIndex={userIndex}
          usersLength={usersLength}
          moveLeft={moveLeft}
          moveRight={moveRight}
        />
      ))}
      <div className='button-box'>
        <button onClick={handleAddTask}>Add a Task</button>
      </div>
    </div>
  )
}

export default TaskBoard
