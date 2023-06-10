import { TasksProps } from '../../Tasks'
import { IndicatorTasksContainer } from './IndicatorTasks.styles'

export function IndicatorTasks({ tasksList }: TasksProps) {
  return (
    <IndicatorTasksContainer>
      <div>
        <p className="tasksCreated">Tasks created</p>
        <span className="highlightedNumber">{tasksList.length}</span>
      </div>
      <div>
        <p className="tasksDone">Done</p>
        <span className="highlightedNumber">
          {tasksList.reduce((accumulator, currentValue) => {
            if (currentValue.isDone) {
              accumulator += 1
            }
            return accumulator
          }, 0)}{' '}
          out of {tasksList.length}
        </span>
      </div>
    </IndicatorTasksContainer>
  )
}
