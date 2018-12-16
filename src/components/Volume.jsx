import React from 'react'

class Volume extends React.Component {

  render () {
return (
  <div id='midPanel'>
    <button className='volButton unlightened' onClick={this.props.volumeDown}>-</button>
    <button id='powButton' onClick={this.props.togglePower}><i className="fas fa-power-off"></i></button>
    <button className='volButton unlightened' onClick={this.props.volumeUp}>+</button>
  </div>
)
  }
}

export default Volume;
