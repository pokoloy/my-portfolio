import React from 'react';
import ReactDOM from 'react-dom';

class Football extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          age: null,
        };
      }
      myChangeHandler1 = (event) => {
        // let nam = event.target.name;
        // let val = event.target.value;
        // this.setState({[nam]: val});

        this.setState({
            username: event.target.value,
        });
      }
      myChangeHandler2 = (event) => {
        // let nam = event.target.name;
        // let val = event.target.value;
        // this.setState({[nam]: val});

        this.setState({
            age: event.target.value
        });
      }
      render() {
        return (
          <form>
          <h1>Hello {this.state.username} {this.state.age}</h1>
          <p>Enter your name:</p>
          <input
            type='text'
            // name='username'
            onChange={this.myChangeHandler1}
          />
          <p>Enter your age:</p>
          <input
            type='text'
            // name='age'
            onChange={this.myChangeHandler2}
          />
          </form>
        );
      }
    }

export default Football;