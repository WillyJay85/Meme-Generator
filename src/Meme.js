import React, { Component} from 'react'
import PropTypes from 'prop-types'

class Meme extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        allowDelete: PropTypes.bool,
        selectHandler: PropTypes.func.isRequired,
        deleteHandler: PropTypes.func.isRequired
    
}
renderDelete = () => {
    if (this.props.allowDelete) {
        return (
            <button onClick={this.props.deleteHandler}>-</button>
        )
    }
}
render() {
return (
    <div>
        <button onClick={this.props.selectHandler} >{this.props.title}</button>
        {this.renderDelete()}
    </div>
)
}
}
export default Meme