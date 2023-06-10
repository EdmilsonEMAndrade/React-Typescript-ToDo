export interface TaskType {
  id: number
  text: string
  isDone: boolean
  finishedAt?: string
  secondsToFinished?: number
}
