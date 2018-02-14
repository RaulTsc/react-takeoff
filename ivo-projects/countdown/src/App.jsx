import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Clock from './Clock';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: 'November 24, 2018',
            newDeadline: ''
        };
    };

    //a method that changes state 
    changeDeadline() {
        //example of mutating state directly --> NOT OK
        //this.setState.deadline = 'January 04, 1995'; 
        console.log('This was the old deadline', this.state.deadline);
        this.setState({deadline: this.state.newDeadline});
        console.log('This is the new deadline', this.state.newDeadline);
    }
    render() {
        return(
        <div className='App'>
            <div className='App-title'>Countdown to {this.state.deadline}</div>
            <Clock deadline={this.state.deadline} />
            <div>
                <input 
                    type="text" 
                    placeholder="new date" 
                    onChange={event => this.setState({newDeadline: event.target.value })}
                />
                <button onClick={() => this.changeDeadline()}>
                    Submit
                </button>
            </div>
        </div>
        )    
    }
}

export default App;