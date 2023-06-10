import { Pause, Play, Stop } from "@phosphor-icons/react";
import { ButtonContainer, CicleAtiveDivButtons, CicleDivButtons, CountupContainer, CountupSeparator, FormContainer, InputTask, TimerContainer } from "./Timer.styles";
import { useState, FormEvent, useEffect } from "react";

export function Timer() {
  const [countInit, setCountInit] = useState(0);
  const [isAtiveCycle, setIsAtiveCycle] = useState(false);
  const [amoutSecondPassed, setAmoutSecondPassed] = useState(0);

  function handleConuntup(event: FormEvent): void {
    event.preventDefault()
    setIsAtiveCycle(true);
    setCountInit(new Date().getTime());
  }

  useEffect(() => {
    let interval: number;
    if (isAtiveCycle) {
      interval = setInterval(() => {
        setAmoutSecondPassed(Math.floor(((new Date().getTime() - countInit) / 1000)) + 86395);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isAtiveCycle]);

  const daysAmount = Math.floor(amoutSecondPassed / 86400);
  const hoursAmount = Math.floor((amoutSecondPassed / 3600) - (daysAmount * 24));
  const minutesAmount = Math.floor((amoutSecondPassed / 60) - (hoursAmount * 60) - (daysAmount * 24 * 60));
  const secondsAmount = amoutSecondPassed % 60;

  const days = String(daysAmount);
  const hours = daysAmount > 0 ? String(hoursAmount).padStart(2, "0") : String(hoursAmount);
  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");


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
          />

          <datalist id="taksToDo">
            <option value="task1" />
            <option value="task2" />
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
            <ButtonContainer color="green" isAtiveCycle={!isAtiveCycle} type="submit" onClick={handleConuntup} disabled={isAtiveCycle}>
              <Play size={24} />
              Play
            </ButtonContainer>
          </div>
          <CicleAtiveDivButtons>
            <ButtonContainer color="yellow" isAtiveCycle={isAtiveCycle} type="submit" onClick={handleConuntup}>
              <Pause size={24} />
              Pause
            </ButtonContainer>
            <ButtonContainer color="red" isAtiveCycle={isAtiveCycle} type="submit" onClick={handleConuntup}>
              <Stop size={24} />
              Fineshed
            </ButtonContainer>
          </CicleAtiveDivButtons>
        </CicleDivButtons>
      </form>
    </TimerContainer >
  )
}
