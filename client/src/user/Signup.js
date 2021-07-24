import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {signup} from '../auth/index'

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



  render(){
    return(
      <div>Hi</div>
    )
  }
}

export default Signup