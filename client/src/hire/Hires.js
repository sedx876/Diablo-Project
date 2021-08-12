import React, { Component } from "react"
import { list } from "./apiHire"
import DefaultPost from "../images/default.png"
import { Link } from "react-router-dom"

class Hires extends Component{
  constructor() {
    super();
    this.state = {
      hires: [],
      page: 1
    }
  }

  loadHires = page => {
    list(page).then(data => {
      if (data.error){
        console.table(data.error)
      }else{
        this.setState({ hires: data })
      }
    })
  }

  componentDidMount(){
    this.loadHires(this.state.page)
  }

  loadMore = number => {
    this.setState({ page: this.state.page + number })
    this.loadHires(this.state.page + number)
  }

  loadLess = number => {
    this.setState({ page: this.state.page - number })
    this.loadHires(this.state.page - number)
  }

  renderHires = hires => {
    return(
      <div className='container'>
        <div className='row'>
        {hires.map((hire, i) =>{
          const posterId = hire.postedBy
          ? `/user/${hire.postedBy._id}`
          : "";
          const posterName = hire.postedBy 
          ? hire.postedBy.name 
          : "Unknown";
          return(
            <div className='card border-primary col-md-4 mb-2' key={i}>
              <div className="card-body">
                  <img
                    src={`${
                      process.env.REACT_APP_API_URL
                    }/hire/photo/${hire._id}`}
											alt={hire.title}
											onError={i =>
                    (i.target.src = `${DefaultPost}`)
                    }
                    className="card-img-top"
                    style={{ height: "200px", width: "100%" }}
                  />
                  <h5 className="card-title">{hire.title}</h5>
                  <p className="card-text">
                      Posted by{" "}
                    <Link to={`${posterId}`}>
                      {posterName}{" "}
                    </Link>
                      on {new Date(hire.created).toDateString()}
                    </p>
                    <Link
                      to={`/hire/${hire._id}`}
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
    const { hires, page } = this.state;
    return(
      <div>
        <h2 className="mt-5 mb-5">
            {!hires.length ? 
            "You have reached the end of the posts!!" 
            : 
            <h3 className='mt-5 mb-5 text-primary text-center'>
              <strong>Recent Hire Builds</strong>
            </h3>}
          </h2>
        {this.renderHires(hires)}
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
                {hires.length ? (
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

export default Hires