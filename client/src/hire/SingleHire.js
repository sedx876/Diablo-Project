import React, { Component } from 'react'
import { singleHire, remove, like, unlike } from './apiHire'
import DefaultPost from "../images/default.png"
import { Link, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../auth'
import Comment from './Comment'


class SingleHire extends Component{
  state = {
    hire: '',
    redirectToHome: false,
    redirectToSignin: false,
    like: false,
    likes: 0,
    comments: []
  }

  checkLike = likes => {
    const userId = isAuthenticated() && isAuthenticated().user._id
    let match = likes.indexOf(userId) !== -1
    return match
  }

  componentDidMount = () => {
    const hireId = this.props.match.params.hireId
    singleHire(hireId).then(data => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({
        hire: data,
        likes: data.likes.length,
        like: this.checkLike(data.likes),
        comments: data.comments
      })
    }
  })
  }

  updateComments = comments => {
    this.setState({ comments })
  }

  likeToggle = () => {
    if (!isAuthenticated()) {
      this.setState({ redirectToSignin: true })
      return false
    }
    let callApi = this.state.like ? unlike : like
    const userId = isAuthenticated().user._id
    const hireId = this.state.hire._id
    const token = isAuthenticated().token

  callApi(userId, token, hireId).then(data => {
    if (data.error) {
      console.log(data.error)
    } else {
				this.setState({
          like: !this.state.like,
          likes: data.likes.length
    })
    }
    })
  }

  deleteHire = () => {
    const hireId = this.props.match.params.hireId
    const token = isAuthenticated().token
    remove(hireId, token).then(data => {
      if (data.error) {
        console.log(data.error)
      } else {
          this.setState({ redirectToHome: true })
      }
    })
  }

  deleteConfirmed = () => {
    let answer = window.confirm('Are you sure you want to delete your post?')
    if (answer) {
      this.deleteHire()
    }
  }

  renderHire = hire => {
    const posterId = hire.postedBy ? `/user/${hire.postedBy._id}` : ''
    const posterName = hire.postedBy ? hire.postedBy.name : ' Unknown'
    const { like, likes } = this.state
  return (
    <>
    <div className="card-body">
      <img
        src={`${process.env.REACT_APP_API_URL}/hire/photo/${hire._id}`}
        alt={hire.title}
        onError={i => (i.target.src = `${DefaultPost}`)}
        className="img-thunbnail mb-3"
        style={{
          height: '50%',
          width: '50%',
          objectFit: 'cover'
        }}
      />
        {like ? (
          <h3 onClick={this.likeToggle}>
            {/* <i
              className="fa fa-thumbs-up text-success bg-light"
              style={{ padding: '10px', borderRadius: '50%' }}
          /> */}
					{' '}
          {likes} Like
          </h3>
        ) : (
        <h3 onClick={this.likeToggle}>
          <i
            className="fa fa-thumbs-up text-warning bg-light"
            style={{ padding: '10px', borderRadius: '50%' }}
          />
					{' '}
          {likes} Like
        </h3>
        )}
        <p className="card border-light mb-3" style={{maxWidth: "15rem"}}>
          Built by <Link to={`${posterId}`}>{posterName} </Link>
          on {new Date(hire.created).toDateString()}
        </p> 
        <div class="card border-light mb-3" style={{maxWidth: "50rem"}}>
        <div class="card-title text-center">{hire.title} for {hire.hireKlass}</div>
        <div class="card-body">
        <h5 class="card-title">Helm: {hire.helm}</h5>
        <h5 class="card-title">Shoulders: {hire.shoulders}</h5>
        <h5 class="card-title">Gloves: {hire.gloves}</h5>
        <h5 class="card-title">Chest Armor: {hire.chestArmor}</h5>
        <h5 class="card-title">Belt: {hire.belt}</h5>
        <h5 class="card-title">Pants: {hire.pants}</h5>
        <h5 class="card-title">Boots: {hire.boots}</h5>
        <h5 class="card-title">Bracers: {hire.bracers}</h5>
        <h5 class="card-title">Amulet: {hire.amulet}</h5>
        <h5 class="card-title">Ring 1: {hire.ring1}</h5>
        <h5 class="card-title">Ring 2: {hire.ring2}</h5>
        <h5 class="card-title">Weapon: {hire.weapon}</h5>
        <h5 class="card-title">Offhand: {hire.offhand}</h5>
        <h5 class="card-title">Gem Notes: {hire.gemNotes}</h5>
        <br/>
        <h5 class="card-title">Hire Token: {hire.hireToken}</h5>
        <br/>
        <h5 class="card-title">Skill 1: {hire.skill1}</h5>
        <br/>
        <h5 class="card-title">Skill 2: {hire.skill2}</h5>
        <br/>
        <h5 class="card-title">Skill 3: {hire.skill3}</h5>
        <br/>
        <h5 class="card-title">Skill 4: {hire.skill4}</h5>
        <br/>
        <h5 class="card-title">General Build Notes: {hire.generalBuildNotes}</h5>
        </div>
        </div>
        <br />
        
        <div className="d-inline-block">
          <Link to={`/`} className="btn btn-raised btn-primary btn-sm mr-5">
            Back to Hires
          </Link>
          {isAuthenticated().user && isAuthenticated().user._id === hire.postedBy._id && (
            <>
              <Link to={`/hire/edit/${hire._id}`} className="btn btn-raised btn-warning btn-sm mr-5">
                Update Hire
              </Link>
              <button onClick={this.deleteConfirmed} className="btn btn-raised btn-danger">
                Delete Hire
              </button>
            </>
          )}
          <div>
            {isAuthenticated().user && isAuthenticated().user.role === 'admin' && (
              <div class="card mt-5">
                <div className="card-body">
                  <h5 className="card-title">Admin</h5>
                  <p className="mb-2 text-danger">Edit/Delete as an Admin</p>
                  <Link
                    to={`/hire/edit/${hire._id}`}
                    className="btn btn-raised btn-warning btn-sm mr-5"
                  >
                    Update Hire
                  </Link>
                    <button onClick={this.deleteConfirmed} className="btn btn-raised btn-danger">
                      Delete Hire
                    </button>
              </div>
          </div>
          )}
        </div>
      </div>
    </div>
    </>
		)
  }


  render(){
    const { hire, redirectToHome, redirectToSignin, comments } = this.state
    if (redirectToHome) {
      return <Redirect to={`/`} />
    } else if (redirectToSignin) {
      return <Redirect to={`/signin`} />
    }
    return (
      <div className="container">
        <h2 className="display-2 mt-5 mb-5">{hire.title}</h2>
          {!hire ? (
        <div className="jumbotron text-center">
          <h2>Loading...</h2>
        </div>
        ) : (
          this.renderHire(hire)
        )}
        <Comment hireId={hire._id} comments={comments.reverse()} updateComments={this.updateComments} />
      </div>
    )
  }
}

export default SingleHire