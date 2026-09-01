import { useState } from 'react'
import { api } from '../services/api'
import { Log } from '../types'

function Logs() {
  const [notes, setNotes] = useState('')

  const handleSave = () => {
    const newLog: Log = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      tasks: [],
      features: [],
      blockers: [],
      notes
    }

    api.saveLog(newLog)
    setNotes('')
    alert('Log salvo!')
  }

  return (
    <section>
      <h1>Registro diário</h1>

      <textarea
        placeholder="O que você fez hoje?"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button onClick={handleSave}>Salvar</button>
    </section>
  )
}

export default Logs