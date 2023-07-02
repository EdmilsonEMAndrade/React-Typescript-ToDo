import { CheckCircle, Circle, PlusCircle } from '@phosphor-icons/react'
import { FormEvent, useState, useContext } from 'react'

import { WithoutTasks } from './components/withoutTasks/WithoutTasks'

import { FormContainer, BodyTaskContainer } from './Tasks.styles'

import { TaskType } from '../../interfaces/task.interface'
import { IndicatorTasks } from './components/indicatorTasks/IndicatorTasks'
import { TaskContext } from '../../context/Task.context'
import { WithTasks } from './components/WithTask'

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
                <WithTasks.Root task={task} key={task.id}>
                  <WithTasks.Icon task={task} icon={Circle} classeName='circle' />
                  <p>{task.text}</p>
                  <WithTasks.Trash task={task} />
                </WithTasks.Root>
              ) : (
                <WithTasks.Root task={task} key={task.id}>
                  <WithTasks.Icon task={task} icon={CheckCircle} classeName='checkCircle' />
                  <del>{task.text}</del>
                  <WithTasks.Trash task={task} />
                </WithTasks.Root>
              )
            })
          )}
        </div>
      </BodyTaskContainer>
    </>
  )
}
