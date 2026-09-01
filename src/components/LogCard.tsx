import type { Log } from '@/types'

type Props = {
  log: Log
}

function LogCard({ log }: Props) {
  const date = new Date(log.date).toLocaleDateString()

  return (
    <div className="card">
      <h3>{date}</h3>

      {log.notes && <p><strong>Notas:</strong> {log.notes}</p>}

      {log.tasks.length > 0 && (
        <div>
          <strong>Tasks:</strong>
          <ul>
            {log.tasks.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      )}

      {log.features.length > 0 && (
        <div>
          <strong>Features:</strong>
          <ul>
            {log.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {log.blockers.length > 0 && (
        <div>
          <strong>Bloqueios:</strong>
          <ul>
            {log.blockers.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default LogCard