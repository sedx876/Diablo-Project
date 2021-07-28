import React from 'react'
import '../styles/home.css'
import { Card } from 'react-bootstrap'
import D3 from '../images/D3.png'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <Card>
        <Card.Body>
          <Card.Text className='text-center'>
            <h1 className='text-light'>Welcome DiabloPlayrPad</h1>
            <p 
              className='text-secondary'>
              Keep track of all your Diablo 3 character builds and 
              other in-game essentials!
            </p>
            <h4 className='text-warning'>
              LogIn
              <br/> 
              or 
              <br/>
              <Link to='/signup'>
                Register
              </Link>
            </h4>
          </Card.Text>
        </Card.Body>
        <Card.Img 
          variant="bottom" 
          id='d3img' 
          src={D3} 
        />
      </Card>
    </div>
  )
}

export default Home
