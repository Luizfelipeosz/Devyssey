import { api } from '../services/api'

function Dashboard() {
  const logs = api.getLogs()
  const goals = api.getGoals()

  return (
    <section>
      <h1>Dashboard</h1>

      <div className="grid">
        <div className="card">
          <h3>Logs</h3>
          <p>{logs.length}</p>
        </div>

        <div className="card">
          <h3>Metas</h3>
          <p>{goals.length}</p>
        </div>
      </div>
    </section>
  )
}

export default Dashboard