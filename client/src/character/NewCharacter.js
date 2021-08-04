import React, { Component } from "react"
import { isAuthenticated } from "../auth"
import { create } from "./apiCharacter"
import { Redirect } from "react-router-dom"
import { Form, Button, Row, Col, Container } from 'react-bootstrap'

class NewCharacter extends Component{
  constructor() {
    super()
    this.state = {
      title: "",
      photo: "",
      characterKlass: "",
      helm: "",
      shoulders: "",
      gloves: "",
      chestArmor: "",
      belt: "",
      pants: "",
      boots: "",
      bracers: "",
      amulet: "",
      ring1: "",
      ring2: "",
      weapon: "",
      offhand: "",
      gemNotes: "",
      kanaisCube: "",
      activeSkills: "",
      passiveSkills: "",
      generalBuildNotes: "",
      error: "",
      user: {},
      fileSize: 0,
      loading: false,
      redirectToProfile: false
    }
  }

  componentDidMount() {
    this.characterData = new FormData()
    this.setState({ user: isAuthenticated().user })
  }

  isValid = () => {
    const { title, fileSize } = this.state
    if (fileSize > 100000) {
      this.setState({
        error: "File size should be less than 100kb",
        loading: false
      })
        return false
      }
    if (title.length === 0) {
      this.setState({ error: "All fields are required", loading: false })
      return false
    }
      return true
  }

  handleChange = name => event => {
    this.setState({ error: "" })
    const value =
    name === "photo" ? event.target.files[0] : event.target.value
    const fileSize = name === "photo" ? event.target.files[0].size : 0
    this.characterData.set(name, value)
    this.setState({ [name]: value, fileSize })
  }

  clickSubmit = event => {
    event.preventDefault()
    this.setState({ loading: true })
      if (this.isValid()) {
        const userId = isAuthenticated().user._id
        const token = isAuthenticated().token
        create(userId, token, this.characterData).then(data => {
      if (data.error) this.setState({ error: data.error })
        else {
          this.setState({
          loading: false,
          title: "",
          characterKlass: "",
          helm: "",
          shoulders: "",
          gloves: "",
          chestArmor: "",
          belt: "",
          pants: "",
          boots: "",
          bracers: "",
          amulet: "",
          ring1: "",
          ring2: "",
          weapon: "",
          offhand: "",
          gemNotes: "",
          kanaisCube: "",
          activeSkills: "",
          passiveSkills: "",
          generalBuildNotes: "",
          redirectToProfile: true
      })
    }
  })
  }
  }

  newCharacterForm = (title, photo, characterKlass, helm, shoulders, gloves, 
                      chestArmor, belt, pants, boots, bracers, amulet,
                      ring1, ring2, weapon, offhand, gemNotes, kanaisCube,
                      activeSkills, passiveSkills, generalBuildNotes) => (
    <Container>
    
    <Form>

      <div className='row'>
        <div className="form-group">
          <label className="text-primary">Post Photo</label>
          <input
            onChange={this.handleChange("photo")}
            type="file"
            accept="image/*"
            className="form-control"
          />
        </div>
      </div>
      
      <br/>

      <div className='row'>

        <div className='col'>

        <div className="form-group">
          <label className="text-secondary">Title</label>
          <input
            onChange={this.handleChange("title")}
            type="text"
            className="form-control"
            value={title}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Helm</label>
          <input
            onChange={this.handleChange("helm")}
            type="text"
            className="form-control"
            value={helm}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Gloves</label>
          <input
            onChange={this.handleChange("gloves")}
            type="text"
            className="form-control"
            value={gloves}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Belt</label>
          <input
            onChange={this.handleChange("belt")}
            type="text"
            className="form-control"
            value={belt}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Boots</label>
          <input
            onChange={this.handleChange("boots")}
            type="text"
            className="form-control"
            value={boots}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Amulet</label>
          <input
            onChange={this.handleChange("amulet")}
            type="text"
            className="form-control"
            value={amulet}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Ring 1</label>
          <input
            onChange={this.handleChange("ring1")}
            type="text"
            className="form-control"
            value={ring1}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">OffHand</label>
          <input
            onChange={this.handleChange("offhand")}
            type="text"
            className="form-control"
            value={offhand}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Kanai's Cube</label>
          <textarea
            onChange={this.handleChange("kanaisCube")}
            type="text"
            className="form-control"
            value={kanaisCube}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Passive Skills</label>
          <textarea
            onChange={this.handleChange("passiveSkills")}
            type="text"
            className="form-control"
            value={passiveSkills}
          />
        </div>

        </div>


        <div className='col'>
          
        <div className="form-group">
          <label className="text-secondary">Character Class</label>
          <input
            onChange={this.handleChange("characterKlass")}
            type="text"
            className="form-control"
            placeholder='EX: Demon Hunter..Barbarian'
            value={characterKlass}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Shoulders</label>
          <input
            onChange={this.handleChange("shoulders")}
            type="text"
            className="form-control"
            value={shoulders}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Chest Armor</label>
          <input
            onChange={this.handleChange("chestArmor")}
            type="text"
            className="form-control"
            value={chestArmor}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Pants</label>
          <input
            onChange={this.handleChange("pants")}
            type="text"
            className="form-control"
            value={pants}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Bracers</label>
          <input
            onChange={this.handleChange("bracers")}
            type="text"
            className="form-control"
            value={bracers}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Ring 2</label>
          <input
            onChange={this.handleChange("ring2")}
            type="text"
            className="form-control"
            value={ring2}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Weapon</label>
          <input
            onChange={this.handleChange("weapon")}
            type="text"
            className="form-control"
            value={weapon}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Gem Notes</label>
          <textarea
            onChange={this.handleChange("gemNotes")}
            type="text"
            className="form-control"
            value={gemNotes}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">Active Skills</label>
          <textarea
            onChange={this.handleChange("activeSkills")}
            type="text"
            className="form-control"
            value={activeSkills}
          />
        </div>

        <br/>

        <div className="form-group">
          <label className="text-secondary">General Build Notes</label>
          <textarea
            onChange={this.handleChange("generalBuildNotes")}
            type="text"
            className="form-control"
            value={generalBuildNotes}
          />
        </div>

        </div>


      </div>
      <br/>

      <div className='row'>
      <button
        onClick={this.clickSubmit}
        className="btn btn-raised btn-outline-primary d-grid gap-2 col-6 mx-auto"
      >
        Create Character
      </button>
      </div>
      <br/>
      

      
    </Form>
    </Container>
  )


  render(){
    const {
      loading,
      title,
      photo,
      characterKlass,
      helm,
      shoulders,
      gloves,
      chestArmor,
      belt,
      pants,
      boots,
      bracers,
      amulet,
      ring1,
      ring2,
      weapon,
      offhand,
      gemNotes,
      kanaisCube,
      activeSkills,
      passiveSkills,
      generalBuildNotes,
      redirectToProfile,
      error
    } = this.state

    return(
      <>
      <br/>
      <h2 className="text-center">Create a New Character</h2>
      <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
        </div>

        {loading ? (
              <div className="jumbotron text-center">
                <h2>Loading...</h2>
              </div>
            ) : (
              ""
            )}
              {this.newCharacterForm(title, photo, characterKlass, helm, shoulders, gloves, 
                      chestArmor, belt, pants, boots, bracers, amulet,
                      ring1, ring2, weapon, offhand, gemNotes, kanaisCube,
                      activeSkills, passiveSkills, generalBuildNotes)}
      
      </>
    )
  }
}

export default NewCharacter