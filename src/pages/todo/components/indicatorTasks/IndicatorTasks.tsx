import { TasksProps } from "../../Tasks";
import { IndicatorTasksContainer } from "./IndicatorTasks.styles"

export function IndicatorTasks({listaToDos} : TasksProps) {
    return (
        <IndicatorTasksContainer>
                <div>
                    <p className="tasksCreated">Tasks created</p>
                    <span className="highlightedNumber">{listaToDos.length}</span>
                </div>
                <div>
                    <p className="tasksDone">Done</p>
                    <span className="highlightedNumber">{listaToDos.reduce((accumulator, currentValue) => {
                        if (currentValue.isDone) {
                            accumulator += 1;
                        }
                        return accumulator;
                    }, 0)} out of {listaToDos.length}
                    </span>
                </div>
        </IndicatorTasksContainer>
    )
}