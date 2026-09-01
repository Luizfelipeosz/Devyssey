import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { Goal } from '../types'

function Goals() {
  const [goals, setGoals] = useState<Goal[]>([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    setGoals(api.getGoals())
  }, [])

  const addGoal = () => {
    const newGoal: Goal = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    api.saveGoal(newGoal)
    setGoals(api.getGoals())
    setTitle('')
  }

  const toggle = (id: string) => {
    api.toggleGoal(id)
    setGoals(api.getGoals())
  }

  return (
    <section>
      <h1>Metas</h1>

      <input
        placeholder="Nova meta"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addGoal}>Adicionar</button>

      <ul>
        {goals.map((g) => (
          <li key={g.id} onClick={() => toggle(g.id)}>
            {g.completed ? '✅' : '⬜'} {g.title}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Goals