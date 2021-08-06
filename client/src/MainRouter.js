import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './auth/PrivateRoute'
import Footer from './core/Footer'
import Menu from './core/Menu'
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'
import NewCharacter from "./character/NewCharacter"
import Characters from './character/Characters'
import Profile from './user/Profile'
import SingleCharacter from "./character/SingleCharacter"


const MainRouter = () => {
  return (
    <div>
      <Menu/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/signin' component={Signin}/>
          <PrivateRoute exact path="/character/create" component={NewCharacter} />
          <Route path='/characters' component={Characters}/>
          <PrivateRoute exact path='/user/:userId' component={Profile}/>
          <Route exact path="/character/:characterId" component={SingleCharacter} />
        </Switch>
      <Footer/>
    </div>
  )
}

export default MainRouter
