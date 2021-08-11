import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signout, isAuthenticated } from '../auth'
import D3 from '../images/D3.png'
import '../styles/menu.css'

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: '#6f42c1' };
  else return { color: '#ea39b8' };
}

const Menu = ({history}) => {
  return (
    <div>
    <ul className='navbar navbar-light bg-light' id='navBrand'>
      <li className="nav-item" >
        <Link className="nav-link" id='navBrand' style={isActive(history, '/')} to="/">
					<span><img id='navImg' src={D3} style={{width: '50px', height: '50px'}}/></span>
          D3PlayrPad
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" style={isActive(history, '/users')} to="/users">
          Users Directory
        </Link>
      </li>

    {!isAuthenticated() && (
      <>
      <li className="nav-item">
      <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">
        Log In
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">
        Create Account
      </Link>
    </li>
    </>
    )}

  {isAuthenticated() && 
  <>
    

		<li className="nav-item">
      <Link to={`/post/create`} style={isActive(history, `/post/create`)} className="nav-link">
        Add Post
      </Link>
    </li>

    <li className="nav-item">
      <Link to={`/posts`} style={isActive(history, `/posts`)} className="nav-link">
        Posts
      </Link>
    </li>

    <li className="nav-item">
      <Link to={`/character/create`} style={isActive(history, `/character/create`)} className="nav-link">
        Add Character
      </Link>
    </li>

    <li className="nav-item">
      <Link to={`/characters`} style={isActive(history, `/characters`)} className="nav-link">
        Characters
      </Link>
    </li>

  <li className="nav-item">
    <span className="nav-link">
      <Link to={`/user/${isAuthenticated().user._id}`}
      style={(isActive(history, `/user/${isAuthenticated().user._id}`))}>
      {`${isAuthenticated().user.name} Profile`} 
      </Link>
    </span>
  </li>

	<li className="nav-item">
    <span className="nav-link" 
      style={{ cursor: 'pointer', color: '#fff' }} 
      onClick={() => signout(() => history.push('/'))}>
      Log Out 
    </span>
  </li>
  </>}
  </ul>
  </div>
  )
}

export default withRouter(Menu)
