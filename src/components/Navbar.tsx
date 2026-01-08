import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#1f2937', color: 'white', padding: '1rem' }}>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/page2" style={{ color: 'white', textDecoration: 'none' }}>
            Page 2
          </Link>
        </li>
        <li>
          <Link to="/page3" style={{ color: 'white', textDecoration: 'none' }}>
            Page 3
          </Link>
        </li>
      </ul>
    </nav>
  )
}
