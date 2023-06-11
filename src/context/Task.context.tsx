import { createContext, useState, useEffect, ReactNode } from "react";
import { TaskType } from "../interfaces/task.interface";

interface TaskContextType {
    toDoState: TaskType[];
    createNewTaks: (text: string) => number;
    deleteTask: (idToDelete: number) => void;
    changeStatusTask: (idTaskToChange: number) => void;
    doingTask: (text: string) => number;
    pauseTask: (text: string, amoutSecondPassed: number) => void;
    finishTask: (text: string, amoutSecondPassed: number) => void;
}

export const TaskContext = createContext<TaskContextType>({} as TaskContextType);

interface TaskContextProviderProps {
    children: ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [toDoState, setToDoState] = useState((): TaskType[] => {
        const storedToDoState = localStorage.getItem('@todo-list:todoState-1.0.0')
        if (storedToDoState) {
            return JSON.parse(storedToDoState)
        }
        return []
    })

    useEffect(() => {
        const toDoStateString = JSON.stringify(toDoState)
        localStorage.setItem('@todo-list:todoState-1.0.0', toDoStateString)
    }, [toDoState])

    function createNewTaks(text: string, isDoing: boolean = false): number {
        setToDoState((state) => [
            ...state,
            {
                id: new Date().getTime(),
                isDone: false,
                isDoing,
                text,
            },
        ])
        return 0
    }

    function deleteTask(idToDelete: number) {
        const tasksWithoutDeletedOne = toDoState.filter((task) => {
            return idToDelete !== task.id
        })
        setToDoState(tasksWithoutDeletedOne)
    }

    function changeStatusTask(idTaskToChange: number) {
        const tasksWithOneStatusChanged = toDoState.map((task) => {
            if (idTaskToChange === task.id) {
                task.isDone = !task.isDone
                task.finishedAt = task.isDone ? new Date().toISOString() : ""
            }
            return task
        })
        setToDoState(tasksWithOneStatusChanged)
    }

    function doingTask(text: string): number {
        if (toDoState.length > 0) {
            const taskDoingIndex = toDoState.findIndex((task) => {
                return task.text == text && !task.isDone
            })
            return taskDoingIndex > -1 ? setStatusDoingGetAmoutSecondPassed(taskDoingIndex) : createNewTaks(text, true)
        } else {
            return createNewTaks(text, true)
        }
    }

    function setStatusDoingGetAmoutSecondPassed(index: number): number {
        setToDoState((state) => {
            state[index].isDoing = true
            return state
        })
        return toDoState[index].amoutSecondPassed || 0;
    }

    function pauseTask(text: string, amoutSecondPassed: number) {
        const tasktoPauseIndex = toDoState.findIndex((task) => {
            return task.text == text && !task.isDone
        })
        setToDoState((state) => {
            state[tasktoPauseIndex].isDoing = false
            state[tasktoPauseIndex].amoutSecondPassed = amoutSecondPassed
            return state
        })
    }

    function finishTask(text: string, amoutSecondPassed: number) {
        const tasktoPauseIndex = toDoState.findIndex((task) => {
            return task.text == text && !task.isDone
        })
        setToDoState((state) => {
            state[tasktoPauseIndex].isDone = true
            state[tasktoPauseIndex].isDoing = false
            state[tasktoPauseIndex].amoutSecondPassed = amoutSecondPassed
            return state
        })
    }
    return (
        <TaskContext.Provider value={{
            toDoState,
            createNewTaks,
            deleteTask,
            changeStatusTask,
            doingTask,
            pauseTask,
            finishTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}