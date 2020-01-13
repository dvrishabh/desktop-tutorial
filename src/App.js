import React, {Component} from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
    state = {
        fields: {}
    };
    onSubmit = fields => {
        this.setState({fields});
        console.log("App components got fields: ", fields)
    }
  render() {
      return (
          <div className='App'>
              <Form onSubmit={ fields => this.onSubmit(fields)}/>
              
              <p>{JSON.stringify(this.state.fields,null,2)}</p>
          </div>
      );
  }
}

export default App;