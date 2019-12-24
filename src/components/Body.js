import React from "react";

function Body(props){
    return (
        <body className="text-center">
            <form className="form-signin">
                <img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please Sign in</h1>
                <input type="text" className="form-control" placeholder="First name" required />
                <input type="text" className="form-control" placeholder="Last name" required />
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                    onClick={() => {props.login()}}
                >Sign in</button>
            </form>
        </body>
    );
}

export default Body;