// Write your code here
import {Component} from 'react' 
import './index.css' 

class Stopwatch extends Component {
    constructor(props){
      super(props)
      this.state = {time:"00:00",count:0,show:false,seconds:0,minutes:0,d:false}
    }

    componentDidMount(){
      
      this.timerId = setInterval(this.timer,1000)

    }
    componentWillUnmount()
    {
      clearInterval(this.timerId)
    }
    timer = ()=>{
      const {show} = this.state 
      if (show){
      const {count,minutes,seconds} = this.state 
      if (seconds===59){
        this.setState({count:0,minutes:minutes,seconds:0})
        this.setState((prev)=>({minutes:prev.minutes+1}))
      }
      else{
      this.setState((prev)=>({count:prev.count+1}))
      this.setState({seconds:count})
      }
      }
     
    }

    Start =  ()=>{
      this.setState({show:true,d:true})
    }
    Stop =()=>{
    
      this.setState({show:false})
    }
    Reset = ()=>{
      this.setState({show:false,minutes:0,seconds:0,count:0,d:false})
    }


    render () {
      const {minutes,seconds,d,time} = this.state
      const s = seconds >9 ? seconds : '0'+seconds 
      const m = minutes >9 ? minutes : '0'+minutes
      const k = m+":"+s
       return <div className="mainContainer">
                <h1>Stopwatch</h1>
                    <div className="box">
                         <div className="header">
                          <img className="timer" src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt="stopwatch"/>
                          <p className="para">Timer</p>
                          </div>
                        <div className="dtime">
                          <h1 className="time">{d?k:time}</h1>
                          </div>

                          <div className="butbox">
                                <button type="button" onClick={this.Start} className="but but1">Start</button> 
                                <button type="button" onClick={this.Stop} className="but but2">Stop</button>
                                <button type="button" onClick={this.Reset} className="but but3">Reset</button>
                          </div>
                   
                   
              </div>
             
        </div>
    }
}

export default Stopwatch