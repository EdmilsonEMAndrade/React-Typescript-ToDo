import { Circle, Trash } from '@phosphor-icons/react'
import { TaskType } from '../../../../interfaces/task.interface'
import { StyledWithTaskContainer } from './WithTasks.styles'
import { useContext } from 'react'
import { TaskContext } from '../../../../context/Task.context'

interface TasksToDoProps {
  task: TaskType
}

export function TasksTodo({
  task
}: TasksToDoProps) {
  const { deleteTask, changeStatusTask } = useContext(TaskContext)

  return (
    <StyledWithTaskContainer>
      <Circle
        className="circle"
        size={24}
        onClick={() => changeStatusTask(task.id)}
      />
      <p>{task.text}</p>
      <Trash
        onClick={() => deleteTask(task.id)}
        className="trash"
        size={24}
      />
    </StyledWithTaskContainer>
  )
}
