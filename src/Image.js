import React, { Component } from 'react'
class Image extends Component {

    render() {
        console.log(this.props.image)
        return (
            <div>
               <img src={this.props.image}/>
            </div>
        )
        }        
}
export default Image