import { ClipboardText } from '@phosphor-icons/react'
import { WithoutTaskContainer } from './WithoutTasks.style'
export function WithoutTasks() {
  return (
    <WithoutTaskContainer>
      <ClipboardText size={56} opacity={0.5} />
      <strong>You don't have tasks registered yet</strong>
      <p>Create tasks and organize your to-do items</p>
    </WithoutTaskContainer>
  )
}
