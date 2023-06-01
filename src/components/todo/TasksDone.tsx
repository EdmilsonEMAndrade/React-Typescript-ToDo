import { CheckCircle, Trash } from "@phosphor-icons/react";
import { ToDoType } from "../../interface/todo.interface";

interface TasksDoneProps {
    todo: ToDoType,
    onDeleteTask: (id: number)=>void,
    onChangeStatusTask:(id: number)=>void
}

export function TasksDone({todo, onDeleteTask, onChangeStatusTask}: TasksDoneProps){

    function handleChangeStatusTask(idToChangeStatus: number){
        onChangeStatusTask(idToChangeStatus)
    }

    function handleDeleteTask(idToDelete: number){
        onDeleteTask(idToDelete)
    }
    return(
        <div className="withTasks">
            <CheckCircle className="checkCircle" size={24} weight="fill" onClick={() => handleChangeStatusTask(todo.id)}/>
            <del>{todo.text}</del>
            <Trash onClick={() => handleDeleteTask(todo.id)} className="trash" size={24}/>
        </div>
    )
}