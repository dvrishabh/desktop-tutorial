import React, { Component } from 'react';
export default class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',

    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
    
        })         
    };

    render() {
        return (
            <form>
                <input
                    name='firstName'
                    placeholder='First Name'
                    value={this.state.firstName}
                    onChange={e => this.change(e)}

                />
                <br />
                <input
                    name='lastName'
                    placeholder='Last Name'
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                    // onChange={e => this.setState({ lastName: e.target.value })}

                />
                <br />
                <input
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={e => this.change(e)}
                    // onChange={e => this.setState({ firstName: e.target.value })}

                />
                <br />
                <input
                    name='userName'
                    placeholder='User Name'
                    value={this.state.userName}
                    onChange={e => this.change(e)}
                    // onChange={e => this.setState({ userName: e.target.value })}

                />
                <br />
                <input
                    name='email'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={e => this.change(e)}
                    // onChange={e => this.setState({ email: e.target.value })}

                />
                <br />
                <button onClick={e => this.onSubmit(e)} >Submit</button>
            </form>
        );
    }
}

