import React from "react"
// import  { Component } from 'react'

class Timer extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         count: 10,
         length: 1540,
         schritt: 1,
         autostart: false,
         text: "Час вийшов"
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
         else{
             clearInterval(this.timer)
            this.setState({ count: "Час вийшов"})
         }
         console.log(this.state.count)
         }, 1000)
         let segment =
            setInterval(() => {
      
               document.querySelector(".segment").style.width = `${this.state.length}px`
            }, 1000)
      
      
      }
   
   stopTimer() {
      clearInterval(this.timer)
   }

   resetTimer() {
      clearInterval(this.timer)
      this.setState({ count: 10, length: 1540 })
         
      
   }

   componentDidMount() {
      if (this.state.autostart === true) {
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
            <div className="segment"></div>   
         </div>
      )
   }
}





// class Timer extends Component {
//    state = {
//       text: "hello world",
//       addtext: "",
//       length: 1540,
//       timeLeft: 100,
//       time: null,
//       intervalId: true
//    }

   
//    pauseTimer = () => {
//       this.setState({ intervalId: "falce" })
      
//    }
//    startTimer = () => {
        
//       this.setState({ intervalId: true })
//       let segment = setInterval(() => {
//          // if (this.state.intervalId = true)
//             document.querySelector(".segment").style.width = `${this.state.length}px`
//       }, 1000)
   
//       const timer = () => {
         
//          this.setState({
//             timeLeft: this.state.timeLeft - 1, length: this.state.length - 15.4
//          })
//        }
      
         
//       setInterval(() => {
//          if (this.state.intervalId === true) {
//             timer()
//          } else {
//             clearInterval(bar)
//          }
//       }, 1000) 
//       return this.setState({ timeLeft: this.state.timeLeft - 1,length: this.state.length - 15.4 })
//    }

//    }
   




//    render() {
//       return (
//          <div className="timer">
//             <div className="segment"  ></div>
            
//             <h1>{this.state.timeLeft} </h1>
//             <button onClick={this.startTimer}>Запустити таймер</button>
//             <button onClick={this.pauseTimer}>стоп таймер</button>
//          </div>)
//    }
// }
export default Timer