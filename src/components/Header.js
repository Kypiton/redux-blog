const { Link } = require('react-router-dom');

export default function Header() {
  return (
    <header>
      <h1>
        <Link to='/'>Redux Blog</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='post'>Post</Link>
          </li>
          <li>
            <Link to='user'>Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
