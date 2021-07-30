import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './core/Footer'
import Menu from './core/Menu'
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'


const MainRouter = () => {
  return (
    <div>
      <Menu/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/signin' component={Signin}/>
        </Switch>
      <Footer/>
    </div>
  )
}

export default MainRouter
