import { useContext } from "react"
import { getExpendTime } from "../../../timer/Timer.utils"
import { TaskType } from "../../../../interfaces/task.interface"
import { TaskContext } from "../../../../context/Task.context"
import { Trash } from '@phosphor-icons/react'

interface TrashProps {
    task: TaskType
}

export function TrashComponente({ task }: TrashProps) {
    const { deleteTask } = useContext(TaskContext)
    return (
        <div>
            {task.amoutSecondPassed && <span>{getExpendTime(task.amoutSecondPassed)}</span>}
            <Trash
                onClick={() => !task.isDoing && deleteTask(task.id)}
                className="trash"
                size={24}
            />
        </div>
    )
}