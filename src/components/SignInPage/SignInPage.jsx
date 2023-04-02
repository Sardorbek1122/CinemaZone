import React from "react";
import "../../styles/App.scss";
import { withRouter } from "react-router";
import Footer from "../Footer";

class SignInPage extends React.Component {
  state = {
    email: "",
    password: "",
    passwordError: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      passwordError: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (password.length < 8 || !/\d/.test(password)) {
      this.setState({
        passwordError:
          "Password must be at least 8 characters long and contain a number",
      });
      return;
    }
    // submit the form
    console.log(`Email: ${email}, Password: ${password}`);
  
    if (email !== " ") {
      // Redirect to the main page
      this.props.history.push("/movies");
    } else {
      alert("Invalid email or password");
    }
  };

  render() {
    const { email, password, passwordError } = this.state;
    return (
      <div className="signing-page">
        <div className="signing-page__wrapper">
          <div className="signing-page__header">
            <a href="/" class="navbar__logo">
              CinemaZone
            </a>
            <select name="language" id="lang" className="navbar__language">
              <option value="eng">English</option>
              <option value="rus">Russian</option>
            </select>
          </div>
          <div className="signing-page__form-wrapper">
            <div className="signing-page__form-body">
              <h2 className="signing-page__form-body-header">Sign In</h2>
              <form
                action="/"
                method="get"
                className="signing-page__form"
                onSubmit={this.handleSubmit}
              >
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    required
                    onChange={this.handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={this.handleInputChange}
                  />
                  {passwordError && (
                    <div className="error">{passwordError}</div>
                  )}
                </div>
                <button type="submit">Sign In</button>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(SignInPage);
