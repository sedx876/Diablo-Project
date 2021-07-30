import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom"
import { signin, authenticate } from "../auth"
import { Form, Button, Row, Col } from 'react-bootstrap'

class Signin extends Component{
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      error: '',
      redirectToReferer: false,
      loading: false
    }
  }

  clickSubmit = event => {
    event.preventDefault()
    this.setState({loading: true})
    const { email, password } = this.state
    const user = {
      email,
      password
    }
    console.table(user)
    signin(user)
    .then(data => {
      if(data.error) {
        this.setState({ error: data.error, loading: false })
      }else{ 
        authenticate(data, () => {
          this.setState({ redirectToReferer: true })
        })
      }
    })
  }

  handleChange = name => event => {
    this.setState({ error: "" })
    this.setState({ [name]: event.target.value })
  }

  signinForm = (email, password) => (
    <>
      <Form>

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
        <br/>
      </Form>
      <br/>
    </>
  )

  render(){
    const { email, password, error, redirectToReferer, loading } = this.state
    if (redirectToReferer) {
      return <Redirect to="/" />;
    }

    return(
      <div className='container'>
        <h2 className='mt-5 mb-5'>Log In</h2>
      <div 
        className='alert alert-danger'
        style={{ display: error ? '' : 'none'}}>
          {error}
      </div>
      {loading ? (
      <div className='jumbotron text-center'><h2>Loading...</h2></div>
      ):(
        ''
      )}
        {this.signinForm(email, password)}
        <p>
          <Link to="/forgot-password" className="text-danger">
            {" "}
            Forgot Password
          </Link>
        </p>
      </div>
    )
  }

}

export default Signin