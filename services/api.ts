import { Log, Goal } from '../types'

const LOG_KEY = 'devyssey_logs'
const GOAL_KEY = 'devyssey_goals'

export const api = {
  // LOGS
  getLogs: (): Log[] => {
    return JSON.parse(localStorage.getItem(LOG_KEY) || '[]')
  },

  saveLog: (log: Log) => {
    const logs = api.getLogs()
    localStorage.setItem(LOG_KEY, JSON.stringify([log, ...logs]))
  },

  // GOALS
  getGoals: (): Goal[] => {
    return JSON.parse(localStorage.getItem(GOAL_KEY) || '[]')
  },

  saveGoal: (goal: Goal) => {
    const goals = api.getGoals()
    localStorage.setItem(GOAL_KEY, JSON.stringify([goal, ...goals]))
  },

  toggleGoal: (id: string) => {
    const goals = api.getGoals().map((g) =>
      g.id === id ? { ...g, completed: !g.completed } : g
    )
    localStorage.setItem(GOAL_KEY, JSON.stringify(goals))
  }
}