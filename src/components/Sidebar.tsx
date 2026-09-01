import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/logs">Logs</Link></li>
          <li><Link to="/goals">Goals</Link></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar