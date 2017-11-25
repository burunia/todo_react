import React,{Component} from 'react';

class ToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [
                'Nauczyć sie do tetu',
                'Zjeść sniiadanie',
                'Umyć okna'
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>ToDo List</h1>
                <ol>
                    {this.state.tasks.map((task,index)=>(
                        <li key={index}>{task}</li>
                    ))}
                </ol>
            </div>
        );

    }
}
export default ToDo;