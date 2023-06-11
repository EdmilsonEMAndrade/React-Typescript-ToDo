import { CheckCircle, Trash } from '@phosphor-icons/react'
import { TaskType } from '../../../../interfaces/task.interface'
import { StyledWithTaskContainer } from './WithTasks.styles'
import { useContext } from 'react'
import { TaskContext } from '../../../../context/Task.context'
import { getExpendTime } from '../../../timer/Timer.utils'

interface TasksDoneProps {
  task: TaskType
}

export function TasksDone({ task }: TasksDoneProps) {
  const { deleteTask, changeStatusTask } = useContext(TaskContext)

  return (
    <StyledWithTaskContainer disabled={task.isDoing}>
      <CheckCircle
        className="checkCircle"
        size={24}
        weight="fill"
        onClick={() => changeStatusTask(task.id)}
      />
      <del>{task.text}</del>
      <div>
        {task.amoutSecondPassed ? <span>{getExpendTime(task.amoutSecondPassed)}</span> : null}
        <Trash
          onClick={() => !task.isDoing ? deleteTask(task.id) : ""}
          className="trash"
          size={24}
        />
      </div>
    </StyledWithTaskContainer>
  )
}
