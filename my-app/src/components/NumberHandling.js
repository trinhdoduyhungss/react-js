import React, { Component } from 'react';

class NumberHandling extends Component {
  constructor(props) {
    super(props)
    this.state = {     
      value: "select"
    }

  }
  // clickup = () => {
  //   const value = this.state.value
  //   this.setState({
  //     value: value + 1
  //   })
  // }


  // clickdown = () => {
  //   //C1: 
  //   // if (this.state.value >= 1){
  //   //   const value = this.state.value
  //   //   this.setState({
  //   //     value : value - 1
  //   //   })
  //   // }else{
  //   //   const value = this.state.value
  //   //   this.setState({
  //   //     value : 0
  //   //   })
  //   // }
  //   //C2: 
  //   // const value = this.state.value
  //   //   this.setState({
  //   //     value : (value - 1) < 0 ? 0 : value-1
  //   // })
  //   //C3: 
  //   this.setState((preState) => ({ value: (preState.value - 1) < 0 ? 0 : preState.value - 1 }))
  // }
  onChange= (event) => {
    
     this.setState({
       value : event.nativeEvent.target[event.nativeEvent.target.selectedIndex].text
      }) ;
   }
  render() {
    return (
      <div>
        {/* <button onClick={this.clickup} type="button">+</button>
        <label>{this.state.value}</label>
        <button onClick={this.clickdown} type="button">-</button> */}
        <select onChange={this.onChange}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <label>{this.state.value}</label>
      </div>
    )
  }
}

export default NumberHandling