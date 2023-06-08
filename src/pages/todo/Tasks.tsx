import { PlusCircle } from "@phosphor-icons/react";
import { FormEvent, useEffect, useState } from "react";

import { TasksTodo } from "./components/withTasks/TasksToDo";
import { TasksDone } from "./components/withTasks/TasksDone";
import { WithoutTasks } from "./components/withoutTasks/WithoutTasks";

import { FormContainer, BodyTaskContainer } from "./Tasks.styles";

import { ToDoType } from "../../interfaces/todo.interface";
import { IndicatorTasks } from "./components/indicatorTasks/IndicatorTasks";

export interface TasksProps {
    listaToDos: ToDoType[];
}
export function Tasks() {
    const [toDoState, setToDoState] = useState(():ToDoType[] => {
            const storedToDoState = localStorage.getItem("@todo-list:todoState-1.0.0");
            if (storedToDoState) {
                return JSON.parse(storedToDoState);
            }
            return [];
        }
    );
    const [newTask, setNewTask] = useState("");
    const [inputError, setInputError] = useState(false);

    useEffect(() => {
        const toDoStateString = JSON.stringify(toDoState);
        localStorage.setItem("@todo-list:todoState-1.0.0", toDoStateString);
    }, [toDoState]);

    function handleCreateNewTaks(event: FormEvent): void {
        event.preventDefault()
        if (newTask.trim() === "") {
            setInputError(true);
            return
        }
        setToDoState((state) => [...state, {
            id: new Date().getTime(),
            isDone: false,
            text: newTask
        }])
        setNewTask("");
        setInputError(false);
    }

    function handleTypingNewTask(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
    }

    // function handleNewTaskInvalid(event: any){
    //     event?.target.setCustomValidity("Fill in the field with a task")
    // }

    function handleDeleteTask(idToDelete: number) {
        const tasksWithoutDeletedOne = toDoState.filter(task => {
            return idToDelete !== task.id;
        })
        setToDoState(tasksWithoutDeletedOne);
    }
    function handleChangeStatusTask(idTaskToChange: number) {
        const tasksWithOneStatusChanged = toDoState.map(task => {
            if (idTaskToChange === task.id) {
                task.isDone = !task.isDone;
            }
            return task;
        })
        setToDoState(tasksWithOneStatusChanged);
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
                {inputError && <p className="errorMessage">Please fill in the field.</p>}
                <button type="submit" onClick={handleCreateNewTaks}>Create<PlusCircle size={16} className="plus" /></button>
            </FormContainer>
            <BodyTaskContainer>
                <IndicatorTasks listaToDos={toDoState} />
                <div>
                    {
                        toDoState.length === 0 ?

                            <WithoutTasks />

                            :
                            toDoState.map((todo) => {
                                return !todo.isDone ?

                                    <TasksTodo
                                        key={todo.id}
                                        todo={todo}
                                        onChangeStatusTask={handleChangeStatusTask}
                                        onDeleteTask={handleDeleteTask}
                                    />

                                    :

                                    <TasksDone
                                        key={todo.id}
                                        todo={todo}
                                        onChangeStatusTask={handleChangeStatusTask}
                                        onDeleteTask={handleDeleteTask}
                                    />
                            })
                    }

                </div>
            </BodyTaskContainer>
        </>
    )
}