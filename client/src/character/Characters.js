import React, { Component } from "react"
import { list } from "./apiCharacter"
import DefaultPost from "../images/default.png"
import { Link } from "react-router-dom"

class Characters extends Component{
  constructor() {
    super();
    this.state = {
      characters: [],
      page: 1
    }
  }

  loadCharacters = page => {
    list(page).then(data => {
      if (data.error){
        console.table(data.error)
      }else{
        this.setState({ characters: data })
      }
    })
  }

  componentDidMount(){
    this.loadCharacters(this.state.page)
  }

  loadMore = number => {
    this.setState({ page: this.state.page + number })
    this.loadCharacters(this.state.page + number)
  }

  loadLess = number => {
    this.setState({ page: this.state.page - number })
    this.loadCharacters(this.state.page - number)
  }

  renderCharacters = characters => {
    return(
      <div className='container'>
        <div className='row'>
        {characters.map((character, i) =>{
          const posterId = character.postedBy
          ? `/user/${character.postedBy._id}`
          : "";
          const posterName = character.postedBy 
          ? character.postedBy.name 
          : "Unknown";
          return(
            <div className='card border-primary col-md-4 mb-2' key={i}>
              <div className="card-body">
                  <img
                    src={`${
                      process.env.REACT_APP_API_URL
                    }/character/photo/${character._id}`}
											alt={character.title}
											onError={i =>
                    (i.target.src = `${DefaultPost}`)
                    }
                    className="img-thunbnail mb-2"
                    style={{ height: "200px", width: "100%" }}
                  />
                  <h5 className="card-title">{character.title}</h5>
                  <p className="card-text">
                      Posted by{" "}
                    <Link to={`${posterId}`}>
                      {posterName}{" "}
                    </Link>
                      on {new Date(character.created).toDateString()}
                    </p>
                    <Link
                      to={`/character/${character._id}`}
                      className="btn btn-raised btn-primary btn-sm"
                    >
                      Details
                    </Link>
            </div>
            </div>
            
          )
        })}
        
      </div>
      </div>
      
    )
  }

  render(){
    const { characters, page } = this.state;
    return(
      <div>
        <h2 className="mt-5 mb-5">
            {!characters.length ? 
            "You have reached the end of the posts!!" 
            : 
            <h3 className='mt-5 mb-5 text-primary text-center'>
              <strong>Recent Character Builds</strong>
            </h3>}
          </h2>
        {this.renderCharacters(characters)}
        <br/>
        <div className='row'>
        {page > 1 ? (
          
              <button
                className="btn btn-raised btn-outline-warning d-grid gap-2 col-2 mx-auto"
                onClick={() => this.loadLess(1)}
              >
                Previous ({this.state.page - 1})
              </button>
              ) : (
                ""
              )}
                {characters.length ? (
                  <button
                    className="btn btn-raised btn-outline-success d-grid gap-2 col-2 mx-auto"
                    onClick={() => this.loadMore(1)}
                  >
                    Next ({page + 1})
                  </button>
                ) : (
                  ""
              )}
      </div>
      <br/>
      </div> 
    )
  }
}

export default Characters