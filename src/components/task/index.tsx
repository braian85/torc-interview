import React from 'react'

interface TaskProps {
  task: string
  userIndex: number
  user: string
  usersLength: number
  moveRight: (user: string, task: string) => void
  moveLeft: (user: string, task: string) => void
}

const Task: React.FC<TaskProps> = ({
  task,
  userIndex,
  user,
  usersLength,
  moveRight,
  moveLeft,
}) => {
  return (
    <div className='task'>
      <div className='slider'>
        <button
          disabled={userIndex === 0 ? true : false}
          onClick={() => moveLeft(user, task)}
        >
          {'<'}
        </button>
      </div>
      <p>{task}</p>
      <div className='slider'>
        <button
          disabled={userIndex === usersLength - 1 ? true : false}
          onClick={() => moveRight(user, task)}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default Task
