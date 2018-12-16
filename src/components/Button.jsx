import React, {Component} from 'react';

class Button extends Component{

  handleClick =()=>{
    if(this.props.power){
    this.audio.volume=this.props.volume/100;
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.idDisplay(this.props.id);}
  }

  render () {
    return(
    <React.Fragment>
      <div className="button unlightened" onClick={this.handleClick} id={this.props.letter}>
        <p>{this.props.letter}</p>
      <audio ref={ref=>this.audio=ref} src={this.props.src} id={this.props.id}></audio>
      </div>
    </React.Fragment>
    )
  }
}

export default Button;
