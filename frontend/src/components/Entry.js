import React from 'react';


const Entry = ({
    loginUsername,
    loginPassword,
    registrationUsername,
    registrationEmail,
    registrationPassword,
    onRegistrationSubmit,
    onLoginSubmit,
    onLoginUsernameChange,
    onLoginPasswordChange,
    onRegistrationPasswordChange,
    onRegistrationEmailChange,
    onRegistrationUsernameChange
}) => (
    <div id="entry-container">
        <div id="entry-wrapper">
            <div className="card border-info mb-3">
                <div className="card-header"><h4>Login</h4></div>
                <div className="card-body">
                    <form onSubmit={onLoginSubmit}>
                        <div className="form-group">
                            <label htmlFor="login-username">Username</label>
                            <input type="text" className="form-control" id="login-username"
                                   placeholder="Enter username" name="loginUsername"
                                   value={loginUsername} onChange={onLoginUsernameChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="login-password">Password</label>
                            <input type="password" className="form-control" id="login-password"
                                   placeholder="Enter password" name="loginPassword"
                                   value={loginPassword} onChange={onLoginPasswordChange}
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
                    <form onSubmit={onRegistrationSubmit}>
                        <div className="form-group">
                            <label htmlFor="register-username">Username</label>
                            <input type="text" className="form-control" id="register-username"
                                   placeholder="Enter username" name="registerUsername"
                                   value={registrationUsername} onChange={onRegistrationUsernameChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="register-email">Email</label>
                            <input type="email" className="form-control" id="register-email"
                                   placeholder="Enter email" name="registerEmail"
                                   value={registrationEmail} onChange={onRegistrationEmailChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="register-password">Password</label>
                            <input type="password" className="form-control" id="register-password"
                                   placeholder="Enter password" name="registerPassword"
                                   value={registrationPassword} onChange={onRegistrationPasswordChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-warning btn-block"
                                id="register-submit">Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default Entry;
