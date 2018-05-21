import React from "react";
import { userActions } from "../../actions/user.actions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { username, password, submitted } = this.state;

    return (
      <div className="col-sm-4">
        <div className="card-body">
          <a href className="float-right btn btn-outline-primary">
            Sign up
          </a>
          <h4 className="card-title mb-4 mt-1">Sign in</h4>
          <p>
            <a href className="btn btn-block btn-outline-info">
              {" "}
              <i className="fab fa-twitter" /> &nbsp; Login via Twitter
            </a>
            <a href className="btn btn-block btn-outline-primary">
              {" "}
              <i className="fab fa-facebook-f" /> &nbsp; Login via facebook
            </a>
          </p>
          <hr />
          <form name="form" onsubmit="{this.handleSubmit}">
            <div className="form-group">
              <input
                name
                className="form-control"
                placeholder="Email or login"
                type="email"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="******"
                type="password"
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    {" "}
                    Login
                  </button>
                </div>
              </div>
              <div className="col-md-6 text-right">
                <a className="small" href="#">
                  Forgot password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
