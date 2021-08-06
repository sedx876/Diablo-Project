import React, { Component } from 'react'
import { singleCharacter, remove, like, unlike } from './apiCharacter'
import DefaultPost from "../images/default.png"
import { Link, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../auth'
import Comment from './Comment'

class SingleCharacter extends Component {
  state = {
    character: '',
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
    const characterId = this.props.match.params.characterId
    singleCharacter(characterId).then(data => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({
        character: data,
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
    const characterId = this.state.character._id
    const token = isAuthenticated().token

  callApi(userId, token, characterId).then(data => {
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

  deleteCharacter = () => {
    const characterId = this.props.match.params.characterId
    const token = isAuthenticated().token
    remove(characterId, token).then(data => {
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
      this.deleteCharacter()
    }
  }

  renderCharacter = character => {
    const posterId = character.postedBy ? `/user/${character.postedBy._id}` : ''
    const posterName = character.postedBy ? character.postedBy.name : ' Unknown'
    const { like, likes } = this.state
  return (
    <div className="card-body">
      <img
        src={`${process.env.REACT_APP_API_URL}/character/photo/${character._id}`}
        alt={character.title}
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
            <i
              className="fa fa-thumbs-up text-success bg-light"
              style={{ padding: '10px', borderRadius: '50%' }}
          />
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
        {/* <p className="card-text">{post.body}</p>
        <br />
        <p className="font-italic mark">
          Posted by <Link to={`${posterId}`}>{posterName} </Link>
          on {new Date(post.created).toDateString()}
        </p> */}
        <div className="d-inline-block">
          <Link to={`/`} className="btn btn-raised btn-primary btn-sm mr-5">
            Back to posts
          </Link>
          {isAuthenticated().user && isAuthenticated().user._id === character.postedBy._id && (
            <>
              <Link to={`/character/edit/${character._id}`} className="btn btn-raised btn-warning btn-sm mr-5">
                Update Post
              </Link>
              <button onClick={this.deleteConfirmed} className="btn btn-raised btn-danger">
                Delete Post
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
                    to={`/character/edit/${character._id}`}
                    className="btn btn-raised btn-warning btn-sm mr-5"
                  >
                    Update Post
                  </Link>
                    <button onClick={this.deleteConfirmed} className="btn btn-raised btn-danger">
                      Delete Post
                    </button>
              </div>
          </div>
          )}
        </div>
      </div>
    </div>
		)
  }

  render() {
    const { character, redirectToHome, redirectToSignin, comments } = this.state
      if (redirectToHome) {
        return <Redirect to={`/`} />
      } else if (redirectToSignin) {
        return <Redirect to={`/signin`} />
      }
      return (
        <div className="container">
          <h2 className="display-2 mt-5 mb-5">{character.title}</h2>
            {!character ? (
          <div className="jumbotron text-center">
            <h2>Loading...</h2>
          </div>
          ) : (
            this.renderCharacter(character)
          )}
          <Comment characterId={character._id} comments={comments.reverse()} updateComments={this.updateComments} />
        </div>
      )
    }
}

export default SingleCharacter