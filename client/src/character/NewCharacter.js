import React, { Component } from "react"
import { isAuthenticated } from "../auth"
import { create } from "./apiCharacter"
import { Redirect } from "react-router-dom"
import { Form, Button, Row, Col } from 'react-bootstrap'

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
    <Form>

      <Form.Group controlId='formFileSm'>
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

      <br/>

      <Form.Group as={Row} className="mb-3" controlId='title'>
        <Form.Label>Title</Form.Label>
          <Form.Control
            size="sm"
            type='text'
            placeholder='Enter Title'
            value={title}
            onChange={this.handleChange('title')}
          ></Form.Control>
      </Form.Group>

      <br/>

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

      <br/>

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

      <br/>

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

      <br/>

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

      <br/>

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

      <br/>

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

      <br/>

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

      <br/>

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

      <br/>

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
    </Form>
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
      redirectToProfile
    } = this.state

    return(
      <>
      {this.newCharacterForm(title, photo, characterKlass, helm, shoulders, gloves, 
                      chestArmor, belt, pants, boots, bracers, amulet,
                      ring1, ring2, weapon, offhand, gemNotes, kanaisCube,
                      activeSkills, passiveSkills, generalBuildNotes)}
      </>
    )
  }
}

export default NewCharacter