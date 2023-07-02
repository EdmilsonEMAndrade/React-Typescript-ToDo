import { ElementType, useContext } from "react"
import { TaskContext } from "../../../../context/Task.context"
import { TaskType } from "../../../../interfaces/task.interface"

interface LeftIcon {
    task: TaskType,
    icon: ElementType,
    classeName: string
}
export function LeftIcon({ task, icon: Icon, classeName }: LeftIcon) {
    const { changeStatusTask } = useContext(TaskContext)
    return (
        <Icon
            className={classeName}
            size={24}
            onClick={() => !task.isDoing && changeStatusTask(task.id)}
        />
    )
}