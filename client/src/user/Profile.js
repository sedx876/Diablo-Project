import React, { Component } from "react"
import { isAuthenticated } from "../auth"
import { Redirect, Link } from "react-router-dom"
import { read } from "./apiUser"
import DefaultProfile from "../images/avatar.png"
import DeleteUser from "./DeleteUser"
import FollowProfileButton from "./FollowProfileButton"
import ProfileTabs from "./ProfileTabs"
import { listByUser } from "../character/apiCharacter"
import { listByUserP } from "../post/apiPost"


class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: { following: [], followers: [] },
      redirectToSignin: false,
      following: false,
      error: "",
      characters: [],
      posts: []
    }
  }

 // check follow
  checkFollow = user => {
    const jwt = isAuthenticated()
    const match = user.followers.find(follower => {
    // one id has many other ids (followers) and vice versa
    return follower._id === jwt.user._id
  })
    return match
  }

  clickFollowButton = callApi => {
    const userId = isAuthenticated().user._id
    const token = isAuthenticated().token
    callApi(userId, token, this.state.user._id).then(data => {
      if (data.error) {
        this.setState({ error: data.error })
      } else {
        this.setState({ user: data, following: !this.state.following })
    }
  })
  }

  init = userId => {
    const token = isAuthenticated().token
    read(userId, token).then(data => {
    if (data.error) {
      this.setState({ redirectToSignin: true })
    } else {
      let following = this.checkFollow(data)
      this.setState({ user: data, following })
      this.loadCharacters(data._id)
      this.loadPosts(data._id)
    }
  })
  }

  loadCharacters = userId => {
    const token = isAuthenticated().token
    listByUser(userId, token).then(data => {
    if (data.error) {
      console.log(data.error)
    } else {
      this.setState({ characters: data })
    }
  })
  }

  loadPosts = userId => {
    const token = isAuthenticated().token
    listByUserP(userId, token).then(data => {
    if (data.error) {
      console.log(data.error)
    } else {
      this.setState({ posts: data })
    }
  })
  }

  componentDidMount() {
    const userId = this.props.match.params.userId
    this.init(userId)
  }

  UNSAFE_componentWillReceiveProps(props) {
    const userId = props.match.params.userId
    this.init(userId)
  }

  render() {
    const { redirectToSignin, user, characters, posts } = this.state
    if (redirectToSignin) return <Redirect to="/signin" />
    const photoUrl = user._id
      ? `${process.env.REACT_APP_API_URL}/user/photo/${
          user._id
        }?${new Date().getTime()}`
      : DefaultProfile
    return (
      <div className='container'>
        <h2 className='mt-5 mb-5 text-primary text-center'>
          <strong>D3PlayrPad {user.name} Profile</strong>
        </h2>
        <div className='row'>
        <div className='col-md-6'>
        <div className='card bg-light mb-5 border-primary p-2 text-primary'
          style={{width: '18rem'}}>
        <p className='text-center'><strong>Hello</strong> {user.name}</p>
        <img
          style={{ height: "250px", width: "auto" }}
          className="img-thumbnail"
          src={photoUrl}
          onError={i => (i.target.src = `${DefaultProfile}`)}
          alt={user.name}
        />
        <p className='pt-3'><strong>Email:</strong> {user.email}</p>
        <p>
          <strong>Joined: </strong> 
          {`${new Date(user.created).toDateString()}`}
        </p>
        </div>
        </div>

        {isAuthenticated().user &&
            isAuthenticated().user._id === user._id ? (
              <div className="d-inline-block">
                <Link
                  className="btn btn-raised btn-info mr-4"
                  to={`/character/create`}
                >
                  Create Character
                </Link>

                <Link
                  className="btn btn-raised btn-info mr-4"
                  to={`/post/create`}
                >
                  Create Post
                </Link>

                <Link
                  className="btn btn-raised btn-success mr-4"
                  to={`/user/edit/${user._id}`}
                >
                  Edit Profile
                </Link>

                <DeleteUser userId={user._id} />
                <br/>
                <div className='row'>
                <div className='col'>
                <p className="card lead text-center bg-light mt-5 mb-5  mr-4 border-primary p-2 text-primary"
                style={{width: '30rem'}}>
                <h5 style={{textDecoration: 'underline'}}><strong>About Me:</strong></h5>
                <strong>{user.about}</strong></p>
                </div>
                </div>

                
              </div>

              
            ) : (
              <FollowProfileButton
                following={this.state.following}
                onButtonClick={this.clickFollowButton}
              />
            )}

            
        <div className='col-md-6'>
          {isAuthenticated().user && 
          isAuthenticated().user.role === "admin" && (
            <div class="card mt-5">
              <div className="card-body">
                <h5 className="card-title">Admin</h5>
                <p className="mb-2 text-danger">
                  Edit/Delete as an Admin
                </p>
                <Link
                  className="btn btn-raised btn-success mr-5"
                  to={`/user/edit/${user._id}`}
                >
                  Edit Profile
                </Link>
                <DeleteUser />
              </div>
            </div>
            )}
        </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card lead text-center bg-light mb-5 border-primary p-2 text-primary'>
            <ProfileTabs
              followers={user.followers}
              following={user.following}
              characters={characters}
              posts={posts}
            />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Profile