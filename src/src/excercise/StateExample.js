import React, { Component } from "react";

class StateExample extends Component {
    constructor(props) {
      super(props)

      this.state = { 
        message:"Welcome visitor"
      }
    }

    changeMessage(){
      this.setState({
        message:"Thank You"
      })
    }
    render(){
      return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}> Change state </button>
        </div>
      )
    }
}

export default StateExample