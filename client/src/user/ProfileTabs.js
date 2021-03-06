import React, { Component } from "react"
import { Link } from "react-router-dom"
import DefaultProfile from "../images/avatar.png"

class ProfileTabs extends Component {
  render() {
    const { following, followers, characters, posts } = this.props
      return (
        <div>
          <div className="row">
            <div className="col-md-3">
              <h3 className="text-primary text-center">
                {followers.length} <strong>Followers</strong>
              </h3>
                <hr />
                  {followers.map((person, i) => (
                    <div key={i}>
                      <div>
                        <Link to={`/user/${person._id}`}>
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
                            }/user/photo/${person._id}`}
                            alt={person.name}
                          />
                          <div>
                            <p className="lead text-secondary">
                              {person.name}
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    ))}
            </div>
            <div className="col-md-3">
              <h3 className="text-primary text-center">
                {following.length} <strong>Following</strong>
              </h3>
              <hr />
                {following.map((person, i) => (
              <div key={i}>
                <div>
                  <Link to={`/user/${person._id}`}>
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
                      }/user/photo/${person._id}`}
                      alt={person.name}
                    />
                    <div>
                      <p className="lead text-secondary">
                        {person.name}
                      </p>
                    </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
              <div className="col-md-3">
                <h3 className="text-primary">{characters.length} <strong>Builds</strong></h3>
                  <hr />
                    {characters.map((character, i) => (
                    <div key={i}>
                    <div>
                      <Link to={`/character/${character._id}`}>
                    <div>
                      <p className="lead text-secondary">{character.title}</p>
                  </div>
                      </Link>
                </div>
              </div>

              

              
            ))}
          </div>
          
          <div className="col-md-3">
                <h3 className="text-primary">{posts.length} <strong>Posts</strong></h3>
                  <hr />
                    {posts.map((post, i) => (
                    <div key={i}>
                    <div>
                      <Link to={`/post/${post._id}`}>
                    <div>
                      <p className="lead text-secondary">{post.title}</p>
                  </div>
                      </Link>
                </div>
              </div>

              

              
            ))}
          </div>
          
        </div>
      </div>
    )
  }
}

export default ProfileTabs