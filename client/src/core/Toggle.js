import React, { Component } from 'react'

 class Toggle extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    return (
      <div>
        <button class="btn-floating btn-large waves-effect waves-light black" onClick={this.toggle}>
          <i class="fas fa-plus"
            style={{color: '#810020'}}></i></button>
        {this.state.on && this.props.children}
      </div>
    )
  }
}

export default Toggle