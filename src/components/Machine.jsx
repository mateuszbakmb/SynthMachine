import React, {Component} from 'react'
import Button from './Button.jsx';
import Volume from './Volume.jsx'

class Machine extends Component {
  constructor(props){
    super(props);
    this.state ={
      idDisplay: '',
      volume: 50,
      power: false,
      active: 'unlightened'
    }
  }

  handleidDisplay = (idDisplay)=>{
    this.setState({idDisplay})
  }

  volumeUp =(e) =>{
    if(this.state.power){
    if(this.state.volume<100){
    this.setState({volume: this.state.volume+1})
  }}
  }

  volumeDown=()=>{
    if(this.state.power){
    if(this.state.volume>0){
    this.setState({volume: this.state.volume-1})
  }}
  }

  togglePower = () =>{
    document.querySelectorAll('.unlightened').forEach(x=>x.classList.toggle('lightened'))
    document.querySelector('#powButton').classList.toggle('turnedOn')
    const hello = this.state.idDisplay ? '' : 'HELLO';
    this.setState({idDisplay:hello, power: !this.state.power})
    this.state.active=== 'lightened' ? (this.setState({active: 'unlightened'})) : (this.setState({active: 'lightened'}))
    document.querySelectorAll('audio').forEach(x=>x.pause())
  }

  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e)=> {
    let key = String.fromCharCode(e.keyCode);
    const chosen = document.getElementById(key)
    if (chosen) {
    chosen.click()}
  }

  render () {
  return (
    <div id='container'>
      <div id='brandName'>SynthMachine</div>
      <div id='screen'>
        {!this.state.power ?
          <div id='idDisplay' style={{display: 'none'}}></div> :
          <div id='idDisplay'>{this.state.idDisplay}</div>
        }
        {!this.state.power ?
          <div id='volDisplay' style={{display: 'none'}}></div> :
          <div id='volDisplay'>Vol: {this.state.volume}%</div>
        }
        {!this.state.power ?
          <div id='volBar' style={{display: 'none'}}></div> :
          <div id='volBar' style={{width: `${this.state.volume*2}px`}}></div>
        }
      </div>
          <Volume
            volumeDown={this.volumeDown}
            volumeUp={this.volumeUp}
            togglePower={this.togglePower}/>
      <div id='buttonsPanel'>
        {data.map(elem=>
          <Button
            id={elem.id}
            key={elem.id}
            letter={elem.key}
            src={elem.url}
            idDisplay={this.handleidDisplay}
            volume={this.state.volume}
            power={this.state.power}
            />
        )}
      </div>
    </div>
  )
  }
}

export default Machine;

const data = [{
    key: 'Q',
    id: 'Dnb-dark',
    url: 'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Nu%20Skool%20or%20DnB-5913-Free-Loops.com.mp3'
  }, {
    key: 'W',
    id: 'Bubbling-beat',
    url: 'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Bubbling%20Beat.wav-18870-Free-Loops.com.mp3'
  }, {
    key: 'E',
    id: 'Distortion',
    url: 'http://www.hotdogstorm.com/tempsoundsolutions/supersaw%20samples/C1%20Super%20Saw.wav'
  }, {
    key: 'A',
    id: 'Acid-line',
    url: 'http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Acid%20Line%20Bass%20Lick-177-Free-Loops.com.mp3'
  }, {
    key: 'S',
    id: 'Wave-1',
    url: 'http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/SHOTRVSE.WAV'
  }, {
    key: 'D',
    id: 'Phase-hit',
    url: 'http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/PHASESHT.WAV'
  }, {
    key: 'Z',
    id: "Hi-Hat",
    url: 'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Lil%20Jon%20Hi%20Hat-8247-Free-Loops.com.mp3'
  }, {
    key: 'X',
    id: 'Kick',
    url: 'http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/DR%20202%20Kick-7719-Free-Loops.com.mp3'
  }, {
    key: 'C',
    id: 'Moog-Bass',
    url: 'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Moog%20Bass%20Hit%209-2787-Free-Loops.com.mp3'
  },
];
