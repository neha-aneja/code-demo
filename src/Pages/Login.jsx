import React from 'react';

const Login = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <div className="wrap_mid">
                        <form className="row g-3 form-container">
                            <div className="col-md-12">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-12">
                                <label for="inputPassword4" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-12 mb-3">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;