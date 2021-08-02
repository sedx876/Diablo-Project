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

      <Row className="align-items-center">
        <Form.Group className="align-items-center" controlId='formFileSm'>
          <Form.Label>Image</Form.Label>
            <Form.Control
              size="sm"
              type='file'
              placeholder='Upload Image'
              value={photo}
              accept="image/*"
              onChange={this.handleChange('photo')}
            ></Form.Control>
        </Form.Group>
      </Row>
      
      <Row>
        <Col>

          <Form.Group  className="" controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='Enter Title'
            value={title}
            onChange={this.handleChange('title')}
          ></Form.Control>
          </Form.Group>

          <Form.Group controlId='helm'>
          <Form.Label>Helm</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='Helm'
            value={helm}
            onChange={this.handleChange('helm')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='gloves'>
        <Form.Label>Gloves</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='Gloves'
            value={gloves}
            onChange={this.handleChange('gloves')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='belt'>
        <Form.Label>Belt</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='Belt'
            value={belt}
            onChange={this.handleChange('belt')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='boots'>
        <Form.Label>Boots</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='Boots'
            value={boots}
            onChange={this.handleChange('boots')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='amulet'>
        <Form.Label>Amulet</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='Amulet'
            value={amulet}
            onChange={this.handleChange('amulet')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='ring2'>
        <Form.Label>Ring 2</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='Ring 2'
            value={ring2}
            onChange={this.handleChange('ring2')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='offhand'>
        <Form.Label>OffHand</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='OffHand'
            value={offhand}
            onChange={this.handleChange('offhand')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='kanaisCube'>
        <Form.Label>Kanai's Cube</Form.Label>
          <Form.Control
            as="textarea" 
            rows={3}
            size="sm"
            type='text'
            placeholder="Kanai's Cube"
            value={kanaisCube}
            onChange={this.handleChange('kanaisCube')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='passiveSkills'>
        <Form.Label>Passive Skills</Form.Label>
          <Form.Control
            as="textarea" 
            rows={3}
            size="sm"
            type='text'
            placeholder='Passive Skills'
            value={passiveSkills}
            onChange={this.handleChange('passiveSkills')}
          ></Form.Control>
        </Form.Group>

        </Col>



        <Col>
        
        <Form.Group controlId='characterKlass'>
        <Form.Label>Character Class</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='Ex: Demon Hunter, Barbarian'
            value={characterKlass}
            onChange={this.handleChange('characterKlass')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='shoulders'>
        <Form.Label>Shoulders</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='Shoulders'
            value={shoulders}
            onChange={this.handleChange('shoulders')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='chestArmor'>
        <Form.Label>Chest Armor</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='Chest Armor'
            value={chestArmor}
            onChange={this.handleChange('chestArmor')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='pants'>
        <Form.Label>Pants</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='Pants'
            value={pants}
            onChange={this.handleChange('pants')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='bracers'>
        <Form.Label>Bracers</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='Bracers'
            value={bracers}
            onChange={this.handleChange('bracers')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='ring1'>
        <Form.Label>Ring 1</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='Ring 1'
            value={ring1}
            onChange={this.handleChange('ring1')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='weapon'>
        <Form.Label>Weapon</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='Weapon'
            value={weapon}
            onChange={this.handleChange('weapon')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='gemNotes'>
        <Form.Label>Gem Notes</Form.Label>
          <Form.Control
            as="textarea" 
            rows={3}
            size="sm"
            type='text'
            placeholder='Gem Notes'
            value={gemNotes}
            onChange={this.handleChange('gemNotes')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='activeSkills'>
        <Form.Label>Active Skills</Form.Label>
          <Form.Control
            as="textarea" 
            rows={3}
            size="sm"
            type='text'
            placeholder='Active Skills'
            value={activeSkills}
            onChange={this.handleChange('activeSkills')}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='generalBuildNotes'>
        <Form.Label>General Build Notes</Form.Label>
          <Form.Control
            as="textarea" 
            rows={3}
            size="sm"
            type='text'
            placeholder='General Build Notes'
            value={generalBuildNotes}
            onChange={this.handleChange('generalBuildNotes')}
          ></Form.Control>
        </Form.Group>

        </Col>

      </Row>

      <button
        onClick={this.clickSubmit}
        className="btn btn-raised btn-outline-primary"
      >
        Create Character
      </button>
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
      <h2 className="mt-5 mb-5">Create a New Character</h2>
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