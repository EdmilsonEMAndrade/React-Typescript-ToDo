import { Pause, Play, Stop } from "@phosphor-icons/react";
import { ButtonContainer, CicleAtiveDivButtons, CicleDivButtons, CountupContainer, CountupSeparator, FormContainer, InputTask, TimerContainer } from "./Timer.styles";
import { useState, FormEvent, useEffect, useContext } from "react";
import { TaskContext } from "../../context/Task.context";
import { cleanLocalStorageAtiveCycle, getTimePassed, setLocalStorageAtiveCycle } from "./Timer.utils";


export function Timer() {
  const { toDoState, doingTask, pauseTask, finishTask } = useContext(TaskContext);
  const [countInit, setCountInit] = useState(() => {
    const storedCountInitState = localStorage.getItem('@ativeCycle-task:countInit-1.0.0')
    return storedCountInitState ? JSON.parse(storedCountInitState) : 0
  });
  const [isAtiveCycle, setIsAtiveCycle] = useState(() => {
    const storedCountInitState = localStorage.getItem('@ativeCycle-task:isAtiveCycle-1.0.0')
    return storedCountInitState ? JSON.parse(storedCountInitState) : false
  });
  const [amoutSecondPassed, setAmoutSecondPassed] = useState(() => {
    return isAtiveCycle ? Math.floor(((new Date().getTime() - countInit) / 1000)) : 0;
  });
  const [taksToDo, setTaksToDo] = useState(() => {
    const storedTaksToDoState = localStorage.getItem('@ativeCycle-task:taksToDo-1.0.0')
    return storedTaksToDoState ? JSON.parse(storedTaksToDoState) as string : "";
  });

  function handleConuntup(event: FormEvent): void {
    event.preventDefault()
    setIsAtiveCycle(true);
    const secondsPassed = doingTask(taksToDo)
    setAmoutSecondPassed(secondsPassed);
    const countInitState = new Date().getTime() - (secondsPassed * 1000);
    setCountInit(countInitState);
    setLocalStorageAtiveCycle({ isAtiveCycle: true, countInit: countInitState, taksToDo })
  }

  function handleConuntPause(event: FormEvent): void {
    event.preventDefault()
    setIsAtiveCycle(false);
    setCountInit(0);
    setAmoutSecondPassed(0);
    cleanLocalStorageAtiveCycle()
    pauseTask(taksToDo, amoutSecondPassed)
  }

  function handleCountFinish(event: FormEvent): void {
    event.preventDefault()
    setIsAtiveCycle(false);
    setCountInit(0);
    setAmoutSecondPassed(0);
    cleanLocalStorageAtiveCycle()
    finishTask(taksToDo, amoutSecondPassed)
  }

  useEffect(() => {
    let interval: number;
    if (isAtiveCycle) {
      interval = setInterval(() => {
        setAmoutSecondPassed(Math.floor(((new Date().getTime() - countInit) / 1000)));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isAtiveCycle]);

  function handleTypingNewTask(event: React.ChangeEvent<HTMLInputElement>) {
    setTaksToDo(event.target.value)
  }

  const { days, hours, minutes, seconds, daysAmount, hoursAmount } = getTimePassed(amoutSecondPassed);

  return (
    <TimerContainer>
      <form action="">
        <FormContainer>

          <label htmlFor="task">I will work on</label>
          <InputTask
            type="text"
            placeholder="select or crate a task"
            id="task"
            list="taksToDo"
            onChange={handleTypingNewTask}
            value={taksToDo}
            disabled={isAtiveCycle}
            autoComplete="none"
          />

          <datalist id="taksToDo">
            {toDoState.map((task) => {
              return task.isDone ? null : <option key={task.id} value={task.text} />
            })}
          </datalist>

        </FormContainer>

        <CountupContainer>
          {daysAmount > 0 ? days.split("").map((day) => <span key={day}>{day}</span>) : null}
          {daysAmount > 0 && <CountupSeparator isAtiveCycle={false}>:</CountupSeparator>}
          {hoursAmount > 0 || daysAmount > 0 ? hours.split("").map((hour) => <span key={hour}>{hour}</span>) : null}
          {hoursAmount > 0 || daysAmount > 0 ? <CountupSeparator isAtiveCycle={false}>:</CountupSeparator> : null}
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <CountupSeparator isAtiveCycle={isAtiveCycle}>:</CountupSeparator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountupContainer>
        <CicleDivButtons>
          <div>
            <ButtonContainer color="green" isAtiveCycle={!isAtiveCycle} type="submit" onClick={handleConuntup} disabled={isAtiveCycle || taksToDo.length == 0}>
              <Play size={24} />
              Play
            </ButtonContainer>
          </div>
          <CicleAtiveDivButtons>
            <ButtonContainer color="yellow" isAtiveCycle={isAtiveCycle} type="submit" onClick={handleConuntPause}>
              <Pause size={24} />
              Pause
            </ButtonContainer>
            <ButtonContainer color="red" isAtiveCycle={isAtiveCycle} type="submit" onClick={handleCountFinish}>
              <Stop size={24} />
              Fineshed
            </ButtonContainer>
          </CicleAtiveDivButtons>
        </CicleDivButtons>
      </form>
    </TimerContainer >
  )
}
