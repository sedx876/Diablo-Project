import React, { Component } from "react"
import { singleCharacter, update } from "./apiCharacter"
import { isAuthenticated } from "../auth"
import { Redirect } from "react-router-dom"
import DefaultPost from "../images/default.png"
import { Form, Button, Row, Col, Container } from 'react-bootstrap'


class EditCharacter extends Component{
  constructor() {
    super()
    this.state = {
      id: "",
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
      error: "",
      fileSize: 0,
      loading: false,
      redirectToProfile: false
    }
  }

  init = characterId => {
    singleCharacter(characterId).then(data => {
      if (data.error) {
        this.setState({ redirectToProfile: true })
      } else {
          this.setState({
            photo: data.photo,
            id: data.postedBy._id,
            title: data.title,
            characterKlass: data.characterKlass,
            helm: data.helm,
            shoulders: data.shoulders,
            gloves: data.gloves,
            chestArmor: data.chestArmor,
            belt: data.belt,
            pants: data.pants,
            boots: data.boots,
            bracers: data.bracers,
            amulet: data.amulet,
            ring1: data.ring1,
            ring2: data.ring2,
            weapon: data.weapon,
            offhand: data.offhand,
            gemNotes: data.gemNotes,
            kanaisCube: data.kanaisCube,
            activeSkills: data.activeSkills,
            passiveSkills: data.passiveSkills,
            generalBuildNotes: data.generalBuildNotes,
            error: ""
        })
      }
    })
  }

  componentDidMount() {
    this.characterData = new FormData()
    const characterId = this.props.match.params.characterId
    this.init(characterId)
  }

  isValid = () => {
    const { title, fileSize } = this.state
    if (fileSize > 10000000) {
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
      const fileSize = name === "photo" ? event.target.files[0].size : 0;
      this.characterData.set(name, value);
      this.setState({ [name]: value, fileSize });
  }

  clickSubmit = event => {
    event.preventDefault()
    this.setState({ loading: true })
    if (this.isValid()) {
      const characterId = this.props.match.params.characterId
      const token = isAuthenticated().token
      update(characterId, token, this.characterData).then(data => {
    if (data.error) this.setState({ error: data.error })
      else {
        this.setState({
            loading: false,
            redirectToProfile: true,
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
            photo: ""
			})
    }
  })
  }
  }

  editCharacterForm = (title, photo, characterKlass, helm, shoulders, gloves, 
    chestArmor, belt, pants, boots, bracers, amulet,
    ring1, ring2, weapon, offhand, gemNotes, kanaisCube,
    activeSkills, passiveSkills, generalBuildNotes) => (
<Container>

<Form>

<div className='row'>
<div className="form-group">
        <label className="text-muted">Post Photo</label>
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
Update Character
</button>
</div>
<br/>



</Form>
</Container>
)


  render(){
    const {
      id,
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

    if (redirectToProfile) {
      return <Redirect to={`/user/${isAuthenticated().user._id}`} />;
    }


    return(
      <div className="container">
          <h2 className="mt-5 mb-5">{title}</h2>
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
          <img
            style={{ height: "200px", width: "auto" }}
            className="img-thumbnail"
            src={`${
              process.env.REACT_APP_API_URL
            }/character/photo/${id}?${new Date().getTime()}`}
            onError={i => (i.target.src = `${DefaultPost}`)}
            alt={title}
          />
          {isAuthenticated().user._id === id &&
                  this.editCharacterForm(title, photo, characterKlass, helm, shoulders, gloves, 
                    chestArmor, belt, pants, boots, bracers, amulet,
                    ring1, ring2, weapon, offhand, gemNotes, kanaisCube,
                    activeSkills, passiveSkills, generalBuildNotes)}
            {/* {isAuthenticated().user.role === "admin" &&
              this.editCharacterForm(title, photo, characterKlass, helm, shoulders, gloves, 
                chestArmor, belt, pants, boots, bracers, amulet,
                ring1, ring2, weapon, offhand, gemNotes, kanaisCube,
                activeSkills, passiveSkills, generalBuildNotes)} */}
                
        </div>
    )
  }
}

export default EditCharacter