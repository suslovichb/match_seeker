import React, { Component } from 'react';
import axiosInstance from "../axiosApi";

class Entry extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginUsername:"",
            loginPassword:"",
            registerUsername:"",
            registerPassword:"",
            registerEmail:"",
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    async handleLoginSubmit(event){
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/token/obtain/', {
                username: this.state.loginUsername,
                password: this.state.loginPassword
            });
            axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async handleRegisterSubmit(event) {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/user/create/', {
                username: this.state.registerUsername,
                email: this.state.registerEmail,
                password: this.state.registerPassword
            });
            this.setState({errors:{}});
            return response;
        } catch (error) {
            console.log(error.stack);
            this.setState({errors:error.response.data});
        }
    }

    render(){
        return(
            <div id="entry-container">
                <div id="entry-wrapper">
                    <div className="card border-info mb-3">
                        <div className="card-header"><h4>Login</h4></div>
                        <div className="card-body">
                            <form onSubmit={this.handleLoginSubmit}>
                                <div className="form-group">
                                    <label htmlFor="login-username">Username</label>
                                    <input type="text" className="form-control" id="login-username"
                                           placeholder="Enter username" name="loginUsername"
                                           value={this.state.loginUsername} onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="login-password">Password</label>
                                    <input type="password" className="form-control" id="login-password"
                                           placeholder="Enter password" name="loginPassword"
                                           value={this.state.loginPassword} onChange={this.handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block" id="login-submit">Submit
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="card border-warning mb-3">
                        <div className="card-header"><h4>Register</h4></div>
                        <div className="card-body">
                            <form onSubmit={this.handleRegisterSubmit}>
                                <div className="form-group">
                                    <label htmlFor="register-username">Username</label>
                                    <input type="text" className="form-control" id="register-username"
                                           placeholder="Enter username" name="registerUsername"
                                           value={this.state.registerUsername} onChange={this.handleChange}
                                    />
                                    { this.state.errors.username ? this.state.errors.username : null}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="register-email">Email</label>
                                    <input type="email" className="form-control" id="register-email"
                                           placeholder="Enter email" name="registerEmail"
                                           value={this.state.registerEmail} onChange={this.handleChange}
                                    />
                                    { this.state.errors.email ? this.state.errors.email : null}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="register-password">Password</label>
                                    <input type="password" className="form-control" id="register-password"
                                           placeholder="Enter password" name="registerPassword"
                                           value={this.state.registerPassword} onChange={this.handleChange}
                                    />
                                    { this.state.errors.password ? this.state.errors.password : null}
                                </div>
                                <button type="submit" className="btn btn-warning btn-block"
                                        id="register-submit">Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Entry;