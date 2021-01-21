import React from "react"

class Timer extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         count: this.props.count,
         length: 1540,
         schritt: this.props.schritt,
         class:  this.props.class,
         autostart: this.props.autostart
         
      }
      this.startTimer = this.startTimer.bind(this)
      this.stopTimer = this.stopTimer.bind(this)
      this.resetTimer = this.resetTimer.bind(this)
   }
   
   startTimer() {
      
      this.timer = setInterval(() => {
         if (this.state.count > 0) {
            this.setState({
               count: this.state.count - this.state.schritt,
               length: this.state.length - 154
               
            })
         
         }
         else {
            clearInterval(this.timer)
            this.setState({ count: "Час вийшов" })
         }
   
      }, (this.state.schritt*1000 ))
         let segment =
            setInterval(() => {
               document.querySelector(`.${this.props.class}`).style.width = `${this.state.length}px`
            }, 1000)
      
   }
   
   stopTimer() {
      clearInterval(this.timer)
   }

   resetTimer() {
      clearInterval(this.timer)
      this.setState({ count: `${this.props.count}`, length: 1540 })
   }

   componentDidMount() {
      if (this.state.autostart == 1) {
         this.startTimer()
      }
   }

   render() {
      return (
         <div className='contaner'>
            <h1 className="h1"> 
               Timer : {this.state.count}
            </h1>
            <button onClick={this.startTimer}>Start</button>
            <button onClick={this.stopTimer}>Stop</button>
            <button onClick={this.resetTimer}>Reset</button>
            <div className={`${this.props.class}`}></div>   
         </div>
      )
   }
}
export default Timer