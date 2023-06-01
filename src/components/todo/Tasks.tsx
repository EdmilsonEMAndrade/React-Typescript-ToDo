import { PlusCircle, ClipboardText } from "@phosphor-icons/react"
import { FormContainer, BodyTaskContainer } from "./Tasks.styles"
import { ToDoType } from "../../interface/todo.interface"
import { FormEvent, useState } from "react";
import { TasksTodo } from "./TasksToDo";
import { TasksDone } from "./TasksDone";

interface TasksProps {
    listaToDos: ToDoType[];
}
export function Tasks({listaToDos} : TasksProps) {
    const[toDoState, setToDoState] = useState(listaToDos);
    const[newTask, setNewTask] = useState("");
    const [inputError, setInputError] = useState(false);


    function handleCreateNewTaks(event: FormEvent): void{
        event.preventDefault()
        if(newTask.trim() === ""){
            console.log("error")
            setInputError(true);
            return
        }
        setToDoState([...toDoState, {
            id: toDoState.length > 0 ? toDoState[toDoState.length -1].id + 1: 1,
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
                <header>
                    <div>
                        <div>
                            <p className="tasksCreated">Tasks created</p>
                            <span className="highlightedNumber">{toDoState.length}</span>
                        </div>
                        <div>
                            <p className="tasksDone">Done</p>
                            <span className="highlightedNumber">{toDoState.reduce((accumulator, currentValue) => {
                                    if(currentValue.isDone){
                                        accumulator +=1;
                                    }
                                    return accumulator;
                                },0)} out of {toDoState.length}
                            </span>
                        </div>
                    </div>
                </header>
                <body>
                    {
                        toDoState.length === 0 ? 
                  
                                <div className="withoutTasks">
                                    <ClipboardText size={56} opacity={0.5}/>
                                    <strong>You don't have tasks registered yet</strong>
                                    <p>Create tasks and organize your to-do items</p>
                                </div>
                            
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