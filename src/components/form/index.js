import React, {Component} from 'react';
import './index.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            title: 'Lorem',
            content: 'ahsdaksjdbaksdjb',
            category: 'books'
        };
    }

    handleTitle(event) {
        this.setState({
            title: event.target.value
        });
    }
    handleContent(event) {
        this.setState({
            content: event.target.value
        });
    }
    handleSubmit(event) {
       console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <p>{this.state.content}</p>
                <p>Category{this.state.category}</p>

                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type='text' onChange={this.handleTitle}/>
                    <textarea type='text' onChange={this.handleContent}/>
                    <select>
                        <option> Opcja 1</option>
                        <option> Opcja 2</option>
                        <option> Opcja 3</option>
                    </select>
                    <input type='submit' value='Wyślij mnie'/>
                </form>
            </div>
        )
    }
}

export default Form;