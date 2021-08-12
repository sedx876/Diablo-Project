import React, { Component } from "react"
import { isAuthenticated } from "../auth"
import { create } from "./apiHire"
import { Redirect } from "react-router-dom"
import { Form, Button, Row, Col, Container } from 'react-bootstrap'


class NewHire extends Component{
  constructor() {
    super()
    this.state = {
      title: "",
      photo: "",
      hireKlass: "",
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
      hireToken: "",
      skill1: "",
      skill2: "",
      skill3: "",
      skill4: "",
      generalBuildNotes: "",
      error: "",
      user: {},
      fileSize: 0,
      loading: false,
      redirectToProfile: false
    }
  }

  componentDidMount() {
    this.hireData = new FormData()
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
    this.hireData.set(name, value)
    this.setState({ [name]: value, fileSize })
  }

  clickSubmit = event => {
    event.preventDefault()
    this.setState({ loading: true })
      if (this.isValid()) {
        const userId = isAuthenticated().user._id
        const token = isAuthenticated().token
        create(userId, token, this.hireData).then(data => {
      if (data.error) this.setState({ error: data.error })
        else {
          this.setState({
          loading: false,
          title: "",
          hireKlass: "",
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
          hireToken: "",
          skill1: "",
          skill2: "",
          skill3: "",
          skill4: "",
          generalBuildNotes: "",
          redirectToProfile: true
      })
    }
  })
  }
  }

  newCharacterForm = (title, photo, hireKlass, helm, shoulders, gloves, 
    chestArmor, belt, pants, boots, bracers, amulet,
    ring1, ring2, weapon, offhand, hireToken, gemNotes, skill1,
    skill2, skill3, skill4, generalBuildNotes) => (
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
<label className="text-secondary">Skill 1</label>
<textarea
onChange={this.handleChange("skill1")}
type="text"
className="form-control"
value={skill1}
/>
</div>

<br/>

<div className="form-group">
<label className="text-secondary">Skill 3</label>
<textarea
onChange={this.handleChange("skill3")}
type="text"
className="form-control"
value={skill3}
/>
</div>

<br/>

<div className="form-group">
<label className="text-secondary">Skill 4</label>
<textarea
onChange={this.handleChange("skill4")}
type="text"
className="form-control"
value={skill4}
/>

</div>

<br/>

</div>


<div className='col'>

<div className="form-group">
<label className="text-secondary">Hire Class</label>
<input
onChange={this.handleChange("hireKlass")}
type="text"
className="form-control"
placeholder='EX: Scoundrel..Enchantress..Templar'
value={hireKlass}
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
<label className="text-secondary">Hire Token</label>
<textarea
onChange={this.handleChange("hireToken")}
type="text"
className="form-control"
value={hireToken}
/>
</div>

<br/>

<div className="form-group">
<label className="text-secondary">Skill2</label>
<textarea
onChange={this.handleChange("skill2")}
type="text"
className="form-control"
value={skill2}
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
Create Hire
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
      hireKlass,
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
      hireToken,
      gemNotes,
      skill1,
      skill2,
      skill3,
      skill4,
      generalBuildNotes,
      redirectToProfile,
      error
    } = this.state

    return(
      <>
      <br/>
      <h2 className="text-center">Create a New Hire</h2>
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
              {this.newCharacterForm(title, photo, hireKlass, helm, shoulders, gloves, 
                                    chestArmor, belt, pants, boots, bracers, amulet,
                                    ring1, ring2, weapon, offhand, hireToken, gemNotes, skill1,
                                    skill2, skill3, skill4, generalBuildNotes)}
      
      </>
    )
  }
}

export default NewHire