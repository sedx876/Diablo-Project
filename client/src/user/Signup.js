import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {signup} from '../auth/index'
import { Form, Button, Row, Col } from 'react-bootstrap'

class Signup extends Component{
  constructor(){
		super()
		this.state = {
			name: '',
			email: '',
			password: '',
			error: '',
			open: false
		}
	}

  clickSubmit = event => {
		event.preventDefault()
		const { name, email, password } = this.state
		const user = {
			name,
			email,
			password
		}
		signup(user)
			.then(data => {
				if(data.error) this.setState({ error: data.error })
				else this.setState({
					error: '',
					name: '',
					email: '',
					password: '',
					open: true
				})
			})
	}

  handleChange = name => event => {
		this.setState({ error: '' })
		this.setState({ [name]: event.target.value })
	}

  signupForm = (name, email, password) => (
    <>
      <Form>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={this.handleChange('name')}
          ></Form.Control>
        </Form.Group>

        <br/>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={this.handleChange('email')}
          ></Form.Control>
          </Form.Group>

          <br/>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={this.handleChange('password')}
          ></Form.Control>
        </Form.Group>

        <br/>

        <Button type='submit' variant='primary' onClick={this.clickSubmit}>
          Register
        </Button>
      </Form>
    </>
  )

  render(){
    const { name, email, password, error, open } = this.state
    return(
      <div>
        <h1>Register</h1>
        <div 
        	className='alert alert-danger'
        	style={{ display: error ? '' : 'none'}}>
          {error}
      	</div>

        <div 
        	className='alert alert-info'
        	style={{ display: open ? '' : 'none'}}>
          NEW ACCOUNT WAS SUCCESSFULLY CREATED!! PLEASE <Link to='/signin'>Log In</Link>
      </div>
      {this.signupForm(name, email, password)}
      </div>
      
    )
  }
}

export default Signup