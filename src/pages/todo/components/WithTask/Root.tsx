import { ReactNode } from "react";
import { TaskType } from "../../../../interfaces/task.interface"
import { StyledWithTaskContainer } from "./WithTasks.styles"

interface RootProps {
    children: ReactNode,
    task: TaskType
}

export function Root({ children, task }: RootProps) {
    return (
        <StyledWithTaskContainer disabled={task.isDoing}>
            {children}
        </StyledWithTaskContainer>
    );
}