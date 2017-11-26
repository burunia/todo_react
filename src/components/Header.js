import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Button from './button/index';
import Serch from './serch/index';

class Header extends Component {
    render() {
        return (
            <div>

                <h1>Heder</h1>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/todo">To Do</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/Form">Form</Link></li>
                    <Button label='OK!'/>
                </ul>
                <Serch/>

            </div>
        );
    }
}
export default Header;