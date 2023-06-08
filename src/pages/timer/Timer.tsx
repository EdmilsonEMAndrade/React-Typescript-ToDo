import { Play } from "@phosphor-icons/react";
import { ButtonContainer, CountdownContainer, CountdownSeparator, FormContainer, InputMinutesAmount, InputTask, TimerContainer } from "./Timer.styles";

export function Timer() {
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

          <label htmlFor="minutesAmount">during</label>
          <InputMinutesAmount
            type="number"
            placeholder="00"
            id="minutesAmount"
            min="05"
            max="60"
            step="5"
          />
          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <CountdownSeparator>:</CountdownSeparator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <ButtonContainer type="submit">
          <Play size={24} />
          Play
        </ButtonContainer>
      </form>
    </TimerContainer>
  )
}
