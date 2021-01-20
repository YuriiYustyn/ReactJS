import React from "react"
// import  { Component } from 'react'

class Timerr extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         count: 20,
         length: 1540,
         schritt: 2,
         autostart: true
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
         } else {
            clearInterval(this.timer)
            this.setState({ count: "Час вийшов" })
         }
      }, 1000)
      let segmentt =
         setInterval(() => {

            document.querySelector(".segmentt").style.width = `${this.state.length}px`
         }, 1000)


   }

   stopTimer() {
      clearInterval(this.timer)
   }

   resetTimer() {
      clearInterval(this.timer)
      this.setState({ count: 20, length: 1540 })
   }

   componentDidMount() {
      if (this.state.autostart === true) {
         this.startTimer()
      }


   }

   render() {
      return (
         <div className='contaner'>
            <h1>
               Timer : {this.state.count}
            </h1>
            <button onClick={this.startTimer}>Start</button>
            <button onClick={this.stopTimer}>Stop</button>
            <button onClick={this.resetTimer}>Reset</button>
            <div className="segmentt"></div>
         </div>
      )
   }
}
export default Timerr