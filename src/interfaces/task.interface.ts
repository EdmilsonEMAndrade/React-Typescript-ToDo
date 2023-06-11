export interface TaskType {
  id: number
  text: string
  isDone: boolean
  isDoing: boolean
  finishedAt?: string
  amoutSecondPassed?: number
}
