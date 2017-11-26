import React, {Component} from 'react';
import './index.css'
// const style = {
//    backgroundColor:'Green',width:50
// };

class Button extends Component {
    render() {
        return (
            <div>
                <button className='btn-container'>{this.props.label}</button>
            </div>
        )
    }
}

export default Button;