import React, { Component } from "react"
import { comment, uncomment } from "./apiHire"
import { isAuthenticated } from "../auth"
import { Link } from "react-router-dom"
import DefaultProfile from "../images/avatar.png"


class Comment extends Component{
  state = {
    text: "",
    error: ""
  }

  handleChange = event => {
    this.setState({ error: "" })
    this.setState({ text: event.target.value })
  }

  isValid = () => {
    const { text } = this.state
    if (!text.length > 0 || text.length > 5000) {
      this.setState({
        error:
          "Comment should not be empty and less than 150 characters long"
    })
        return false
      }
        return true
  }

  addComment = e => {
    e.preventDefault()
      if (!isAuthenticated()) {
        this.setState({ error: "Please signin to leave a comment" })
        return false
      }
      if (this.isValid()) {
        const userId = isAuthenticated().user._id
        const token = isAuthenticated().token
        const hireId = this.props.hireId
        comment(userId, token, hireId, { text: this.state.text }).then(
          data => {
            if (data.error) {
              console.log(data.error)
            } else {
                this.setState({ text: "" })
                // dispatch fresh list of coments to parent (SinglePost)
                this.props.updateComments(data.comments)
            }
          }
        )
      }
  }

  deleteComment = comment => {
    const userId = isAuthenticated().user._id
    const token = isAuthenticated().token
    const hireId = this.props.hireId
    uncomment(userId, token, hireId, comment).then(data => {
      if (data.error) {
        console.log(data.error)
      } else {
          this.props.updateComments(data.comments)
      }
    })
  }

  deleteConfirmed = comment => {
    let answer = window.confirm(
      "Are you sure you want to delete your comment?"
    )
      if (answer) {
        this.deleteComment(comment)
      }
  }

  render(){
    const { comments } = this.props
    const { error } = this.state
    return (
      <div>
        <h2 className="mt-5 mb-5">Leave a comment</h2>
        <form onSubmit={this.addComment}>
          <div className="form-group">
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.text}
              className="form-control"
              placeholder="Leave a comment..."
            />
            <button className="btn btn-raised btn-success mt-2">
              Post
            </button>
          </div>
        </form>

        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
          {error}
        </div>
        <div className="col-md-12">
          <h3 className="text-primary">{comments.length} Comments</h3>
          <hr />
          {comments.map((comment, i) => (
        <div key={i}>
          <div>
            <Link to={`/user/${comment.postedBy._id}`}>
              <img
                style={{
                  borderRadius: "50%",
                  border: "1px solid black"
                }}
                className="float-left mr-2"
                height="30px"
                width="30px"
                onError={i =>
                  (i.target.src = `${DefaultProfile}`)
                }
                src={`${
                  process.env.REACT_APP_API_URL
                }/user/photo/${comment.postedBy._id}`}
                alt={comment.postedBy.name}
              />
            </Link>
            <div>
              <p className="lead">{comment.text}</p>
              <p className="font-italic mark">
                Posted by{" "}
              <Link
                to={`/user/${comment.postedBy._id}`}
              >
                {comment.postedBy.name}{" "}
              </Link>
                on{" "}
                {new Date(
                  comment.created
                ).toDateString()}
                <span>
                  {isAuthenticated().user &&
                    isAuthenticated().user._id ===
                    comment.postedBy._id && (
                <>
                  <button className='btn btn-raised btn-outline-danger btn-sm float-right mr-1'
                    onClick={() =>
                    this.deleteConfirmed(comment)}>
                    Remove
                  </button>
                </>
                )}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
  }
}

export default Comment