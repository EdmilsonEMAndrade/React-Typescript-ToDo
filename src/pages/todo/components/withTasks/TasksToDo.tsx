import { Circle, Trash } from '@phosphor-icons/react'
import { ToDoType } from '../../../../interfaces/todo.interface'
import { StyledWithTaskContainer } from './WithTasks.styles'

interface TasksToDoProps {
  todo: ToDoType
  onDeleteTask: (id: number) => void
  onChangeStatusTask: (id: number) => void
}

export function TasksTodo({
  todo,
  onDeleteTask,
  onChangeStatusTask,
}: TasksToDoProps) {
  function handleChangeStatusTask(idToChangeStatus: number) {
    onChangeStatusTask(idToChangeStatus)
  }

  function handleDeleteTask(idToDelete: number) {
    onDeleteTask(idToDelete)
  }
  return (
    <StyledWithTaskContainer>
      <Circle
        className="circle"
        size={24}
        onClick={() => handleChangeStatusTask(todo.id)}
      />
      <p>{todo.text}</p>
      <Trash
        onClick={() => handleDeleteTask(todo.id)}
        className="trash"
        size={24}
      />
    </StyledWithTaskContainer>
  )
}
