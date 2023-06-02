import { PlusCircle } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

import { TasksTodo } from "./components/withTasks/TasksToDo";
import { TasksDone } from "./components/withTasks/TasksDone";
import { WithoutTasks } from "./components/withoutTasks/WithoutTasks";

import { FormContainer, BodyTaskContainer } from "./Tasks.styles";

import { ToDoType } from "../../interfaces/todo.interface";
import { IndicatorTasks } from "./components/indicatorTasks/indicatorTasks";

export interface TasksProps {
    listaToDos: ToDoType[];
}
export function Tasks({listaToDos} : TasksProps) {
    const[toDoState, setToDoState] = useState(listaToDos);
    const[newTask, setNewTask] = useState("");
    const [inputError, setInputError] = useState(false);


    function handleCreateNewTaks(event: FormEvent): void{
        event.preventDefault()
        if(newTask.trim() === ""){
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

    function handleTypingNewTask(event: React.ChangeEvent<HTMLInputElement>){
        setNewTask(event.target.value)
    }

    // function handleNewTaskInvalid(event: any){
    //     event?.target.setCustomValidity("Fill in the field with a task")
    // }

    function handleDeleteTask(idToDelete:number){
        const tasksWithoutDeletedOne = toDoState.filter(task =>{
            return idToDelete !== task.id;
        })
        setToDoState(tasksWithoutDeletedOne);
    }
    function handleChangeStatusTask(idTaskToChange: number){
        const tasksWithOneStatusChanged = toDoState.map(task =>{
            if(idTaskToChange === task.id){
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
                <IndicatorTasks listaToDos={toDoState}/>
                <body>
                    {
                        toDoState.length === 0 ? 
                  
                                <WithoutTasks/>
                            
                        :
                            toDoState.map((todo)=>{
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
                    
                </body>
            </BodyTaskContainer>
        </>
    )
}