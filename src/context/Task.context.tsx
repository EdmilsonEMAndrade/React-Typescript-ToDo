import { createContext, useState, useEffect, ReactNode } from "react";
import { TaskType } from "../interfaces/task.interface";

interface TaskContextType {
    toDoState: TaskType[];
    createNewTaks: (text: string) => void;
    deleteTask: (idToDelete: number) => void;
    changeStatusTask: (idTaskToChange: number) => void;
}

export const TaskContext = createContext<TaskContextType>({} as TaskContextType);

interface TaskContextProviderProps {
    children: ReactNode;
}

export function ToDoContextProvider({ children }: TaskContextProviderProps) {
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

    function createNewTaks(text: string) {
        setToDoState((state) => [
            ...state,
            {
                id: new Date().getTime(),
                isDone: false,
                text,
            },
        ])
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
    return (
        <TaskContext.Provider value={{
            toDoState,
            createNewTaks,
            deleteTask,
            changeStatusTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}