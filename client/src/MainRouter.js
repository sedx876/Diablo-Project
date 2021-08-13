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
import Users from './user/Users'
import EditProfile from './user/EditProfile'
import EditCharacter from "./character/EditCharacter"
import NewPost from "./post/NewPost"
import SinglePost from "./post/SinglePost"
import EditPost from "./post/EditPost"
import Admin from "./admin/Admin"
import Posts from './post/Posts'
import NewHire from "./hire/NewHire"
import Hires from './hire/Hires'
import SingleHire from "./hire/SingleHire"
import NameGenerator from './nameGenerator/NameGenerator'
import Links from './core/Links'
import About from './core/About'


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
          <Route path='/posts' component={Posts}/>
          <PrivateRoute exact path='/user/:userId' component={Profile}/>
          <Route exact path="/character/:characterId" component={SingleCharacter} />
          <Route exact path='/users' component={Users}/>
          <PrivateRoute exact path='/user/edit/:userId' component={EditProfile}/>
          <PrivateRoute exact path="/character/edit/:characterId" component={EditCharacter}/>
          <PrivateRoute exact path="/post/create" component={NewPost} />
          <Route exact path="/post/:postId" component={SinglePost} />
          <PrivateRoute exact path="/post/edit/:postId" component={EditPost}/>
          <PrivateRoute exact path="/admin" component={Admin} />
          <PrivateRoute exact path="/hire/create" component={NewHire} />
          <Route path='/hires' component={Hires}/>
          <Route exact path="/hire/:hireId" component={SingleHire} />
          <Route exact path="/namegen" component={NameGenerator} />
          <Route exact path="/links" component={Links} />
          <Route exact path="/about" component={About} />
        </Switch>
      <Footer/>
    </div>
  )
}

export default MainRouter
