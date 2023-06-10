import { PlusCircle } from '@phosphor-icons/react'
import { FormEvent, useState, useContext } from 'react'

import { TasksTodo } from './components/withTasks/TasksToDo'
import { TasksDone } from './components/withTasks/TasksDone'
import { WithoutTasks } from './components/withoutTasks/WithoutTasks'

import { FormContainer, BodyTaskContainer } from './Tasks.styles'

import { TaskType } from '../../interfaces/task.interface'
import { IndicatorTasks } from './components/indicatorTasks/IndicatorTasks'
import { TaskContext } from '../../context/Task.context'

export interface TasksProps {
  tasksList: TaskType[]
}
export function Tasks() {
  const { toDoState, createNewTaks } = useContext(TaskContext)
  const [newTask, setNewTask] = useState('')
  const [inputError, setInputError] = useState(false)

  function handleCreateNewTaks(event: FormEvent): void {
    event.preventDefault()
    if (newTask.trim() === '') {
      setInputError(true)
      return
    }
    createNewTaks(newTask)
    setNewTask('')
    setInputError(false)
  }

  function handleTypingNewTask(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  return (
    <>
      <FormContainer>
        <div>
          <input
            placeholder="Add a new task..."
            onChange={handleTypingNewTask}
            value={newTask}
          />
        </div>
        {inputError && (
          <p className="errorMessage">Please fill in the field.</p>
        )}
        <button type="submit" onClick={handleCreateNewTaks}>
          Create
          <PlusCircle size={16} className="plus" />
        </button>
      </FormContainer>
      <BodyTaskContainer>
        <IndicatorTasks tasksList={toDoState} />
        <div>
          {toDoState.length === 0 ? (
            <WithoutTasks />
          ) : (
            toDoState.map((task) => {
              return !task.isDone ? (
                <TasksTodo
                  key={task.id}
                  task={task}
                />
              ) : (
                <TasksDone
                  key={task.id}
                  task={task}
                />
              )
            })
          )}
        </div>
      </BodyTaskContainer>
    </>
  )
}
