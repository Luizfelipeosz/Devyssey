export type Log = {
  id: string
  date: string
  tasks: string[]
  features: string[]
  blockers: string[]
  notes: string
}

export type Goal = {
  id: string
  title: string
  completed: boolean
}