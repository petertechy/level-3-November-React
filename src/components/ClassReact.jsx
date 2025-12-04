import { Component } from "react";

class ClassReact extends Component {
    constructor(props) {
        super(props);
    }
    state = { myNumber: 20, myName: "Adekunle" }
    // myName = "John"
    // myNumber = 12

    increase=()=>{
        console.log("Working")
        console.log(this.state)
        this.setState({myNumber: this.state.myNumber = this.state.myNumber+1})
        // this.myNumber += 1
        // console.log(this.myNumber)
    }
    componentDidMount(){
        console.log("I have mounted")
    }
    componentWillUnmount(){
        console.log("I have unmounted")
    }
    componentDidUpdate(){
        console.log("I have updated")
    }
    componentDidCatch(error, info){
        console.log("I don catch am")
        console.log(error)
    }
    render() { 
        console.log(this.props)
        return ( 
            <>
                <h1>Hello {this.state.myName}</h1>
                <h1>Good Morning {this.props.title}</h1>
                <h1>Age is: {this.state.myNumber}</h1>
                <button onClick={this.increase}>Increase Number</button>
            </>
         );
    }
}
 
export default ClassReact;

// import React from 'react'

// const ClassReact = () => {
//   return (
//     <div>ClassReact</div>
//   )
// }

// export default ClassReact

// import React from 'react'

// function ClassReact() {
//   return (
//     <div>ClassReact</div>
//   )
// }

// export default ClassReact

// import React from 'react'

// export const ClassReact = () => {
//   return (
//     <div>ClassReact</div>
//   )
// }

// import React from 'react'

// export default function ClassReact() {
//   return (
//     <div>ClassReact</div>
//   )
// }

